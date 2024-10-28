import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { UserRouter } from "./routes/user";
import { ProductRouter} from "./routes/product"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Proyecto tienda virtual Backend/API-Server");
});

app.use("/user", UserRouter)
app.use("/product", ProductRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});