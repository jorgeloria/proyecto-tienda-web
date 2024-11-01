import { JSONFilesHelper } from "../filesHelpers/JSONFilesHelper";
import { Product } from "../class/product";
import { User } from "../class/user";

export class JSONHandler {
	private jsonFilesHelper = new JSONFilesHelper();

	public async readProducts() {
		const productsData  = await this.jsonFilesHelper.readProductJSONFile();
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
		const productsData = await this.jsonFilesHelper.readProductJSONFile();
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

	public async readUsers() {
		const usersData = await this.jsonFilesHelper.readUserJSONFile();
		return usersData.users.map((user: any) => {
			return new User(
					user.id,
					user.name,
					user.email,
					user.password
			);
		});
	}

	public async readUserById(id: number) {
		const usersData = await this.jsonFilesHelper.readUserJSONFile();
		const user = usersData.users.find((user: any) => user.id === id);
		if (!user) {
			throw new Error("User not found");
		}
		return new User(
				user.id,
				user.name,
				user.email,
				user.password
		);
	}

	public async appendUser(newUser: User) {
		try {
			const users = await this.readUsers();
			users.push(newUser);
			const data = JSON.stringify({ users }, null, 2);
			await this.jsonFilesHelper.writeUserJSONFile(data);
			return true;
		} catch (error) {
			return false;
		}
	}
}
