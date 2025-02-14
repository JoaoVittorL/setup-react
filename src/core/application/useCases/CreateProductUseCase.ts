import { Account, AccountCreate } from '@/core/domain/entities/Account';
import {  AccountsRepository } from '@/core/domain/repositories/accounts-repository';

export class CreateProductUseCase {
  constructor(private readonly productsRepository: AccountsRepository) {}

  async execute(data: AccountCreate): Promise<Account> {
    return this.productsRepository.createProduct(data);
  }
}