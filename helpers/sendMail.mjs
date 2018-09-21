import nodeMailer from 'nodemailer'

export default (email, subject, text)=>{
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
        from : 'koko@gmail.com',
        to : email,
        subject : subject,
        text : text,
        auth: {
            user: 'ahmedsaberwd@gmail.com',
            refreshToken: '1/mvyDw5m5Y6MTiqfvGwOLuJd4tKxzLn15OH8jXG_Wn2E',
            accessToken: 'ya29.GlsaBioUCon1agWUH4Ij4gf9ozfzvfGy-R7hOjC_IEHQAe_LNh09VJRR73WwTWiEVUK5QZ30se4bHLh_BNFWp_DdjNWVx7liNu3JBkvkTQD4cXTkylDuG4MFLBI-',
            expires: 1484314697598
        }
    }


    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err)
        }else{
            console.log(`sent : ${info.response}`)
        }

    });

}