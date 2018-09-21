import userToken from './../server/models/userToken'
import key from './../config/keys.mjs'
import jwt from 'jsonwebtoken'

const authenticate = (req, res, next)=>{
    let token = req.headers['x-access-token']
    if(!token) return res.status(401).send('no token provided')

    jwt.verify(token , key.jwtKey , function(err, decoded){
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        userToken.findOne({token})
        .then(doc=>{
            if(!doc) return res.status(401).json('session do not exist')
            if(decoded.exp < doc.expiresIn) return res.status(401).json('session expired')
            //console.log(`authenticated ${decoded.exp} , ${doc.expiresIn}, ${decoded.exp < doc.exp}`)

            res.locals.userId = doc.user

            next()
        })
        .catch(err=>console.log(`error authenticate : ${err}`))
    })

}


export default authenticate