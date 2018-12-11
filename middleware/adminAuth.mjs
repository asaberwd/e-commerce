import userToken from './../server/models/userToken'
import key from './../config/keys.mjs'
import jwt from 'jsonwebtoken'
import Admin from './../server/models/admin.mjs'


const authenticate = async (req, res, next)=>{
    let token = req.headers['x-access-token']
    if(!token || token === null || token === undefined) return res.status(401).send('no token provided')


        try{ 
            let decoded = await jwt.verify(token , key.jwtKey)


        if (!decoded) return res.status(500).send(`message: Failed to authenticate token. ${err}` );

        let findToken = await userToken.findOne({token})

            if(!findToken) return res.status(401).json('session do not exist')
            if(decoded.exp < findToken.expiresIn) return res.status(401).json('session expired')

            res.locals.adminId = findToken.user

        let findAdminById = await Admin.findById(findToken.user)
                if(!findAdminById ) return res.status(401).json('you are not authorized to be here')
                res.locals.role = findAdminById.role
            
            next()
        } catch(err) {
             res.status(503).json('jwt expired')
             console.log(`error authenticate : ${err}`)

             }
    

}


export default authenticate