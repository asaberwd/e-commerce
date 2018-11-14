import mongoose from 'mongoose'
const Schema = mongoose.Schema 
import Address from './shipAdd'




const orderSchema = new Schema({
    orderId :{
        type : String,
        required: true,
        unique : true,
    },
    done :{
        type :Boolean,
        default : false
    },
    paid : {
        type : Boolean,
        default : false
    },
    paymentMethode :{
        type : String,
    },
    date : {
        type:Date,
        default: Date.now(),
    },
    totalweight:{
        type:Number,
        default : 0
    },
    totalprice:{
        type:Number,
        required : true
    },
    shipAddress : Address ,
    user : {
        type :Schema.Types.ObjectId,
        ref : 'User',
    },
    orderProduct : {
        type :Schema.Types.ObjectId,
        ref : 'OrderPro',
    },

});




const Order = mongoose.model('Order', orderSchema);

export default Order