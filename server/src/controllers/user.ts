import { Request, Response } from "express";


export class UserController {

  // register a new user
  static async register(req: Request, res: Response) {
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
  static async login(req: Request, res: Response) {
    try {
      return res.status(200).json({
        message: "User logged in successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }


}
