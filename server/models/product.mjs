import mongoose from 'mongoose'
Schema = mongoose.Schema

const productSchema = new Schema({
    id : {
        type:Number,
    },
    productName : {
        type : String ,
        required : true,
    },
    prodDescription : {
        type : String ,
    },
    unitPrice : {
        type : Number,
        required : true,
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
    picture : {
        type : String,
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
    categoty :{
        type :Schema.Types.ObjectId,
        ref:'Category',
    },


})

const Product = mongoose.model('Product', productSchema );

export default Product