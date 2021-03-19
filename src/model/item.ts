export class Item {
    name: string = "";
    amount: number = 0;
    price: number = 0;
    total: number = 0;
    inCart: boolean = false;

    constructor(name?: string, amount?: number, price?: number) {
        this.name = name ?  name : '';
        this.amount = amount ? amount : 0;
        this.price = price ? price : 0;
        this.updateTotal();
        this.inCart = false;
    }

    change (name: string, amount: number, price: number) {
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.updateTotal();
    }

    updateTotal() {
        this.total = this.amount * this.price;
    }

}