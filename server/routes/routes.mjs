import express from 'express'
const router = express.Router()
import Product from './../models/product.mjs'
import Category from './../models/category.mjs'
import Counter from './../models/counter.mjs'







// admin section

// type   post
// desc   add new product   

router.post('/api/addproduct', (req, res)=>{

    const newpro = new Product({
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




// type   patchs
// desc   edit product

router.patch('/api/product/:id', (req, res)=>{
    Product.findOneAndUpdate( {slug : req.params.id},{$set: req.body} , {new : true})
    .then((pro)=>{
        res.json('product updated succesfully')
        console.log(pro)})
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
    const id = req.params.id 
    Product.findOneAndDelete({proId : id})
    .then((pro)=>{res.json(`product ${pro.productName} was deleted`)})
    .catch((err)=>{res.status(404).json('product id not found');console.log(err)})

})




//------ admin category routes -------


// type   post
// desc   add new category

router.post('/api/addcategory', (req, res)=>{
    
    const newcat = new Category({
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





//function to make a slug from a name

function slugify(name){
    var slug = name.trim().replace(/ /g , '-');
    return slug ;
}



// counter 
router.post('/api/counter', (req, res)=>{
    const newCounter = new Counter({
        coll : req.body.coll,
        count : req.body.count,
    });

    newCounter.save()
    .then((cou)=>{console.log(`counter saved .. ${cou}`),res.json(cou)})
    .catch((err)=>console.log(`error is : ${err}`))
})

export default router