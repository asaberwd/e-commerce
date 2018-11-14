import mongoose from 'mongoose'
const Schema = mongoose.Schema 

const address = new Schema({
    country : {
        type : String ,
        required : true,
    },
    city:{
        type:String,
        required : true,
    },
    name :{
        type: String,
        required : true,
    },
    fullAddress:{
        type:String ,
        required : true,
    },
    phone:{
        type:String,
        required : true,
    },
    postalCode:{
        type : Number,
        required : true,
    }
})

export default address ;