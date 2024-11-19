export class ProductPurchase {
    productId: number;
    billId: number;
    price: number;
    quantity: number;

    constructor(
        productId: number,
        billId: number = 0,
        price: number = 0,
        quantity: number = 0
    ) {
        this.productId = productId;
        this.billId = billId;
        this.price = price;
        this.quantity = quantity;
    }
}