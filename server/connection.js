const mongoose = require('mongoose');

mongoose.Promise = global.Promise ;
const key = require('./../config/keys')

mongoose.connect(key.mongoUrl)
.then(()=>console.log('mongoose connected ...'),
(err)=>console.log('mongoose error ...', err))


module.exports = {mongoose};