import express from 'express'
const router = express.Router()

import Product from './../models/product.mjs'
import User from './../models/user.mjs'
import orderProduct from './../models/orderProduct.mjs'


import authen from './../../middleware/authen.mjs'
import adminAuth from './../../middleware/adminAuth'
import upload from './../../middleware/uploadImg'


import info from './../../details.mjs'





import {addnewAdmin, adminLogin, addNewProduct, editProduct, showAllProducts, showSingleCategory, showProductBySlug,
     deleteProduct, addNewCategory, showCategoriesByAdmin, getCatsByCatId, getProductsByCategory,
     deleteCatByCatId, updatePro } from './bus'

import { viewAllProducts, showAllCats, userLogin, registerNewUser } from './user-bus'






//--------- admin section -------------


// type   post
// desc   add new admin

router.post('/api/newadmin', adminAuth, (req, res)=>{
    addnewAdmin(req, res)
})


// type   post 
// desc   admin log in


router.post('/api/admin/login' , (req, res)=>{
    adminLogin(req,res)
})




// type   post
// desc   add new product   

router.post('/api/addproduct', upload.array('images', 4), (req, res)=>{
    addNewProduct(req,res)

})




// type   patch
// desc   edit product

router.patch('/api/product/:id', (req, res)=>{
    editProduct(req, res)
})



// type  get
// desc  show all products

router.get('/api/products', adminAuth,(req, res)=>{
    showAllProducts(req,res)
})



// type  get
// desc  show specific product by product id


router.get('/api/product/:id', (req, res)=>{
    showSingleCategory(req, res)
})


// type  get
// desc  show specific product by product slug


router.get('/api/products/:slug', (req, res)=>{
    showProductBySlug(req, res)
    
})


// type  delete
// desc  delete specific product

router.delete('/api/product/:id', (req, res)=>{
    deleteProduct(req, res)
})




//------ admin category routes -------


// type   post
// desc   add new category

router.post('/api/addcategory', adminAuth, (req, res)=>{
    addNewCategory(req, res)
})


// type   get
// desc   show all categories

router.get('/api/categories', adminAuth, (req, res)=>{
    showCategoriesByAdmin(req,res)
})


// type  get
// desc  get specific category by catId

router.get('/api/category/:id', adminAuth, (req, res)=>{
    getCatsByCatId(req, res)
})


// type  get 
// desc  find all products in specific category

router.get('/api/products/category/:id', async (req, res)=>{
    getProductsByCategory(req, res)
})




// type  patch
// desc  update category

router.patch('/api/category/:id', adminAuth, (req, res)=>{
    
    updatePro(req, res)
})


// type    delete 
// desc    delete specific category

router.delete('/api/category/:id', adminAuth, (req, res)=>{
    deleteCatByCatId(req, res)
    })



// -------- user routes --------



// type  get
// desc  show all products to users

router.get('/api/viewproducts', (req, res)=>{
    
    viewAllProducts(req, res)
})


// type   get
// desc   show all categories

router.get('/api/viewcategories', (req, res)=>{
    
    showAllCats(req, res)
})



// type  post
// desc  add new user

router.post('/api/newuser', (req, res)=>{

    registerNewUser(req, res)
})





// type   post 
// desc   user login using email & password

router.post('/api/userlogin' , (req, res)=>{
    
    userLogin(req, res)
})


// type   get
// desc   user logout and remove token

router.get('/api/logout', function(req, res) {
    res.send({ auth: false, token: null });
  });

  // type  get 
  // desc  show all users

  router.get('/api/users', adminAuth, (req, res)=>{
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




export default router