import { Request, Response } from "express";
const jwt = require('jsonwebtoken')


const verifyToken = (req : any, res: Response, next :any) => {
        req.user = {username:null, verified:false}
        const privateKey = process.env.PRIVATE_KEY
        const bearerHeader = req.headers['authorization']
        if(typeof bearerHeader!=='undefined') {
            const bearerToken = bearerHeader.split(' ')[1]
            jwt.verify(bearerToken, privateKey, function (err : any, data : any){
                if(! (err && typeof data=== 'undefined')) {
                req.user = {username:data.username, verified:true}
                next()}
            })
        }
        return res.sendStatus(403)
    }

export default verifyToken