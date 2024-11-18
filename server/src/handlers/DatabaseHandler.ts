import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv";

import { Bill } from '../class/bill';
import { Product } from "../class/product";
import { ProductPurchase } from "../class/productPurchase";
import { User } from "../class/user";
import { console } from 'inspector';
import { create } from 'domain';

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

	// TODO(todos): cambiar nombres en la base de datos
	public async readBillsFromUser(userId: number) {
		const responseObj = await this.supabase
				.from('factura')
				.select()
				.eq('usuario_id', userId);

		if (responseObj.error) {throw responseObj.error;}
		const bills = responseObj.data;
		return bills.map((bill: any) => {
			return {
				id: bill.id,
				date: bill.created_at,
				total: bill.total,
				userId: bill.usuario_id,
			};
		});
	}

	public async readBillById(billId: number) {
		const responseObj = await this.supabase
		.from('factura')
		.select(`
			*,
			factura_producto(*)
		`)
		.eq('id', billId);

		if (responseObj.error) {throw responseObj.error;}
		const bills = responseObj.data;
		const bill = bills[0];
		return JSON.stringify(bill, null, 1);
	}

	private async createBill(bill: Bill) {
		const responseObj = await this.supabase
			.from('factura')
			.insert(
				{ usuario_id: bill.userId, total: bill.total }
			)
		;
		if (responseObj.error) {throw responseObj.error;}
	}

	private async createProductPurchases(bill : Bill) {
		const productPurchases = bill.products as ProductPurchase[];
		const errors = [] as ProductPurchase[];

		for (const productPurchase of productPurchases) {
			const responseObj = await this.supabase
				.from('factura_producto')
				.insert({
					factura_id: productPurchase.billId,
					producto_id: productPurchase.productId,
					precio: productPurchase.price,
					qty: productPurchase.quantity
					}
				)
			;
			if (responseObj.error) {
				errors.push(productPurchase);
			}
		}

		return errors;
	}

	private async adjustPurchase(billId : number, productPurchases : ProductPurchase[]){
		let total = 0;
		productPurchases.forEach((productPurchase) => {
			total += productPurchase.price * productPurchase.quantity;
		});

		const responseObj = await this.supabase
			.from('factura')
			.update({ total : total })
			.eq('id', billId)
		;

		if (responseObj.error) {throw responseObj.error;}
	}

	// TODO(importante): cambiar nombre
	public async testBill(newBill: Bill) {
		try {
			await this.createBill(newBill);
		} catch (error) {
			// Cuando no se pueda insertar la factura
			throw new Error("Failed to insert bill");
		}

		const uninsertedProducts = await this.createProductPurchases(newBill) as ProductPurchase[];		
		if (uninsertedProducts.length > 0) {
			try {
				await this.adjustPurchase(newBill.id, uninsertedProducts);
			} catch (error) {// TODO(Fray): manejar error
				// Cuando se realice la compra parcialmente, 
				// pero no se pueda ajustar el monto total de la factura
			}

			// Siempre que se realice la compra parcialmente
			throw new Error("Failed to insert some product purchases");
		}
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
