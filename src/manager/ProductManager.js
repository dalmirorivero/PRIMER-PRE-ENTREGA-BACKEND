import fs from 'fs';

export default class ProductManager{

    constructor() {
        this.products = [];
    }

    async getProducts() {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, 'utf-8');
                const products = JSON.parse(data);
                return products;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getProductById (ProductID){
        const products = await this.getProducts();
        const productIndex = products.find(product => product.id === ProductID);

        if (!productIndex) {
            console.log("ID de producto no encontrado!");
            return;
        }
        return productIndex;
    }
};