import { Request, Response } from "express";

import { UserLoginSchema } from "../validations/Login";

export class UserController {

  // register a new user
  public async doRegister(req: Request, res: Response) {
    try {
      return res.status(200).json({
        message: "User registered successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  // login a user
  public async doLogin(req: Request, res: Response) {
    try {
        const validatedUser = UserLoginSchema.parse(req.body);
        console.log("User data is valid:", validatedUser);
        return res.status(200).json({
          message: "User logged in successfully",
        });
    } catch (error : any) {
      console.error("Invalid user data:", error);
      let vErrors = error['errors'] ? error['errors'] : "";
      return res.status(403).json({
        message: "Forbidden",
        errors: vErrors
      });
    }
  }

}
