const {mongoose} = require('./server/connection');
const express = require('express');
const app = express();
const port = process.env.Port || 8080 ; 




app.listen(port , ()=>{
    console.log(`app is working on port ${port}`);
})
