import Category from './../../models/category.mjs'
import validator from 'validator'


import generate from 'nanoid/generate'
import slugify from './../../../helpers/slugify.mjs'


// add new category 

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


// show all categories by admin 

export const showCategoriesByAdmin = async (req, res) =>{

    let cats = await Category.find().sort({_id:-1})
    try{
        res.json({cats, auth : res.locals.role})
        console.log('showing categories')
    }catch(err){
        res.status(404).json('error getting cats')
        console.log(`error showing all cats is : ${err}`)}

}


// update categories

export const updateCategory = (req, res)=>{

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



// delete category 

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

// show single category by catId 

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