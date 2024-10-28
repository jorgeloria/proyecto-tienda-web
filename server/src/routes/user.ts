import { Request, Response, Router } from "express";

import { UserController } from "../controllers/user"

export const UserRouter = Router();

const userController = new UserController();

UserRouter.post("/register", (req: Request, res: Response)=>{
    userController.doRegister(req,res);
});

UserRouter.post("/login", (req: Request, res: Response)=>{
    userController.doLogin(req, res);
});
