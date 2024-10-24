import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBudgets } from "@/api/fecth-budgets";
import { UpdateSearchBudget } from "./update-search-budget";
import { UpdateTableBudget } from "./update-table-budget";
import { UpdateBudgetskeleton } from "./update-skeleton-budget";
import { MaterialContextProvider } from "@/contexts/materialsContext";

export function UpdateBudget() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const project_number = searchParams.get('project_number') || '';

  const {
    data: result,
    isLoading,
  } = useQuery({
    queryKey: ['update-budget', project_number],
    queryFn: () => getBudgets({ project_number }),
    enabled: !!project_number,
  });

  const handleUpdateBudget = () => queryClient.invalidateQueries({ queryKey: ['update-budget', project_number] });

  return (
    <MaterialContextProvider>
      <div className="max-w-[1440px] mx-auto w-full">
        <Helmet title="Corrigir Orçamento" meta={[{ name: 'description', content: 'Update budget page' }]} />
        <UpdateSearchBudget />
        <div className="border-b border-gray-50 mx-auto w-full my-2"></div>
        {
          isLoading ? (
            <UpdateBudgetskeleton />
          ) : (
            result?.data && result.data.length > 0 ? (
              <UpdateTableBudget data={result?.data} handleUpdateBudget={handleUpdateBudget} />
            ) : (
              <div className="flex items-center justify-center border border-gray-50 rounded h-40 shadow-[0_20px_50px_rgba(6,_10,_10,_0.1)] ">
                <p className="text-center text-sm font-semibold">Nenhum dado encontrado</p>
              </div>
            )
          )
        }
      </div>
    </MaterialContextProvider>
  );
}
