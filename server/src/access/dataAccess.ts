import { JSONHandler } from "../handlers/JSONHandler";
import { DatabaseHandler } from "../handlers/DatabaseHandler";

export class DataAccess {
	// private jsonHandler: JSONHandler = new JSONHandler();
	private databaseHandler: DatabaseHandler = new DatabaseHandler();

	public async getProducts() {
		return this.databaseHandler.readProducts();
	}

	public async getBillsFromUser(userId: number) {
		return this.databaseHandler.readBillsFromUser(userId);
	}

	public async getBillById(billId: number) {
		return this.databaseHandler.readBillById(billId);
	}

	// TODO(importante): implementar
	// recibir datos de la factura y los productos
	public async addBill() {
		try {
			// this.databaseHandler.testBill();
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
			// Eliminar este print
			console.log(errorMessage);
		}
	}

	public async getProductById(id: number) {
		return this.databaseHandler.readProductById(id);
	}

	public async getUsers() {
		return this.databaseHandler.readUsers();
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


		const id = users.length + 1;
		const newUser = {
			id,
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
