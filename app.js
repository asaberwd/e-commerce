import mongoose from './server/connection'
//const {mongoose} = require('./server/connection');
import express from 'express' ;
const app = express();
const port = process.env.Port || 8080 ; 




app.listen(port , ()=>{
    console.log(`app is working on port ${port}`);
})
