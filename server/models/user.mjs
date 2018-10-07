import mongoose from 'mongoose' 
const Schema = mongoose.Schema
import Address from './shipAdd'
import validator from 'validator'
import prepost from './pre-post'




const userSchema = new Schema({
    userId:{
        type :Number,
        unique : true,
    },
    firstName : {
        type : String,
        required : true,
        trim:true,
    },
    lastName :{
        type : String,
        required : true,
        trim:true,

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
        default : Date.now,
    },
    state:{
        type:String,
        default: 'unverified',
        trim : true,
    },
    orders : [{
        type:Schema.Types.ObjectId ,
        ref :'Order',
    }],
    shipaddress : [Address]

});


prepost.myPre(userSchema , 'user' , 'userId')

prepost.myPost(userSchema , 'user' )





const User = mongoose.model('User', userSchema);

export default User 