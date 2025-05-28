import { ExemploRepository } from "@/core/domain/repositories/exemplo";

export class getUseCase {
  constructor(private readonly repository: ExemploRepository) {}

  async execute(): Promise<any[]> {
    return this.repository.getExemplo();
  }
}