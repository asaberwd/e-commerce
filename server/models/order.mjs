import mongoose from 'mongoose'
const Schema = mongoose.Schema 
import Address from './shipAdd'



const orderSchema = new Schema({
    orderNumber :{
        type : Number,
    },
    done :{
        type :Boolean,
    },
    paid : {
        type : Boolean,
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
    },
    totalprice:{
        type:Number,
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