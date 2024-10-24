// import { CircleAlert, Code } from "lucide-react";
import { useCallback } from "react";
import { toast } from "sonner";
import { BudgetProps } from "./update-table-budget";
import { Material } from "@/@types/entities/material";
import { CircleAlert } from "lucide-react";
interface UpdatePasteBudgetProps {
  setNewData: (data: BudgetProps[]) => void;
  user: {
    user:{
      name: string | undefined
    }
  };
  materialList: Material[];
}
export function UpdatePasteBudget({ setNewData, user, materialList }: UpdatePasteBudgetProps) {
  const handlePaste = useCallback((event: React.ClipboardEvent<HTMLDivElement>) => {
    const clipboardData = event.clipboardData.getData("text");
    const currentDate = new Date();
    const rows = clipboardData.split("\n");

    const existingMaterialCodes = new Set(materialList.map(material => material.code));

    const parsedData: BudgetProps[] = [];
    const incorrectCodes: string[] = [];
    const incorrectQuantity: string[] = [];
    const notExistsMaterial: string[] = [];

    for (const row of rows) {
      const [material_code, quantity] = row.split("\t");
      const normalizedQuantityStr = quantity.replace(",", ".");
      const parsedQuantity = Number(normalizedQuantityStr);

      if (/[a-zA-Z]/.test(material_code)) {
        incorrectCodes.push(material_code);
      }

      if (isNaN(parsedQuantity) || quantity.trim() === "" || quantity.includes(".")) {
        incorrectQuantity.push(material_code);
      }

      if (!existingMaterialCodes.has(Number(material_code))) {
        notExistsMaterial.push(material_code);
      }

      if (incorrectCodes.length === 0 && incorrectQuantity.length === 0 && notExistsMaterial.length === 0) {
        const material = materialList.find(material => material.code === Number(material_code));

        parsedData.push({
          createdAt: currentDate.toISOString(),
          id: `new-${Math.random()}`,
          material: {
            id: '',
            code: Number(material_code),
            materialId: material?.id,
            description: material?.description || '',
          },
          playedfor: String(user.user.name),
          project: '',
          project_id: '',
          updatedAt: '',
          updatedAuthor: '',
          value: String(normalizedQuantityStr).trim(),
          default_value: String(normalizedQuantityStr).trim(),
          altered_value: false,
          created: true,
        });
      }
    }

    if (incorrectCodes.length > 0) {
      return toast(alertContainer('Códigos inválidos encontrados:', incorrectCodes), {
        duration: 5000,
      });
    }
    if (incorrectQuantity.length > 0) {
      return toast(alertContainer('Quantidade inválida encontrada para os códigos:', incorrectQuantity), {
        duration: 5000,
      })
    }
    if (notExistsMaterial.length > 0) {
      return toast(alertContainer('Material(s) inexistente(s) para os códigos:', notExistsMaterial), {
        duration: 5000,
      })
    }

    setNewData(prevData => [...prevData, ...parsedData]);

  }, [materialList, user.user.name]);

  function alertContainer(title: string,array: string[]) {
    return (
      <div className="rounded-md max-w-[600px] w-full">
        <div className="flex items-center justify-center gap-2 mx-auto text-center w-full">
          <CircleAlert className="h-6 w-6 text-red-600" />
          <h2 className="text-sm font-semibold text-red-600">
            {title}
          </h2>
        </div>
        <div className="flex flex-col items-center mt-2 font-semibold">
          {array.join(", ")}
        </div>
      </div>
    )
  }

  return <div onPaste={handlePaste} className="border rounded w-full my-4 p-2" tabIndex={0}>
    <div className="border rounded bg-white-100 dark:bg-blue-950">
      <p className="flex text-center items-center justify-center text-sm font-semibold h-[40px]">
        Colar aqui os materiais e quantidades adicionais...
      </p>
    </div>
  </div>;
}