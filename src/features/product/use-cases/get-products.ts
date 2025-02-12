import { ProductsAdapter } from '../../../adapters/products/products-adapter';

export class GetProductsUseCase {
    constructor(private readonly productsAdapter: ProductsAdapter) { }

    async execute() {
        return this.productsAdapter.getProducts();
    }
}