import { Table } from "@/components/ui/table";
import { useCallback, useContext, useEffect, useState } from "react";
import { UpdateTableRow } from "./update-row-budget";
import { UpdateTableHeader } from "./update-header-budget";
import { useAuth } from "@/contexts/AuthContext";
import { MaterialContext } from "@/contexts/materialsContext";
import { toast } from "sonner";
import { UpdateAdd } from "./update-add-budget";
import { UpdateBudgetDialog } from "./update-dialog-budget";
import { putBudget } from "@/api/fecth-budgets";
import { UpdatePasteBudget } from "./update-paste-budget";
import { FormLoading } from "@/components/form-loading";
import type { Material } from "@/@types/entities/material";

export interface BudgetProps {
  createdAt: string | undefined;
  id: string | undefined;
  material: Material;
  playedfor: string;
  project: string;
  project_id: string;
  updatedAt: string | undefined;
  updatedAuthor: string | undefined;
  value: string;


  default_value?: string;
  altered_value?: boolean;
  created?: boolean;
}

export function UpdateTableBudget({ data, handleUpdateBudget }: { data: BudgetProps[], handleUpdateBudget: () => void }) {
  const { user } = useAuth();
  const { materialList } = useContext(MaterialContext);
  const [isLoading, setIsLoading] = useState(false);
  const [newData, setNewData] = useState<BudgetProps[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setNewData(data.map((item) => ({
        ...item,
        default_value: item.value,
        created: false,
      })));
    }
  }, [data]);

  // const handleSendData = useCallback(async () => {
  //   setIsLoading(true);
  //   const updatedBudgets = newData.filter((item) => item.default_value).map((item) => ({
  //     budgetId: item.id,
  //     value: item.value,
  //   }));
  //   const newBudgets = newData.filter((item) => item.created).map((item) => (
  //     {
  //       materialId: item.material.materialId,
  //       value: parseFloat(String(item.value).replace(",", ".")),
  //     }));

  //   const arr = {
  //     updatedBudgets: [...updatedBudgets],
  //     newBudgets: [...newBudgets],
  //   };

  //   if (arr.updatedBudgets.length === 0 && arr.newBudgets.length === 0) {
  //     setIsLoading(false);
  //     return toast.error("Nenhum material foi corrigido/adicionado.");
  //   }

  //   if (arr.updatedBudgets.length === 0 && arr.newBudgets.length > 0) {
  //     setIsLoading(false);
  //     return toast.error("Para adicionar material ao orçamento, direcione-se à aba de inserção.");
  //   }

  //   const response = await putBudget({ values: arr, project_id: data[0].project_id ?? "" });

  //   if (response.status === 201 || response.status === 200) {
  //     await handleUpdateBudget()
  //     setIsLoading(false);
  //     toast.success(response.message);
  //   } else {
  //     toast.error(response.message);
  //   }
  // }, [newData, data]);
  console.log(user)
  return (
    <>
      {isLoading && <FormLoading message="Enviando dados..." />}
      <div className={`${isLoading ? 'pointer-events-none opacity-50' : ''}`}>
        <div className="rounded-md border mx-auto w-ful mt-2">
          <Table className="w-full min-w-[600px]" aria-label="Tabela de movimentações históricas">
            <UpdateTableHeader />
            <UpdateTableRow newData={newData} setNewData={setNewData} userName={user?.user.name}/>
          </Table>
        </div>
        {user && <UpdatePasteBudget setNewData={setNewData} user={user} materialList={materialList} /> }         
        <UpdateAdd setNewData={setNewData} user={user?.user.name} materialList={materialList} />
        {/* <UpdateBudgetDialog handleClickValue={handleSendData} />  */}
      </div>
    </>
  );
}
