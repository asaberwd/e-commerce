import express from 'express'
const router = express.Router()

import Product from './../models/product.mjs'
import User from './../models/user.mjs'
import orderProduct from './../models/orderProduct.mjs'


import authen from './../../middleware/authen.mjs'
import adminAuth from './../../middleware/adminAuth'
import upload from './../../middleware/uploadImg'


import info from './../../details.mjs'





import { addnewAdmin, adminLogin } from './log/adminRoutes.mjs'

import { addNewCategory, showCategoriesByAdmin, getCatsByCatId, updateCategory,deleteCatByCatId } from './log/categoryRoutes.mjs'
import { viewAllProducts, showAllCats, userLogin, registerNewUser, userSendMail, adminViewUsers  } from './log/userRoutes.mjs'
import { addNewProduct, showAllProducts, deleteProduct, editProduct, showProductsByCategory, showProductByProId, showProductBySlug } from './log/productRoutes.mjs'
import { createNewOrder, viewAllOrders} from './log/orderRoutes.mjs'



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

//---------- admin product routes ---------

// type   get
// desc   view all users

router.get('/api/viewusers', adminAuth, (req, res)=>{
    adminViewUsers(req, res)
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
    showProductByProId(req, res)
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
    showProductsByCategory(req, res)
})




// type  patch
// desc  update category

router.patch('/api/category/:id', adminAuth, (req, res)=>{
    
    updateCategory(req, res)
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







router.get('/api/info', (req, res)=>{
    
    res.send(info)
})

router.post('/api/info', (req, res)=>{

    info.title = req.body.title,
    info.describtion = req.body.describtion

    res.json(info)
    
})



router.post('/api/contactus', (req, res)=>{
    userSendMail(req, res)
})


// order routes start here


router.post('/api/newOrder', (req, res)=>{
    createNewOrder(req, res)
})


router.get('/api/viewallorders', adminAuth, (req, res)=>{
    viewAllOrders(req, res)
})



export default router