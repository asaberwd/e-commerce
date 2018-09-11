import mongoose from 'mongoose'
const Schema = mongoose.Schema
import Counter from './counter.mjs'


const newCategory = new Schema({
    catName : {
        type : String,
        unique : true,
    },
    slug:{
        type : String,
        unique : true,
    },
    catId :{
        type:Number,
        unique : true,
    },
    description : {
        type : String,
    },
    picture : {
        type : String,
    },
    active :{
        type : Boolean,
        default : true,
    },
    product :{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }
});


newCategory.pre('save', async function() {
    var k = this ;
    await Counter.findOne({coll : 'cat'})
    .then((cat)=>{
        console.log('hi from pre save')
        k.catId = cat.count

    })
    .catch((err)=>console.log(`from pre error is : ${err}`))
});

newCategory.post('save', function() {
    Counter.findOneAndUpdate({coll : 'cat'}, {$inc:{count : 1}},{new:true} )
    .then((cou)=>{
        console.log('hi from post save')
        console.log(`counter became : ${cou.count}`)
    })
    .catch((err)=>console.log(`error is : ${err}`))
});


const Category = mongoose.model('Category', newCategory);

export default Category 