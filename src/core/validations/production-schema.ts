import { z } from 'zod';

// Definindo o schema de validação para um produto
export const productSchema = z.object({
  name: z.string().min(3, 'Nome do produto deve ter no mínimo 3 caracteres'),
  price: z.number().min(0.01, 'O preço deve ser maior que zero'),
  description: z.string().optional(),
});

// Tipo inferido do schema para uso em outras partes do código
export type Product = z.infer<typeof productSchema>;
