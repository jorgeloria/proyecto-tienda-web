import { Request, Response } from "express";
import { DataAccess } from "../access/dataAccess";

export class ProductController {
	private dataAccess = new DataAccess();

	public async getProducts(req: Request, res: Response) {
		try {
			const products = await this.dataAccess.getProducts();
			return res.status(200).json(products);
		} catch (error) {
			return res.status(500).json({
				message: "Internal Server Error",
			});
		}
	}

	public async getProductById(req: Request, res: Response) {
		const id = Number(req.params.id);
		try {
			const product = await this.dataAccess.getProductById(id);
			return res.status(200).json(product);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
			if (errorMessage === "Product not found") {
				return res.status(404).json({
					message: errorMessage,
				});
			}
			return res.status(404).json({
				message: "Product not found",
			});
		}
	}
}
