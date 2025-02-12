import { HttpClient } from '../http/http-client';

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

export class ProductsAdapter {
    constructor(private readonly httpClient: HttpClient) { }

    async getProducts(): Promise<Product[]> {
        const response = await this.httpClient.request<Product[]>({
            url: 'https://jsonplaceholder.typicode.com/todos',
            method: 'get'
        });
        return response.data;
    }
}