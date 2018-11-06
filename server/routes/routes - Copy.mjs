import express from 'express'
const router = express.Router()

import Product from './../models/product.mjs'
import Category from './../models/category.mjs'
import Counter from './../models/counter.mjs'
import User from './../models/user.mjs'
import key from './../../config/keys.mjs'
import orderProduct from './../models/orderProduct.mjs'
import UserToken from './../models/userToken.mjs'
import Admin from './../models/admin.mjs'


import slugify from './../../helpers/slugify.mjs'
import sendMail from './../../helpers/sendMail'
import authen from './../../middleware/authen.mjs'
import adminAuth from './../../middleware/adminAuth'
import upload from './../../middleware/uploadImg'


import info from './../../details.mjs'



import bcrypt from 'bcryptjs' 
import validator from 'validator'
import jwt from 'jsonwebtoken'
import generate from 'nanoid/generate'









//--------- admin section -------------


// type   post
// desc   add new admin

router.post('/api/newadmin', adminAuth, async  (req, res)=>{

    if(res.locals.role !== 'admin') return res.status(401).json('you are not admin so not authorized to be here')
    let hashedpass = bcrypt.hashSync(req.body.password.trim(), 10)
    
    try{ 
        let isexist = await Admin.findOne({email : req.body.email})
                if(isexist) return res.status(401).json('admin is already exist by email')

            let newAdmin = new Admin({
                email : req.body.email,
                password : hashedpass,
                role : req.body.role,
            })

            let newadmin = await newAdmin.save()
                console.log(newadmin)
                res.json(newadmin)

       } catch(err) { console.log(err) ; throw err }

})


// type   post 
// desc   admin log in


router.post('/api/admin/login' , (req, res)=>{
    // find admin by email
    Admin.findOne({email : req.body.email})
    .then((admin)=>{
        if(!admin) return res.status(401).send({auth : false ,error :'admin not found'})
        // compare entered password with stored one
        bcrypt.compare(req.body.password, admin.password)
        .then((matched)=>{
            if(!matched) return res.status(401).send({auth : false ,error :'email and password are not matched'})

            //generate token for this login
            let token = jwt.sign({id : admin._id , email : admin.email}, key.jwtKey, { expiresIn: 86400 })
            let tokenDecode = jwt.decode(token)

            //generate new userToken document
            let newToken = new UserToken({
                token,
                user : admin._id,
                createdAt : tokenDecode.iat ,
                expiresIn : tokenDecode.exp
            })
            newToken.save()
            .then((tokenAdded)=>{
                console.log(`token added : ${tokenAdded.token}`)
            })
            res.header('x-access-token', token)
            res.send({ auth : true, token  })
        })
    })
    .catch((e)=>{
        res.json('error')
        console.log(`error is :${e}`);
    })
})







// type   post
// desc   add new product   

router.post('/api/addproduct', upload.array('images', 4), (req, res)=>{
    const { proname,  price,  desc,  que,  weight, discount, color, size, supplier, note, category } = req.body

    let imgs = []
    req.files.map(img =>{
        let imgurl = req.protocol + '://' + req.hostname + ':8080'+ '/uploads/' + img.filename
       return imgs.push(imgurl)
    })

    let newpro = new Product({
        productName : proname,
        proId: generate('1234567890abcdefghimnABCDEFGHIMNOY',7),
        slug : slugify(proname),
        prodDescription : desc,
        unitPrice : price,
        quantity : que,
        pictures: imgs,
        category,
        weight,
        color,
        size,
        discount,
        note,
        supplier,
    });
   
    newpro.save()
    .then((pro)=>{
        Category.findByIdAndUpdate(category , {$inc : {nOfProducts : 1}})
        .then(cat=> console.log(cat)
        )
        console.log(pro)
        res.json('product added')
    })
    .catch((err)=>{
        res.status(404).json('error')
        console.log(`error is : ${err}`)})

})




// type   patch
// desc   edit product

router.patch('/api/product/:id', (req, res)=>{
    Product.findOneAndUpdate( {proId : req.params.id},{$set: req.body} , {new : true})
    .then((pro)=>{
        if(!pro) return res.status(404).json('product is not exist')

        // update orderproducts ( or cart ) if price updated

        if(req.body.unitPrice){

            //find all instances of product which in cart and order is not submitted
            orderProduct.find({product :pro._id , order : null })
            .then((orderpro)=>{
                //loop all instances of product in cart and update price for each one
                orderpro.map((x)=>{
                    orderProduct.findByIdAndUpdate(x._id , {$set : {price : req.body.unitPrice}}, {new : true})
                    .then((re)=>{ 
                        //update total after updating price
                        orderProduct.findByIdAndUpdate(re._id, {$set:{total:(re.price * re.quantity)- re.discount}}, {new:true})
                        .then((totupdate)=>{console.log(totupdate.total)})
                        console.log(re.price)
                    })
                })
            })
        }

        res.json('product updated succesfully')
        console.log('product updated')
        console.log(res.locals.userId)

    })
    .catch((err)=>{
        res.status(404).json('error updating product')
        console.log(`error updating product : ${err}`)})

})



// type  get
// desc  show all products

router.get('/api/products', adminAuth,(req, res)=>{
    Product.find().sort({_id:-1})
    .populate('category')
    .then((pros)=>{
        res.json({pros, auth : res.locals.role})
        console.log('products fetching ...')
    })
    .catch((err)=>{
        res.status(404).json('error showing products')
    })

})



// type  get
// desc  show specific product by product id


router.get('/api/product/:id', (req, res)=>{
    Product.findOne({proId:req.params.id})
    .then((pro)=>{
        if(!pro) return res.status(404).json('product not found')
        res.json(pro)
        console.log(pro)
    })
    .catch((e)=>{
        res.status(404).json(`error showing product : ${e}`)
    })
})


// type  get
// desc  show specific product by product slug


router.get('/api/products/:slug', (req, res)=>{
    Product.findOne({slug:req.params.slug})
    .then((pro)=>{
        if(!pro) return res.status(404).json('product not found')
        res.json(pro)
        console.log(pro)
    })
    .catch((err)=>{
        res.status(404).json(`error showing product ${err}`)
        console.log(err)
    })
})


// type  delete
// desc  delete specific product

router.delete('/api/product/:id', (req, res)=>{
    let id = req.params.id 
    Product.findOneAndDelete({proId : id})
    .then((pro)=>{
        if(!pro) return res.status(404).json('product is not exist')
        res.json(`product ${pro.productName} was deleted`)
    })
    .catch((err)=>{
        res.status(404).json(` error deleting product : ${err}`)
        console.log(err)
    })

})




//------ admin category routes -------


// type   post
// desc   add new category

router.post('/api/addcategory', adminAuth, (req, res)=>{
    
    let newcat = new Category({
        catName : req.body.name,
        slug : slugify(req.body.name),
        description : req.body.desc,
        active : req.body.active,
        catId : generate('1234567890abcdefghimnABCDEFGHIMNOY', (Math.floor(Math.random() * 11)) ) 
    });

    newcat.save()
    .then((cat)=>{
        console.log(cat)
        res.json(cat)
    })
    .catch((err)=>console.log(`error posting new category is : ${err}`))
})


// type   get
// desc   show all categories

router.get('/api/categories', adminAuth, (req, res)=>{
    
    Category.find().sort({_id:-1})
    .then((cats)=>{
        res.json({cats, auth : res.locals.role})
        console.log('showing categories')
    })
    .catch((err)=>{
        res.status(404).json('error getting cats')
        console.log(`error showing all cats is : ${err}`)})
})


// type  get
// desc  get specific category by catId

router.get('/api/category/:id', (req, res)=>{
    
    Category.findOne({catId : req.params.id})
    .then((cat)=>{
        if(!cat) return res.status(404).json('category not found')
        res.json(cat)
        console.log(cat)
    })
    .catch((err)=>{
        res.status(401).json('error getting category')
        console.log(`error showing category is : ${err}`)})
})


// type  get 
// desc  find all products in specific category

router.get('/api/products/category/:id', async (req, res)=>{
    let proByCat = await Product.find({category : req.params.id})
    try{
        if(!proByCat) return res.status(404).json('no products in this cat')
        res.json(proByCat)
        console.log(proByCat.length)
    }catch(err){
        throw err
    }
    
})




// type  patch
// desc  update category

router.patch('/api/category/:id', (req, res)=>{
    Category.findOneAndUpdate({catId : req.params.id}, {$set : req.body}, {new : true})
    .then((cat)=>{
        if(!cat) return res.status(404).json('category is not exist')

        res.json(cat)
        console.log(cat)
    })
    .catch((err)=>{
        res.status(401).json('error updating category')
        console.log(`error updating category is : ${err}`)})


})


// type    delete 
// desc    delete specific category

router.delete('/api/category/:id', (req, res)=>{
    Category.findOneAndDelete({catId : req.params.id})
    .then((del)=>{
        if(!del) return res.status(404).json('category is not exist')

        res.json(del)
        console.log(del)
    })
    .catch((err)=>{
        res.status(401).json('error deleting category')
        console.log(`error deleting category is : ${err}`)})
    })



// -------- user routes --------



// type  get
// desc  show all products to users

router.get('/api/viewproducts', (req, res)=>{
    Product.find().sort({_id:-1})
    .populate('category')
    .then((pros)=>{
        res.json(pros)
        console.log('products fetching ...')
    })
    .catch((err)=>{
        res.status(404).json('error showing products')
    })

})


// type   get
// desc   show all categories

router.get('/api/viewcategories', (req, res)=>{
    
    Category.find().sort({_id:-1})
    .then((cats)=>{
        res.json(cats)
        console.log('showing categories')
    })
    .catch((err)=>{
        res.status(404).json('error getting cats')
        console.log(`error showing all cats is : ${err}`)})
})



// type  post
// desc  add new user

router.post('/api/newuser', (req, res)=>{

    //check all required fields are not empty
    if(req.body.fName.replace(/ /g,'').length === 0 || req.body.pass.replace(/ /g,'').length === 0 ||
       req.body.lName.replace(/ /g,'').length === 0 || req.body.email.replace(/ /g,'').length === 0 )
    return  res.status(406).json('required fields are empty')

   if(!validator.isEmail(req.body.email)) return  res.status(406).json('email is not valid')

    //check if email already exist
    User.findOne({email : req.body.email})
    .then((olduser)=>{
        if(olduser) return res.status(400).json('email already exist')
        
        //hashing password
        let hashpassword = bcrypt.hashSync(req.body.pass.trim(), 8)

        let newUser = new User({
            firstName : req.body.fName,
            lastName : req.body.lName,
            email : req.body.email,
            phone : req.body.phone,
            password : hashpassword
        })
        // creating jwt token
        //let token = jwt.sign({id : newUser._id , email : newUser.email}, key.jwtKey, { expiresIn: 86400 } )

        
        newUser.save()
        .then((user)=>{
            res.json('new user created')
            console.log(user)
            let hashedId = bcrypt.hashSync(user._id.toString(), 8)
            sendMail(user.email, 'welcom message',
             `welcome ${user.firstName} use <b style={color:red;}> ${hashedId}</b> as your secret to verify your account at our website`)

        })

    })

    .catch((err)=>{res.status(400).json(`error adding new user : ${err}`)})


})





// type   post 
// desc   user login using email & password

router.post('/api/login' , (req, res)=>{
    // find user by email
    User.findOne({email : req.body.email})
    .then((user)=>{
        if(!user) return res.status(401).send('user not found')
        // compare entered password with stored one
        bcrypt.compare(req.body.password, user.password)
        .then((matched)=>{
            if(!matched) return res.status(401).send('email and password are not matched')
            
            //generate token for this login
            let token = jwt.sign({id : user._id , email : user.email}, key.jwtKey, { expiresIn: 86400 })
            let tokenDecode = jwt.decode(token)

            //generate new userToken document
            let newToken = new UserToken({
                token,
                user : user._id,
                createdAt : tokenDecode.iat ,
                expiresIn : tokenDecode.exp
            })
            newToken.save()
            .then((tokenAdded)=>{
                console.log(`token added : ${tokenAdded.token}`)
            })
            
            res.send({ auth : true, token  })
        })
    })
    .catch((e)=>{console.log(e);res.send('error')})
})


// type   get
// desc   user logout and remove token

router.get('/api/logout', function(req, res) {
    res.send({ auth: false, token: null });
  });

  // type  get 
  // desc  show all users

  router.get('/api/users', (req, res)=>{
      User.find()
      .then((users)=>{
          res.json(users)
      })
      .catch(err =>console.log('error occured'))
  })



  // ------- order products routes --------


  // type   post
  // desc   add new product to cart

  router.post('/api/addcartitem/:id', authen, (req, res)=>{
      
    Product.findOne({_id:req.params.id})
    .then((pro)=>{
        let neworderProduct = new orderProduct({
            quantity : req.body.quantity,
            price : pro.unitPrice,
            discount : pro.discount,
            product : pro._id,
            user : res.locals.userId
        })

        neworderProduct.total = (neworderProduct.price * neworderProduct.quantity) -  neworderProduct.discount
        neworderProduct.weight = neworderProduct.quantity * pro.weight

        neworderProduct.save()
        .then((cartPro)=>{
            console.log(cartPro)
            res.json('cart product added succesfully')
        })
    })
    .catch((err)=>{
        res.status(401).json({error : err})
        console.log(err)
    })
  })



  // type   get
  // desc   view all cart products

router.get('/api/cart', authen, (req, res)=>{
    if(!res.locals.userId) return res.status(404).json('unauthorized')
    orderProduct.find({user : res.locals.userId , order : null})
    .then(products =>{
        if(!products) return res.status(404).json('cart is empty')
        console.log(products)
        res.json(products)
    })
    .catch(err=>{console.log(err);res.status(404).json(err)})
})



// type  patch
// desc  update quantity of product in cart


  router.patch('/api/cartitem/:id', authen,  (req, res)=>{
      
      let quantity = req.body.quantity
      if(quantity < 1 || quantity === null) return res.status(401).json('you must enter quantity more than 0')
      let id = req.params.id
      orderProduct.findById(id).populate('product')
      .then( ordpro=>{
        if(!ordpro) return res.status(404).json('item not found to update quantity !')

          orderProduct.findOneAndUpdate({_id : id, user: res.locals.userId },
             {$set :{ quantity, total : (ordpro.product.unitPrice * quantity) , weight : (ordpro.product.weight * quantity)  }},
                {new : true} )
             .then(updated =>{
                 if(!updated) return res.status(404).json('item not found to edit or you ar not authorised')
                 res.json(updated)
                 console.log(updated)
             })
      })
      .catch((err)=>{
        res.status(401).json({error : err})
        console.log(err)
    })
      
  })


   // type  delete
  // desc  remove product from cart

  router.delete('/api/cartitem/:id', authen, (req, res)=>{
      
    orderProduct.findOneAndDelete({_id:req.params.id, user: res.locals.userId})
    .then((del)=>{
        if(!del) return res.status(404).json('item not found to delete or you are not authorized !')
        res.json('item deleted')
        console.log(`item deleted was : ${del}`)
    })
    .catch((err)=>{
      res.status(401).json({error : err})
      console.log(err)
  })
})





router.get('/api/info', (req, res)=>{
    
    res.send(info)
})

router.post('/api/info', (req, res)=>{

    info.title = req.body.title,
    info.describtion = req.body.describtion

    res.json(info)
    
})


// counter 
router.post('/api/counter', (req, res)=>{
    let newCounter = new Counter({
        coll : req.body.coll,
        count : req.body.count,
    });

    newCounter.save()
    .then((cou)=>{console.log(`counter saved .. ${cou}`),res.json(cou)})
    .catch((err)=>console.log(`error is : ${err}`))
})

export default router