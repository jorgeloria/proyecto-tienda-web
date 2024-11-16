import { createClient } from '@supabase/supabase-js'

import { Product } from "../class/product";
import { User } from "../class/user";

export class DatabaseHandler {
	
	private supabase : any;

	public constructor(){
		const privateKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9na3pzZ3NrcnF4ZnhmZnlwcGdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NDE5ODMsImV4cCI6MjA0NzExNzk4M30.YAUkloy015UK47Vk9bgu5zGmKwiJR0Zlr5O1MkPoi6M";
		const supaUrl = "https://ogkzsgskrqxfxffyppgl.supabase.co";
		this.supabase = createClient(supaUrl, privateKey);
	}

	public async readProducts() {
		//TODO: revisar este ejemplo
	  	const responseObj = await this.supabase
				.from('producto')
				.select();
		if (responseObj.error) {throw responseObj.error;}
		const products = responseObj.data;

		return products.map((product: any) => {
			return new Product(
					product.id,
					product.title,
					"product.description",
					4000,
					50,
					"product.category",
					"product.images",
					"product.thumbnail"
			);
		});
	}

	public async readProductById(id: number) {
		// const productsData = await this.jsonFilesHelper.readProductJSONFile();
		const productsData = {"products":[]};
		const product = productsData.products.find((product: any) => product.id === id);
		if (!product) {
			throw new Error("Product not found");
		}
		return new Product(
				1,
				"product.title",
				"product.description",
				12,
				12,
				"product.category",
				"product.images",
				"product.thumbnail"
		);
	}

	public async readUsers() {
		
		const usersData = { "users": [] };
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
		// const usersData = await this.jsonFilesHelper.readUserJSONFile();
		const usersData = { "users":[] };
		const user = usersData.users.find((user: any) => user.id === id);
		if (!user) {
			throw new Error("User not found");
		}
		return new User(
				123,
				"user.name",
				"user.email",
				"user.password"
		);
	}

	public async appendUser(newUser: User) {
		//TODO: revisar este ejemplo para insertar
		// 	const responseObj = await this.supabase.from('producto')
		// 			 .insert({ "nombre": "Denmark", "created_at": "234872348273984" })
		// 	console.log('inserting:')
		// 	console.log(responseObj)

		try {
			const users = await this.readUsers();
			users.push(newUser);
			const data = JSON.stringify({ users }, null, 2);
			// await this.jsonFilesHelper.writeUserJSONFile(data);
			return true;
		} catch (error) {
			return false;
		}
	}
}
