export class Product {
	id: number;
	title: string;
	description: string;
	price: number;
	stock: number;
	category: string;
	images: string;
	thumbnail: string;

	constructor(
			id: number,
			title: string,
			description: string,
			price: number,
			stock: number,
			category: string,
			images: string,
			thumbnail: string
	) {
			this.id = id;
			this.title = title;
			this.description = description;
			this.price = price;
			this.stock = stock;
			this.category = category;
			this.images = images;
			this.thumbnail = thumbnail;
	}
}