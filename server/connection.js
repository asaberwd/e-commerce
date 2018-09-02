const mongoose = require('mongoose');

mongoose.Promise = global.Promise ;

mongoose.connect('mongodb://ram:ram3131837@ds143262.mlab.com:43262/e-commerce');

mongoose.connection.on('connected', ()=>{
console.log('mongoose connected ... ')
});

mongoose.connection.on('error', (err)=>{
    console.log('mongoose error ... ',err)
    });
module.exports = {mongoose};