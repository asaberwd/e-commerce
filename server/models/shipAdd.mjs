import mongoose from 'mongoose'
const Schema = mongoose.Schema 

const address = new Schema({
    country : {
        type : String 
    },
    city:{
        type:String
    },
    fulladdress:{
        type:String 
    },
    phone:{
        type:String
    },
    postalcode:{
        type :Number,
    }
})

module.exports = address ;