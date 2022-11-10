export class ProductManager {
    private products: any[] = [];

    constructor() {
    }

    get getAll() {
        return this.products;
    }

    set add(product: any) {
        this.products.push(product);
    }

}