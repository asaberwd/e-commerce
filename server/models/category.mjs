import mongoose from 'mongoose'
const Schema = mongoose.Schema

const newCategory = new Schema({
    catName : {
        type : String,
        unique : true,
    },
    description : {
        type : String,
    },
    picture : {
        type : string,
    },
    active :{
        type : Boolean,
        default : true,
    },
    product :{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }
})

const Category = mongoose.model('Category', newCategory)

export default Category 