export class Address {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    zipCode: string;
    state: string;
    constructor() {
        this.addressLine1 = '';
        this.addressLine2 = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
    }
}