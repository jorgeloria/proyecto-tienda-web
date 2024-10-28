import { JSONFilesHelper } from "../filesHelpers/JSONFilesHelper";
export class JSONHandler {
	private jsonFilesHelper = new JSONFilesHelper();

	public async readProducts() {
		const products = await this.jsonFilesHelper.readJSONFile();
		return products.products.map((product: any) => ({
			id: product.id,
			title: product.title,
			description: product.description,
			price: product.price,
			stock: product.stock,
			category: product.category,
			images: product.images,
			thumbnail: product.thumbnail,
		}));
	}
}
