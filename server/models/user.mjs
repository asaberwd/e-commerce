import mongoose from 'mongoose' 
const Schema = mongoose.Schema
import Address from './shipAdd'
import validator from 'validator'
import shortId from 'shortid'
//import prepost from './pre-post'




const userSchema = new Schema({
    userId:{
        type :String,
        unique : true,
        default : shortId.generate
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





const User = mongoose.model('User', userSchema);

export default User 