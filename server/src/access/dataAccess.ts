import { JSONHandler } from "../handlers/JSONHandler";
import { DatabaseHandler } from "../handlers/DatabaseHandler";
import { Bill } from "../class/bill";
import { ProductPurchase } from "../class/productPurchase";
import { ShipData } from "../class/shipData";

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

	// recibir datos de la factura y los productos
	public async addBill(userId: number, products: any[], shipData: ShipData) {
		/*
		Datos de prueba para la factura
		Los datos tienen que enviarse en el siguiente formato desde el frontend:
		let objs = [];
		let p = {id: 19, quantity: 1};
		objs.push(p);
		p = {id: 10, quantity: 2};
		objs.push(p);		
		const shipData = new ShipData(
			"moisesariasg@gmail.com",
			"moises",
			"arias grillo",
			"shi",
			"San Jose",
			"Aserri",
			"San Gabriel",
			12344321
		);	
		this.addBill(1, objs, shipData);
		*/
		const prods = products.map((product) => {
			return new ProductPurchase( 
				product.id, 0, 0, product.quantity
			);
		});

		const bill = new Bill (
			0,
			new Date(),
			0,
			userId,
			prods,
			shipData
		)

		try {
			const retVal = await this.databaseHandler.registerPurchase(bill,shipData);
			return retVal;
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
			throw new Error(errorMessage);
		}
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
