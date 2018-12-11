import express from 'express'
import mongoose from './server/connection'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
import router from './server/routes/routes.mjs'
const port = process.env.Port || 8080 
import cookieParser from 'cookie-parser'


 
app.use(cookieParser())

app.use(cors({  credentials: true, origin : ['http://localhost:3000', 'http://localhost:3002'] }))


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(router);

app.use(express.static('./public'));


app.listen(port , ()=>{
    console.log(`app is working on port ${port}`);
})
