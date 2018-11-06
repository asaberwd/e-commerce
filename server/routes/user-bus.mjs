import Product from './../models/product.mjs'
import Category from './../models/category.mjs'
import User from './../models/user.mjs'

import validator from 'validator'
import bcrypt from 'bcryptjs'
import sendMail from './../../helpers/sendMail'

import UserToken from './../models/userToken.mjs'
import jwt from 'jsonwebtoken'
import key from './../../config/keys.mjs'








export const viewAllProducts = (req, res)=>{
    
    Product.find().sort({_id:-1})
    .populate('category')
    .then((pros)=>{
        res.json(pros)
        console.log('products fetching ...')
    })
    .catch((err)=>{
        res.status(404).json('error showing products')
    })

}


export const showAllCats = (req, res)=>{

    Category.find().sort({_id:-1})
    .then((cats)=>{
        res.json(cats)
        console.log('showing categories')
    })
    .catch((err)=>{
        res.status(404).json('error getting cats')
        console.log(`error showing all cats is : ${err}`)})
}


export const registerNewUser = (req, res)=>{

     //check all required fields are not empty
     if(req.body.fName.replace(/ /g,'').length === 0 || req.body.pass.replace(/ /g,'').length === 0 ||
     req.body.lName.replace(/ /g,'').length === 0 || req.body.email.replace(/ /g,'').length === 0 )
  return  res.status(406).json('required fields are empty')

 if(!validator.isEmail(req.body.email)) return  res.status(406).json('email is not valid')

  //check if email already exist
  User.findOne({email : req.body.email})
  .then((olduser)=>{
      if(olduser) return res.status(400).json('email already exist')
      
      //hashing password
      let hashpassword = bcrypt.hashSync(req.body.pass.trim(), 8)

      let newUser = new User({
          firstName : req.body.fName,
          lastName : req.body.lName,
          email : req.body.email,
          phone : req.body.phone,
          password : hashpassword
      })
      // creating jwt token
      //let token = jwt.sign({id : newUser._id , email : newUser.email}, key.jwtKey, { expiresIn: 86400 } )

      
      newUser.save()
      .then((user)=>{
          res.json('new user created')
          console.log(user)
          let hashedId = bcrypt.hashSync(user._id.toString(), 8)
          sendMail(user.email, 'welcom message',
           `welcome ${user.firstName} use <b style={color:red;}> ${hashedId}</b> as your secret to verify your account at our website`)

      })

  })

  .catch((err)=>{res.status(400).json(`error adding new user : ${err}`)})

}


export const userLogin = (req, res)=>{

        // find user by email
    User.findOne({email : req.body.email})
    .then((user)=>{
        if(!user) return res.status(401).send('user not found')
        // compare entered password with stored one
        bcrypt.compare(req.body.password, user.password)
        .then((matched)=>{
            if(!matched) return res.status(401).send('email and password are not matched')
            
            //generate token for this login
            let token = jwt.sign({id : user._id , email : user.email}, key.jwtKey, { expiresIn: 86400 })
            let tokenDecode = jwt.decode(token)

            //generate new userToken document
            let newToken = new UserToken({
                token,
                user : user._id,
                createdAt : tokenDecode.iat ,
                expiresIn : tokenDecode.exp
            })
            newToken.save()
            .then((tokenAdded)=>{
                console.log(`token added : ${tokenAdded.token}`)
            })
            
            res.json({ auth : true, token  })
        })
    })
    .catch((e)=>{console.log(e);res.send('error')})
}




