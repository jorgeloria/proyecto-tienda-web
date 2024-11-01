import { Request, Response, Router } from "express";

import { UserController } from "../controllers/user"

import verifyToken from '../middlewares/auth'
import verify from '../middlewares/verify'

export const UserRouter = Router();

const userController = new UserController();

UserRouter.post("/register", (req: Request, res: Response)=>{
    userController.doRegister(req,res);
});

UserRouter.post("/login", (req: Request, res: Response)=>{
    userController.doLogin(req, res);
});

UserRouter.post("/logout", (req: Request, res: Response)=>{
    userController.doLogout(req, res);
});

UserRouter.post("/is-active", 
    (req,res, next)=>{
        console.log("veri next")
        verify(req, res, next)
        
    }, 
    (req,res)=>{
        console.log("veri noooooooooo next")
        res.sendStatus(200);
    });
    
UserRouter.get("/is-active", 
    (req,res, next)=>{
        verifyToken(req, res, next) 
    }, 
    (req,res)=>{
        res.sendStatus(200);
    });