import mongoose from 'mongoose'
const Schema = mongoose.Schema
import prepost from './pre-post'

const productSchema = new Schema({
   proId : {
        type:Number,
        unique : true,
    },
    productName : {
        type : String ,
        required : true,
    },
    slug:{
        type:String,
        unique:true,
    },
    prodDescription : {
        type : String ,
    },
    unitPrice : {
        type : Number,
        required : true,
        min:1,
    },
    color:{
        type : String,
    },
    size:{
        type : String,
    },
    quantity :{
        type : Number,
        required: true,
    },
    weight : {
        type : Number,
        required : true,
    },
    availableSizes : {
        type : Array ,
    },
    availablecolors : {
        type: Array,
    },
    available :{
        type : Boolean,
    },
    pictures : {
        type : Array,
    },
    discount : {
        type : Number,
    },
    note :{
        type : String,
    },
    supplier :{
        type : String,
    },
    addedAt : {
        type : Date,
        default : Date.now(),
    },
    orders : [{
        type : Schema.Types.ObjectId,
        ref :'Order',
    }],
    category :{
        type :Schema.Types.ObjectId,
        ref:'Category',
    },


})



prepost.myPre(productSchema , 'pro' , 'proId')

prepost.myPost(productSchema , 'pro' )





const Product = mongoose.model('Product', productSchema );


export default Product



