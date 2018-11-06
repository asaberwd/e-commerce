import Admin from './../models/admin.mjs'
import UserToken from './../models/userToken.mjs'
import Product from './../models/product.mjs'
import Category from './../models/category.mjs'
import orderProduct from './../models/orderProduct.mjs'

import validator from 'validator'
import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken'
import generate from 'nanoid/generate'
import slugify from './../../helpers/slugify.mjs'

import key from './../../config/keys.mjs'







//--------- admin section -------------


export const addnewAdmin = async (req, res)=>{

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
}


export const adminLogin = (req, res)=>{

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
}


export const addNewProduct = (req, res)=>{

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
        .then(cat=> console.log(`product added to category${cat.catName}`)
        )
        console.log(`new product added is : ${pro.productName}`)
        res.json('product added')
    })
    .catch((err)=>{
        res.status(404).json('error')
        console.log(`error is : ${err}`)})

}



export const editProduct = (req, res)=>{

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

}


export const showAllProducts = (req, res)=>{
    Product.find().sort({_id:-1})
    .populate('category')
    .then((pros)=>{
        res.json({pros, auth : res.locals.role})
        console.log('products fetching ...')
    })
    .catch((err)=>{
        res.status(404).json('error showing products')
    })
}

export const showSingleCategory = (req, res) =>{
    Product.findOne({proId:req.params.id})
    .then((pro)=>{
        if(!pro) return res.status(404).json('product not found')
        res.json(pro)
        console.log(pro)
    })
    .catch((e)=>{
        res.status(404).json(`error showing product : ${e}`)
    })
}

export const showProductBySlug = (req,res)=>{
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
}



export const updatePro = (req, res)=>{

    Category.findOneAndUpdate({catId : req.params.id}, {$set : req.body}, {new : true})
    .then((cat)=>{
        if(!cat) return res.status(404).json('category is not exist')

        res.json(cat)
        console.log(cat)
    })
    .catch((err)=>{
        res.status(401).json('error updating category')
        console.log(`error updating category is : ${err}`)})
}




export const deleteProduct = (req, res) =>{
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
}


export const addNewCategory = async (req, res)=>{

    // validate empty category name && empty category status and handel error
    if(validator.isEmpty(req.body.name)) return res.status(400).json({name : 'must not be null'})
    if(req.body.active === '') return res.status(400).json({active : 'must choose category status'})

    //check if category exist and handel error
    let found = await Category.findOne({catName : req.body.name})
    if(found) return res.status(400).json({name : 'category already exist'})

    //create new instance of category
    let newcat = new Category({
        catName : req.body.name,
        slug : slugify(req.body.name),
        description : req.body.desc,
        active : req.body.active,
        catId : generate('1234567890abcdefghimnABCDEFGHIMNOY', (Math.floor(Math.random() * 11)) ) 
    });

    //save new category document to db
    let cat = await newcat.save()
    try{
        console.log(cat)
        res.json({ cat ,msg:`category ${cat.catName} added successfully`})
    }catch(err){console.log(`error posting new category is : ${err}`)
                res.status(400).json(err)  }
}


export const showCategoriesByAdmin = async (req, res) =>{

    let cats = await Category.find().sort({_id:-1})
    try{
        res.json({cats, auth : res.locals.role})
        console.log('showing categories')
    }catch(err){
        res.status(404).json('error getting cats')
        console.log(`error showing all cats is : ${err}`)}

}

export const getCatsByCatId = async (req, res)=>{

    let cat = await Category.findOne({catId : req.params.id})
    try{
        if(!cat) return res.status(404).json('category not found')
        res.json(cat)
        console.log(cat)
    }catch(err){
        res.status(401).json('error getting category')
        console.log(`error showing category is : ${err}`)
    }
    
}


export const getProductsByCategory = async (req, res)=>{
    let proByCat = await Product.find({category : req.params.id})
    try{
        if(!proByCat) return res.status(404).json('no products in this cat')
        res.json(proByCat)
        console.log(proByCat.length)
    }catch(err){
        throw err
    }
}


export const deleteCatByCatId = async (req, res)=>{

    let del = await Category.findOneAndDelete({catId : req.params.id})
    try{
        if(!del) return res.status(404).json('category is not exist')
        res.json(del)
        console.log(del)
    }catch(err){
        res.status(401).json('error deleting category')
        console.log(`error deleting category is : ${err}`)
    }
           
}


