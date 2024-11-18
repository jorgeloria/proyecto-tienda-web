export class ProductPurchase {
    productId: number;
    billId: number;
    price: number;
    quantity: number;

    constructor(
        productId: number,
        billId: number,
        price: number,
        quantity: number
    ) {
        this.productId = productId;
        this.billId = billId;
        this.price = price;
        this.quantity = quantity;
    }
}