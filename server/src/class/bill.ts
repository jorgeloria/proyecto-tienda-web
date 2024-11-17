export class Bill {
    id: number;
    date: Date;
    total: number;
    userId: number;

    constructor(
        id: number,
        date: Date,
        total: number,
        userId: number
    ) {
        this.id = id;
        this.date = date;
        this.total = total;
        this.userId = userId;
    }
}