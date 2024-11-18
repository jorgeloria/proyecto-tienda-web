import { ProductPurchase } from "./productPurchase";

export class Bill {
    id: number;
    date: Date;
    total: number;
    userId: number;
    products: ProductPurchase[];

    constructor(
        id: number,
        date: Date,
        total: number,
        userId: number,
        products: ProductPurchase[],
    ) {
        this.id = id;
        this.date = date;
        this.total = total;
        this.userId = userId;
        this.products = products;
    }
}