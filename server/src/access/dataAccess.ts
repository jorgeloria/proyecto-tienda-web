import { JSONHandler } from "../handlers/JSONHandler";

export class DataAccess {
	private jsonHandler: JSONHandler = new JSONHandler();
	
	public async getProducts() {
		return this.jsonHandler.readProducts();
	}

	public async getProductById(id: number) {
		return this.jsonHandler.readProductById(id);
	}

	public async getUsers() {
		return this.jsonHandler.readUsers();
	}

	public async attemptLogin(email: string, password: string) {
		const users = await this.jsonHandler.readUsers();
		const user = users.find((user: any) => user.email === email && user.password === password);
		if (!user) {
			throw new Error("User not found");
		}
		return user;
	}
}
