export class ShipData {
    email: string;
    name: string;
    lastName: string;
    direction: string;
    province: string;
    city: string;
    region: string;
    phone: number;

    constructor(
        email: string,
        name: string,
        lastName: string,
        direction: string,
        province: string,
        city: string,
        region: string,
        phone: number
    ) {
        this.email = email;
        this.name = name;
        this.lastName = lastName;
        this.direction = direction;
        this.province = province;
        this.city = city;
        this.region = region;
        this.phone = phone;
    }
}