import express, { Express, Request, Response } from "express";
import session from "express-session";
import dotenv from "dotenv";
import { UserRouter } from "./routes/user";
import { ProductRouter} from "./routes/product"

const cors = require('cors');

dotenv.config();

declare module 'express-session' {
  export interface SessionData {
    username: string;
    isLoggedIn: boolean;
  }
}

const app: Express = express();
const port = process.env.PORT || 3000;
const sessionTimeOutEnvVal = (typeof process.env.SESSION_TIMEOUT !== undefined) ? process.env.SESSION_TIMEOUT : "60000"
const sessionTimeout : number = Number.parseInt( sessionTimeOutEnvVal! ) ; // default de 60 segundos

app.use(cors());

app.use(express.json());

app.use(session({
  secret: 'some-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: sessionTimeout } // session timeout of 60 seconds

}));

app.get("/", (req: Request, res: Response) => {
  res.send("Proyecto tienda virtual Backend/API-Server");
});

app.use("/user", UserRouter)
app.use("/product", ProductRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});