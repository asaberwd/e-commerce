import express from 'express'
const router = express.Router()

import Product from './../models/product.mjs'
import Category from './../models/category.mjs'
import Counter from './../models/counter.mjs'
import User from './../models/user.mjs'
import key from './../../config/keys.mjs'
import orderProduct from './../models/orderProduct.mjs'
import userToken from './../models/userToken.mjs'


import slugify from './../../helpers/slugify.mjs'
import sendMail from './../../helpers/sendMail'
import authen from './../../middleware/authen.mjs'


import bcrypt from 'bcryptjs' 
import validator from 'validator'
import jwt from 'jsonwebtoken'








// admin section

// type   post
// desc   add new product   

router.post('/api/addproduct', (req, res)=>{

    let newpro = new Product({
        productName : req.body.name,
        slug : slugify(req.body.name),
        prodDescription : req.body.desc,
        unitPrice : req.body.price,
        quantity : req.body.que,
        weight : req.body.weight,
    });
   
    newpro.save()
    .then((pro)=>{
        console.log(pro)
        res.json('product added')
    })
    .catch((err)=>{
        res.status(404).json('error')
        console.log(`error is : ${err}`)})

})




// type   patch
// desc   edit product

router.patch('/api/product/:id', authen, (req, res)=>{
    Product.findOneAndUpdate( {slug : req.params.id},{$set: req.body} , {new : true})
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



//type  get
//desc  show all products

router.get('/api/products', (req, res)=>{
    Product.find()
    .then((pros)=>{
        res.json(pros)
        console.log(pros)
    })
    .catch((err)=>{
        res.status(404).json('error showing products')
    })

})



//type  get
//desc  show specific product by product id


router.get('/api/product/:id', (req, res)=>{
    Product.findOne({proId:req.params.id})
    .then((pro)=>{
        res.json(pro)
        console.log(pro)
    })
    .catch(()=>{
        res.status(404).json('error showing product')
    })
})



//type  delete
//desc  delete specific product

router.delete('/api/product/:id', (req, res)=>{
    let id = req.params.id 
    Product.findOneAndDelete({proId : id})
    .then((pro)=>{
        if(!pro) return res.status(404).json('product is not exist')
        res.json(`product ${pro.productName} was deleted`)})
    .catch((err)=>{
        res.status(404).json('product id not found')
        console.log(err)
    })

})




//------ admin category routes -------


// type   post
// desc   add new category

router.post('/api/addcategory', (req, res)=>{
    
    let newcat = new Category({
        catName : req.body.name,
        slug : slugify(req.body.name),
        description : req.body.desc,
        active : req.body.active,
    });

    newcat.save()
    .then((cat)=>{
        console.log(cat)
        res.json('category added')
    })
    .catch((err)=>console.log(`error posting new category is : ${err}`))
})


// type   get
// desc   show all categories

router.get('/api/categories', (req, res)=>{
    
    Category.find()
    .then((cats)=>{
        res.json(cats)
        console.log(cats)
    })
    .catch((err)=>{
        res.status(404).json('error getting cats')
        console.log(`error showing all cats is : ${err}`)})
})


//type  get
//desc  get specific category by catId

router.get('/api/categories/:id', (req, res)=>{
    
    Category.findOne({catId : req.params.id})
    .then((cat)=>{
        res.json(cat)
        console.log(cat)
    })
    .catch((err)=>{
        res.status(404).json('error getting category')
        console.log(`error showing category is : ${err}`)})
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
        res.status(404).json('error updating category')
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
        res.status(404).json('error deleting category')
        console.log(`error deleting category is : ${err}`)})
    })



// -------- user routes --------

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
    .then((user)=>{
        if(user) return res.status(400).json('email already exist')
        
        //hashing password
        let hashpassword = bcrypt.hashSync(req.body.pass, 8)

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
            res.json({auth: true , token})
            console.log(user)
            sendMail(user.email, 'welcom message', `welcome ${user.firstName} at our website`)

        })

    })

    .catch((err)=>{res.status(400).json(`error adding new user : ${err}`)})


})



// type    post
// desc    user log in


router.get('/api/me', (req, res)=>{
    let token = req.headers['x-access-token']
    if(!token) res.status(401).send('no token provided')

    jwt.verify(token , key.jwtKey , function(err, decoded){
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    
    res.status(200).json({decoded});

    })
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
            let newToken = new userToken({
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