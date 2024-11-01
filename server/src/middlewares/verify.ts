import { Request, Response } from "express";
import { UserLoginSchema } from "../validations/Login";
const jwt = require('jsonwebtoken')


const verify = function(req : any, res: Response, next :any){
    console.log("AUTH verificado")
        req.user = {username:null, verified:false}
        const privateKey = process.env.PRIVATE_KEY
        const {token} = req.body
        console.log(token)
        jwt.verify(token, privateKey, function (err : any, data : any){
            if(! (err && typeof data=== 'undefined')) {
               // req.user = {username:data.username, verified:true}
                //next()
                console.log(data)
                return res.sendStatus(200)
            }else{
                console.log("fallo")
                return res.sendStatus(403)
            }
        })
    }

export default verify