import mongoose from 'mongoose' 
const Schema = mongoose.Schema
import Address from './shipAdd'


const userSchema = new Schema({
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
        trim : true
    },
    password :{
        type : string,
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

const User = mongoose.model('User', userSchema);

export default User 