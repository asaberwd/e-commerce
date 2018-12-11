import Admin from './../../models/admin.mjs'
import UserToken from './../../models/userToken.mjs'


import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken'

import key from './../../../config/keys.mjs'







//--------- admin section -------------


export const addnewAdmin = async (req, res)=>{

    if(res.locals.role !== 'admin') return res.status(401).json('you are not admin so not authorized to be here')
    let hashedpass = bcrypt.hashSync(req.body.password.trim(), 10)
    
    try{ 
        let isexist = await Admin.findOne({email : req.body.email})
                if(isexist) return res.status(401).json('admin is already exist by email')

            let newAdmin = new Admin({
                email : req.body.email,
                password : hashedpass,
                role : req.body.role,
            })

            let newadmin = await newAdmin.save()
                console.log(newadmin)
                res.json(newadmin)

       } catch(err) { console.log(err) ; throw err }
}


export const adminLogin = (req, res)=>{
    // find admin by email
    Admin.findOne({email : req.body.email})
    .then((admin)=>{
        if(!admin) return res.status(401).send({auth : false ,error :'admin not found'})
        // compare entered password with stored one
        bcrypt.compare(req.body.password, admin.password)
        .then((matched)=>{
            if(!matched) return res.status(401).send({auth : false ,error :'email and password are not matched'})

            //generate token for this login
            let token = jwt.sign({id : admin._id , email : admin.email}, key.jwtKey, { expiresIn: 86400 })
            let tokenDecode = jwt.decode(token)

            //generate new userToken document
            let newToken = new UserToken({
                token,
                user : admin._id,
                createdAt : tokenDecode.iat ,
                expiresIn : tokenDecode.exp
            })
            newToken.save()
            .then((tokenAdded)=>{
                console.log(`token added : ${tokenAdded.token}`)
            })
            res.header('x-access-token', token)
            res.send({ auth : true, token  })
        })
    })
    .catch((e)=>{
        res.json('error')
        console.log(`error is :${e}`);
    })
}



