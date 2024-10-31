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
		user.password = "";
		return user;
	}

	public async registerUser(name: string, email: string, password: string) {
		const users = await this.jsonHandler.readUsers();
		const user = users.find((user: any) => user.email === email);
		if (user) {
			throw new Error("User already exists");
		}


		const id = users.length + 1;
		const newUser = {
			id,
			name,
			email,
			password,
		};
	
		const success = this.jsonHandler.appendUser(newUser);
		if (!success) {
			throw new Error("Failed to register user");
		}
	}
}
