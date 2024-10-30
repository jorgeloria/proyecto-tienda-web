import { JSONFilesHelper } from "../filesHelpers/JSONFilesHelper";
import { Product } from "../class/product";
export class JSONHandler {
	private jsonFilesHelper = new JSONFilesHelper();

	public async readProducts() {
		const productsData  = await this.jsonFilesHelper.readJSONFile();
		return productsData.products.map((product: any) => {
			return new Product(
					product.id,
					product.title,
					product.description,
					product.price,
					product.stock,
					product.category,
					product.images,
					product.thumbnail
			);
		});
	}

	public async readProductById(id: number) {
		const productsData = await this.jsonFilesHelper.readJSONFile();
		const product = productsData.products.find((product: any) => product.id === id);
		if (!product) {
			throw new Error("Product not found");
		}
		return new Product(
				product.id,
				product.title,
				product.description,
				product.price,
				product.stock,
				product.category,
				product.images,
				product.thumbnail
		);
	}
}
