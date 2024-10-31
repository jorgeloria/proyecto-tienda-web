import { Request, Response } from "express";
import { DataAccess } from "../access/dataAccess";


export class UserController {
  dataAccess = new DataAccess();
// greeting: string;

// constructor(message: string) {
//   this.greeting = message;
// } 

  // register a new user
  public async doRegister(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Name, email and password are required",
        });
      }


      await this.dataAccess.registerUser(name, email, password);


      return res.status(200).json({
        message: "User registered successfully",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      console.log("[User Controller]" + errorMessage);
      if (errorMessage === "User already exists") {
        return res.status(409).json({
          message: errorMessage,
        });
      }
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  // login a user
  public async doLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }
      const user = await this.dataAccess.attemptLogin(email, password);
      return res.status(200).json(user);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      if (errorMessage === "User not found") {
        return res.status(401).json({
          message: errorMessage,
        });
      }
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

}
