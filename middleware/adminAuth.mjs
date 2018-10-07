import userToken from './../server/models/userToken'
import key from './../config/keys.mjs'
import jwt from 'jsonwebtoken'
import Admin from './../server/models/admin.mjs'


const authenticate = (req, res, next)=>{
    let token = req.headers['x-access-token']
    if(!token) return res.status(401).send('no token provided')

    jwt.verify(token , key.jwtKey , function(err, decoded){
        if (err) return res.status(500).send(`message: Failed to authenticate token. ${err}` );

        userToken.findOne({token})
        .then(doc=>{
            if(!doc) return res.status(401).json('session do not exist')
            if(decoded.exp < doc.expiresIn) return res.status(401).json('session expired')

            res.locals.adminId = doc.user

            Admin.findById(doc.user)
            .then(admin=>{
                if(!admin ) return res.status(401).json('you are not authorized to be here')
                res.locals.role = admin.role
            })
            next()
        })
        .catch(err=>console.log(`error authenticate : ${err}`))
    })

}


export default authenticate