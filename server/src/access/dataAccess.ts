import { JSONHandler } from "../handlers/JSONHandler";
import { DatabaseHandler } from "../handlers/DatabaseHandler";

export class DataAccess {
	// private jsonHandler: JSONHandler = new JSONHandler();
	private databaseHandler: DatabaseHandler = new DatabaseHandler();

	public async getProducts() {
		return this.databaseHandler.readProducts();
	}

	public async getProductById(id: number) {
		return this.databaseHandler.readProductById(id);
	}

	public async getUsers() {
		return this.databaseHandler.readUsers();
	}

	public async getUserById(id: number) {
		return this.databaseHandler.readUserById(id);
	}

	public async attemptLogin(email: string, password: string) {
		const users = await this.databaseHandler.readUsers();
		const user = users.find((user: any) => user.email === email && user.password === password);
		if (!user) {
			throw new Error("User not found");
		}
		user.password = "";
		return user;
	}

	public async registerUser(name: string, email: string, password: string) {
		const users = await this.databaseHandler.readUsers();
		const user = users.find((user: any) => user.email === email);
		if (user) {
			throw new Error("User already exists");
		}

		const newUser = {
			id: 0, // TODO(any): borrar este ID de aquí y de la clase User
			name,
			email,
			password,
		};
	
		const success = this.databaseHandler.appendUser(newUser);
		if (!success) {
			throw new Error("Failed to register user");
		}
	}
}
