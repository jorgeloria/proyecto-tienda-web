import { Request, Response } from "express";


export class UserController {

// greeting: string;

// constructor(message: string) {
//   this.greeting = message;
// } 

  // register a new user
  public async doRegister(req: Request, res: Response) {
    try {
      const {name, email, password} = req.body;

      console.log("Got name: " + name)
      console.log("Got email: " + email)
      console.log("Got password: " + password)

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
