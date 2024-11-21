import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv";

import { Bill } from '../class/bill';
import { Product } from "../class/product";
import { ProductPurchase } from "../class/productPurchase";
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

	// TODO(todos): cambiar nombres en la base de datos
	public async readBillsFromUser(userId: number) {
		const responseObj = await this.supabase
				.from('factura')
				.select()
				.eq('usuario_id', userId);
		if (responseObj.error) {throw responseObj.error;}
		const bills = responseObj.data;
		return bills.map((bill: any) => {
			return new Bill (
				bill.id,
				bill.created_at,
				bill.total,
				bill.usuario_id,
				[]
			);
		});
	}

	public async readBillById(billId: number) {
		let responseObj;
		try{
			responseObj = await this.supabase
			.from('factura')
			.select(`
				*,
				factura_producto(price,qty,producto(id,image,title,thumbnail))
			`)
			.eq('id', billId);
		}catch(e){
			console.log(e)
		}

		if (responseObj.error) {throw responseObj.error;}
		const bills = responseObj.data;
		const bill = bills[0];
		return new Bill (
			bill.id,
			bill.created_at,
			bill.total,
			bill.usuario_id,
			bill.factura_producto
		);
	}

	private async createBill(bill: Bill) {
		const responseObj = await this.supabase
			.from('factura')
			.insert(
				{ usuario_id: bill.userId, total: bill.total }
			)
			.select()
		;

		if (responseObj.error) {throw responseObj.error;}
		return responseObj.data[0].id;
	}

	private async readMultipleProducts(productPurchases: ProductPurchase[]) {
		// TODO(opcional): verificar que los productos se lean correctamente
		for (let i = 0; i < productPurchases.length; i++) {
			const product = await this.readProductById(productPurchases[i].productId);
			productPurchases[i].price = product.price;
		}
		return productPurchases;
	}

	private async createProductPurchases(bill : Bill) {
		const productPurchases = bill.products;
		const errors = [] as ProductPurchase[];


		for (const productPurchase of productPurchases) {
			const responseObj = await this.supabase
				.from('factura_producto')
				.insert({
					factura_id: bill.id,
					producto_id: productPurchase.productId,
					price: productPurchase.price,
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
	public async registerPurchase(newBill: Bill) {
		try {
			const productPurchases = await this.readMultipleProducts(newBill.products);
			newBill.products = productPurchases;
			for (let i = 0; i < productPurchases.length; i++) {
				newBill.total += productPurchases[i].price * productPurchases[i].quantity;
			}
			const billId = await this.createBill(newBill);
			newBill.id = billId;
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

		return newBill.id;
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
