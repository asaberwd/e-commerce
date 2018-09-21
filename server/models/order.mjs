import mongoose from 'mongoose'
const Schema = mongoose.Schema 
import Address from './shipAdd'
import prepost from './pre-post'




const orderSchema = new Schema({
    orderId :{
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

prepost.myPre(orderSchema , 'order' , 'orderId')

prepost.myPost(orderSchema , 'order' )


const Order = mongoose.model('Order', orderSchema);

export default Order