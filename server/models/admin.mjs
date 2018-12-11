import mongoose from 'mongoose' 
const Schema = mongoose.Schema
import validator from 'validator'


const adminSchema = new Schema({
    firstName : {
        type : String,
    },
    lastName :{
        type : String,
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
    createdAt:{
        type:Date,
        default : Date.now,
    },
    role:{
        type:String,
        required:true,
        trim:true,
    }   

});


const MyAdmin = mongoose.model('MyAdmin', adminSchema)

export default MyAdmin