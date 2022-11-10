export class ProductManager {
    private products = [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product: string) {
        this.products.push(product);
    }

}