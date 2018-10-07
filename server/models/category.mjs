import mongoose from 'mongoose'
const Schema = mongoose.Schema
import Counter from './counter.mjs'
import prepost from './pre-post.mjs'


const newCategory = new Schema({
    catName : {
        type : String,
        unique : true,
    },
    slug:{
        type : String,
        unique : true,
    },
    catId :{
        type:Number,
        unique : true,
    },
    description : {
        type : String,
    },
    picture : {
        type : String,
    },
    active :{
        type : Boolean,
        default : true,
    },
    product :[{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }]
});


prepost.myPre(newCategory, 'cat', 'catId')
prepost.myPost(newCategory, 'cat')



const Category = mongoose.model('Category', newCategory);

export default Category 