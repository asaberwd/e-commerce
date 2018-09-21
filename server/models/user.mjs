import mongoose from 'mongoose' 
const Schema = mongoose.Schema
import Address from './shipAdd'
import Counter from './counter.mjs'
import validator from 'validator'



const userSchema = new Schema({
    userId:{
        type :Number,
        unique : true,
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName :{
        type : String,
        required : true 
    },
    phone : {
        type : String,
        trim : true
    },
    email:{
        type:String,
        required : true,
        unique : true,
        trim : true,
        validate:{
            validator : validator.isEmail,
            message : '{value} is not a valid email address'
        }
    },
    password :{
        type : String,
        required : true,
        trim :true
    },
    date:{
        type:Date,
        default : Date.now()
    },
    orders : [{
        type:Schema.Types.ObjectId ,
        ref :'Order',
    }],
    shipaddress : [Address]

});


userSchema.pre('save', async function() {
    var k = this ;
    await Counter.findOne({coll : 'user'})
    .then((user)=>{
        console.log('hi from pre save')
        k.userId = user.count

    })
    .catch((err)=>console.log(`from pre error is : ${err}`))
});


userSchema.post('save', function() {
    Counter.findOneAndUpdate({coll : 'user'}, {$inc:{count : 1}},{new:true} )
    .then((cou)=>{
        console.log('hi from post save')
        console.log(`counter became : ${cou.count}`)
    })
    .catch((err)=>console.log(`error is : ${err}`))
});



const User = mongoose.model('User', userSchema);

export default User 