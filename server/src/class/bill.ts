import { ProductPurchase } from "./productPurchase";
import { ShipData } from "./shipData";

export class Bill {
    id: number;
    date: Date;
    total: number;
    userId: number;
    products: ProductPurchase[];
    shipData: ShipData;

    constructor (
        id: number,
        date: Date,
        total: number,
        userId: number,
        products: ProductPurchase[],
        shipData: ShipData
    ) {
        this.id = id;
        this.date = date;
        this.total = total;
        this.userId = userId;
        this.products = products;
        this.shipData = shipData;
    }
}