import mongoose from 'mongoose'
const Schema = mongoose.Schema
import Counter from './counter.mjs'


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

productSchema.pre('save', async function() {
    var k = this ;
    await Counter.findOne({coll : 'pro'})
    .then((pro)=>{
        console.log('hi from pre save')
        k.proId = pro.count

    })
    .catch((err)=>console.log(`from pre error is : ${err}`))
});

productSchema.post('save', function() {
    Counter.findOneAndUpdate({coll : 'pro'}, {$inc:{count : 1}},{new:true} )
    .then((cou)=>{
        console.log('hi from post save')
        console.log(`counter became : ${cou.count}`)
    })
    .catch((err)=>console.log(`error is : ${err}`))
});


const Product = mongoose.model('Product', productSchema );

export default Product




/*

productSchema.pre('save', function() {
    Counter.findOne({coll : 'pro'})
    .then((pro)=>{
        console.log('hi from pre save')
        productSchema.id = pro.count + 1
    })
    .catch((err)=>console.log(`from pre error is : ${err}`))
});

productSchema.post('save', function() {
    Counter.findOneAndUpdate({name : 'pro'}, {$inc:{count : 1}},{new:true} )
    .then((cou)=>{
        console.log('hi from post save')
        console.log(`counter became : ${cou.count}`)
    })
    .catch((err)=>console.log(`error is : ${err}`))
});

*/