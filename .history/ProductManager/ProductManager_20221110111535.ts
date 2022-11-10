export class ProductManager {
    private products = [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product: s) {
        this.products.push(product);
    }

}