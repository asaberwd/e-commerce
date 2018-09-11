import mongoose from 'mongoose'
const Schema = mongoose.Schema


const counterSchema = new Schema({
    coll : {
        type : String,
    },
    count : {
        type : Number,
    }
});

export default mongoose.model('Counter', counterSchema)