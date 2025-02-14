import { IProductsRepository, CreateAccountDTO } from '../../core/domain/repositories/accounts-rep';
import { Account } from '../../core/domain/entities/Account';
import { HttpClient } from '../http/http-client';

export class ProductsRepository implements IProductsRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getProducts(): Promise<Account[]> {
    const response = await this.httpClient.request<Account[]>({
      url: '/accounts',
      method: 'get'
    });
    return response.data;
  }

  async createProduct(data: CreateAccountDTO): Promise<Account> {
    const response = await this.httpClient.request<Account>({
      url: '/accounts',
      method: 'post',
      body: data
    });
    return response.data;
  }
}