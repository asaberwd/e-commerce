const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Address = require('./shipadd')


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
    shipaddress : [Address]

});

const User = mongoose.model('User', userSchema);

module.exports = User ;