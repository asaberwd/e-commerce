import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CartProductSchema = new Schema({
    quantity :{
        type: Number,
        required : true,
    },
    totalPrice :{
        type: Number,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    product : {
        type:Schema.Types.ObjectId,
        ref:'Product',
    }
})

const CartProduct = mongoose.model('CartProduct', CartProductSchema)

export default CartProduct 