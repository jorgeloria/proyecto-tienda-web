import { Request, Response, Router } from "express";

// import { register, login } from "../controller/user.controller";

import { UserController } from "../controllers/user"

export const UserRouter = Router();

UserRouter.post("/register", (req: Request, res: Response)=>{
    UserController.register(req,res);
});

// Login a user
UserRouter.post("/login", (req: Request, res: Response)=>{
    UserController.login(req, res);
});
