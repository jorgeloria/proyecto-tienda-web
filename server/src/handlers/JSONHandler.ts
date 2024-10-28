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
}
