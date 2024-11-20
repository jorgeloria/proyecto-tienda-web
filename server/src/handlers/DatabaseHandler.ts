import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv";

import { Product } from "../class/product";
import { User } from "../class/user";

export class DatabaseHandler {
	
	private supabase : any;

	public constructor(){
		dotenv.config();
		const privateKey = process.env.SUPABASE_KEY || "empty";
		const supaUrl = process.env.SUPABASE_URL || "https://localhost";
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
					product.description,
					product.price,
					product.stock,
					product.category,
					product.image,
					product.thumbnail
			);
		});
	}

	public async readProductById(id: number) {
		const resObj = await this.supabase.from('producto').select().eq('id', id)
		if (resObj.error || resObj.data.length == 0) {
			throw new Error("Product not found");
		}
		const product = resObj.data[0];//TODO: cuando se hace select con equal, el resultado es un array
		return new Product(
				product.id,
				product.title,
				product.description,
				product.price,
				product.stock,
				product.category,
				product.image,
				product.thumbnail
		);
	}

	public async readUsers() {
		const resObj = await this.supabase.from('usuario').select()
		if (resObj.error || resObj.data.length == 0) {
			throw new Error("Users not found");
		}
		const usersData = resObj.data || [];
		return usersData.map((user: any) => {
			return new User(
					user.id,
					user.name,
					user.email,
					user.password
			);
		});
	}
	
	public async readUserById(id: number) {
		const resObj = await this.supabase.from('usuario').select().eq('id', id);
		if (resObj.error || resObj.data.length == 0) {
			throw new Error("Users not found");
		}
		const user = resObj.data[0];
		return new User(
				user.id,
				user.name,
				user.email,
				user.password
		);
	}

	public async appendUser(newUser: User) {
		console.log('inserting new user:')
			const responseObj = await this.supabase.from('usuario')
					 .insert({ "name": newUser.name, "email": newUser.email, "password": newUser.password })
			console.log(responseObj)

	}
}
