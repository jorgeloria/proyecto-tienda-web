import { Request, Response, Router } from "express";

// import { register, login } from "../controller/user.controller";

import { UserController } from "../controllers/user"

export const UserRouter = Router();

const userController = new UserController();

// Register a user
UserRouter.post("/register", (req: Request, res: Response)=>{
    userController.doRegister(req,res);
});

// Login a user
UserRouter.post("/login", (req: Request, res: Response)=>{
    userController.doLogin(req, res);
});
