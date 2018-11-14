import Category from './../../models/category.mjs'
import Product from './../../models/product.mjs'


import generate from 'nanoid/generate'
import slugify from './../../../helpers/slugify.mjs'



// add new product
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


// Edit product

export const editProduct = (req, res)=>{

    Product.findOneAndUpdate( {proId : req.params.id},{$set: req.body} , {new : true})
    .then((pro)=>{
        if(!pro) return res.status(404).json('product is not exist')


        res.json('product updated succesfully')
        console.log('product updated')
        console.log(res.locals.userId)

    })
    .catch((err)=>{
        res.status(404).json('error updating product')
        console.log(`error updating product : ${err}`)})

}


// show all products

export const showAllProducts = (req, res)=>{
    res.cookie("token","token" , { maxAge: 900000, httpOnly: false })
    Product.find().sort({_id:-1})
    .populate('category')
    .then((pros)=>{
        console.log(req.cookies)
        res.json({pros, auth : res.locals.role})
        console.log('products fetching ...')
    })
    .catch((err)=>{
        res.status(404).json('error showing products')
    })
}


// delete product

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


// show single product by proId

export const showProductByProId = (req, res) =>{
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


// show single product by slug

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



// show products by category

export const showProductsByCategory = async (req, res)=>{
    let proByCat = await Product.find({category : req.params.id})
    try{
        if(!proByCat) return res.status(404).json('no products in this cat')
        res.json(proByCat)
        console.log(proByCat.length)
    }catch(err){
        throw err
    }
}

