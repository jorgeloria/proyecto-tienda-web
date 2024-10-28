import { Request, Response, Router } from "express";
import { ProductController } from "../controllers/product";

export const ProductRouter = Router();
const productController = new ProductController();

ProductRouter.get("/", (req: Request, res: Response) => {
    productController.getProducts(req, res);
});
