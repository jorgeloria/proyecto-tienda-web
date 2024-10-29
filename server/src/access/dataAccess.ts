import { JSONHandler } from "../handlers/JSONHandler";

export class DataAccess {
	private jsonHandler: JSONHandler = new JSONHandler();
	
	public async getProducts() {
		return this.jsonHandler.readProducts();
	}
}
