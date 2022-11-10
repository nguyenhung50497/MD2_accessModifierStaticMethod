export class ProductManager {
    private products = [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product) : void {
        this.products.push(product);
    }

}