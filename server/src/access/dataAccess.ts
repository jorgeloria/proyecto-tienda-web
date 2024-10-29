import { JSONHandler } from "../handlers/JSONHandler";

export class DataAccess {
	private jsonHandler: JSONHandler = new JSONHandler();
	
	public async getProducts() {
		return this.jsonHandler.readProducts();
	}

	public async getProductById(id: number) {
		return this.jsonHandler.readProductById(id);
	}
}
