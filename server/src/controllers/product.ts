import { Request, Response } from "express";
import { DataAccess } from "../access/dataAccess";

export class ProductController {
	private dataAccess = new DataAccess();

	public async getProducts(req: Request, res: Response) {
		try {
			const products = await this.dataAccess.getProducts();
			console.log(products);
			return res.status(200).json(products);
		} catch (error) {
			return res.status(500).json({
				message: "Internal Server Error",
			});
		}
	}
}
