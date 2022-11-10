export class ProductManager {
    private products = [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product: any) {
        this.products.push(product );
    }

}