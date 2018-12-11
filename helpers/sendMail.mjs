import nodeMailer from 'nodemailer'
import config from '../config/keys'

export const sendGreetMail = (email, subject, text)=>{

    let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        clientId: '501355720749-veh5m87tuur49n7bi4nkokhl1if1lr90.apps.googleusercontent.com',
        clientSecret: '6hWZSprK2siUCaCqJhMxnV3D'
    }
    });


    let mailOptions = {
        from : config.email,
        to : email,
        subject : subject,
        html : text,
        auth: {
            user: config.email,
            refreshToken: '1/mvyDw5m5Y6MTiqfvGwOLuJd4tKxzLn15OH8jXG_Wn2E',
            accessToken: 'ya29.GlsaBioUCon1agWUH4Ij4gf9ozfzvfGy-R7hOjC_IEHQAe_LNh09VJRR73WwTWiEVUK5QZ30se4bHLh_BNFWp_DdjNWVx7liNu3JBkvkTQD4cXTkylDuG4MFLBI-',
            expires: 1484314697598
        }
    }


    transporter.sendMail(mailOptions)
    .then((info)=>{
        console.log(`sent : ${info.response}`)
    })
    .catch((err)=>{throw err})
        
    

}

   export const receiveMail = (res, firstName, lastName, email, subject, message)=>{

        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                clientId: '501355720749-veh5m87tuur49n7bi4nkokhl1if1lr90.apps.googleusercontent.com',
                clientSecret: '6hWZSprK2siUCaCqJhMxnV3D'
            }
            });
        
        
            let mailOptions = {
                from : config.email,
                to : config.email,
                subject : subject,
                html : `<label>sender</label><h3> Mr/Mrs ${firstName} ${lastName}</h3> <label>email</label><h3>${email}</h3>
                        <label>subject</label><h3>${subject}</h3><label>message</label><p>${message}</p>`,
                auth: {
                    user: config.email,
                    refreshToken: '1/mvyDw5m5Y6MTiqfvGwOLuJd4tKxzLn15OH8jXG_Wn2E',
                    accessToken: 'ya29.GlsaBioUCon1agWUH4Ij4gf9ozfzvfGy-R7hOjC_IEHQAe_LNh09VJRR73WwTWiEVUK5QZ30se4bHLh_BNFWp_DdjNWVx7liNu3JBkvkTQD4cXTkylDuG4MFLBI-',
                    expires: 1484314697598
                }
            }
        
        
            transporter.sendMail(mailOptions)
            .then((info)=>{
                console.log(`sent : ${info.response}`)
                res.json('message sent succesfully')
            })
            .catch((err)=>{
                res.status(400).json('error sending message')
                throw err})
                
        
    }