import { Account, AccountCreate } from '../entities/Account';
export interface AccountsRepository {
  getProducts(): Promise<Account[]>;
  createProduct(data: AccountCreate): Promise<Account>;
}