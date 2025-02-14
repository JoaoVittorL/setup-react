import { Account } from "@/core/domain/entities/Account";
import { AccountsRepository } from "@/core/domain/repositories/accounts-repository";

export class GetProductsUseCase {
  constructor(private readonly productsRepository: AccountsRepository) {}

  async execute(): Promise<Account[]> {
    return this.productsRepository.getProducts();
  }
}