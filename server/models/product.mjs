import mongoose from 'mongoose'
const Schema = mongoose.Schema
import generate from 'nanoid/generate'

const productSchema = new Schema({
   proId : {
        type:String,
        unique : true,
        default: generate('1234567890abcdefghimnABCDEFGHIMNOY',7)  //characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@')
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







const Product = mongoose.model('Product', productSchema );


export default Product



