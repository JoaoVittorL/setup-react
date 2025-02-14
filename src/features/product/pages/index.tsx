import { useState } from 'react';
import { useProducts, useCreateProduct } from '../hooks/useProdructs';
import { PlusCircle } from 'lucide-react';

export function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();
  const createProduct = useCreateProduct();
  const [newProductName, setNewProductName] = useState('');
  if (isLoading) {
    return <div>Carregando...</div>;
  }
  console.log(products)
  if (error) {
    return <div>Erro ao carregar produtos</div>;
  }

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProductName.trim()) return;

    try {
      await createProduct.mutateAsync({ name: newProductName });
      setNewProductName(''); 
    } catch (err) {
      console.error('Erro ao criar produto:', err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        
        <form onSubmit={handleCreateProduct} className="flex gap-4 mb-6">
          <input
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            placeholder="Nome do novo produto"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            // disabled={createProduct.isLoading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PlusCircle size={20} />
            {/* {createProduct.isLoading ? 'Criando...' : 'Criar Produto'} */}
          </button>
        </form>

        {createProduct.isError && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            Erro ao criar produto. Tente novamente.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {products?.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold">{product.name}</h2>
          </div>
        ))} */}
      </div>
    </div>
  );
}