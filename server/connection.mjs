import mongoose from 'mongoose';

mongoose.Promise = global.Promise ;
import key from './../config/keys'

mongoose.connect(key.mongoUrl)
.then(()=>console.log('mongoose connected ...'))
.catch((err)=>console.log('mongoose error ...', err))


export default mongoose