import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { UserRouter } from "./routes/user";
import { ProductRouter} from "./routes/product";
import { BillRouter } from "./routes/bill";

const cors = require('cors');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
// const sessionTimeOutEnvVal = (typeof process.env.SESSION_TIMEOUT !== "undefined") ? process.env.SESSION_TIMEOUT : "600000"
// const sessionTimeout : number = Number.parseInt( sessionTimeOutEnvVal! ) ; // default de 60 segundos

app.use(cors());
app.use(express.json())

app.get("/", (req: Request, res: Response) => {
  res.send("Proyecto tienda virtual Backend/API-Server");
});

app.use("/user", UserRouter)
app.use("/product", ProductRouter)
app.use("/bill", BillRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});