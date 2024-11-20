import { Request, Response } from "express";
import { DataAccess } from "../access/dataAccess";

import { UserLoginSchema } from "../validations/Login";

const jwt = require('jsonwebtoken')

export class UserController {
  dataAccess = new DataAccess();

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
      const validatedUser = UserLoginSchema.parse(req.body);
      const { email, password } = validatedUser;
      if (!email || !password) {
        return res.status(400).json({
          message: "Email and password are required",
        });
      }
      const user = await this.dataAccess.attemptLogin(email, password);
      let token = await this.saveSession(req, email);
      console.log(token);
      return res.status(200).json({ "token": token, "username": email });
    } catch (error: any) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      if (errorMessage === "User not found") {
        return res.status(401).json({
          message: errorMessage,
        });
      }
      return res.status(403).json({
        message: "Forbidden",
        errors: error["errors"]
      });
    }
  }

  public async doLogout(req: Request, res: Response) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
      const bearerToken = bearerHeader.split(' ')[1];
    }
    return res.sendStatus(200);
  }

  private async saveSession(req: Request, username: string) {
    let privateKey = process.env.PRIVATE_KEY || "some-private-key";
    let token = await jwt.sign({ username: username }, privateKey, {
      expiresIn: '1m'
    });
    return token;
  }
}
