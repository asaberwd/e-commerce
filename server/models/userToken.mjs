import mongoose from 'mongoose'
const Schema = mongoose.Schema

const newUserToken = new Schema({
    token :{
        type:String,
        required: true,
    },
    user:{
        type:Schema.Types.ObjectId ,
        ref :'User',
    },
    createdAt:{
        type : Number,
        required:true,
    },
    expiresIn:{
        type: Number,
        required:true,
    }
    
})

const userToken = mongoose.model('userToken', newUserToken)

export default userToken