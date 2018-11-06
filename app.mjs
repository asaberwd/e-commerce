import mongoose from './server/connection.mjs'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
import router from './server/routes/routes.mjs'
const port = process.env.Port || 8080 


  app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router);

app.use(express.static('./public'));



app.listen(port , ()=>{
    console.log(`app is working on port ${port}`);
})
