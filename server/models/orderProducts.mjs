import mongoose from 'mongoose'
const Schema = mongoose.Schema

const orderPro = new Schema({
    price:{
        type : Number,
        required : true,
    },
    quantity :{
        type:Number,
        default:1,
    },
    discount :{
        type:Number,
        default: 0,
    },
    total : {
        type: Number,
    },
    color : {
        type : String
    },
    size:{
        type:String,
    },
    weight :{
        type: Number,
    },
    done : {
        type:Boolean,
    },
    product : {
        type:Schema.Types.ObjectId,
        ref:'Product',
    },
    order : {
        type:Schema.Types.ObjectId,
        ref:'Order',
    },
})

const OrderPro = mongoose.model('OrderPro', orderPro)

export default OrderPro