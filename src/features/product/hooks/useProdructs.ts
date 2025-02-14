import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosAdapter } from '@/infrastructure/http/axios-adapters';
import { ProductsRepository } from '@/infrastructure/repositories/ProductsRepository';
import { GetProductsUseCase } from '@/core/application/useCases/get-accounts-use-case';
import { CreateProductUseCase } from '@/core/application/useCases/CreateProductUseCase';
import { AccountCreate } from '@/core/domain/entities/Account';

const httpClient = new AxiosAdapter();
const productsRepository = new ProductsRepository(httpClient);
const getProductsUseCase = new GetProductsUseCase(productsRepository);
const createProductUseCase = new CreateProductUseCase(productsRepository);

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProductsUseCase.execute(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
}

export function useCreateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: AccountCreate) => createProductUseCase.execute(data),
    onSuccess: () => {
      // Invalida o cache e força um novo fetch dos produtos
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
}