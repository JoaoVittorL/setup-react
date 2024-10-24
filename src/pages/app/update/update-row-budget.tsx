import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { History, Trash2 } from "lucide-react";
import { BudgetProps } from "./update-table-budget";
import { useCallback } from "react";

const formatUserName = (name: string) => {
  const parts = name.split(" ");
  const firstName = parts[0];
  const initials = parts.slice(1).map(part => (part.length > 3 ? part[0] : "")).join("");
  return `${firstName} ${initials}`;
};

export function UpdateTableRow({ newData, setNewData, userName }: { newData: BudgetProps[], setNewData: React.Dispatch<React.SetStateAction<BudgetProps[]>>, userName: string | undefined}) {
  const updateItem = (item: BudgetProps, value: string) => {
    const currentDate = new Date();
    return {
      ...item,
      value,
      altered_value: item.default_value !== value,
      updatedAuthor: !item.created && item.default_value !== value ? userName : "",
      updatedAt: !item.created && item.default_value !== value ? String(currentDate) : "",
    };
  };
  const handleChangeInputNumber = (e: React.ChangeEvent<HTMLInputElement>, id: string | undefined) => {
    const value = e.target.value
    setNewData((prevData) =>
      prevData.map((item) =>
        item.id === id ? updateItem(item, value) : item
      )
    );
  };
  const handleReset = (id: string) => {
    setNewData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, value: item.default_value || "" }
        }
        return item; 
      })
    );
  };

  const handleDelete = useCallback((id: string) => {
    setNewData((prevData) => prevData.filter((item) => item.id !== id));
  }, []);
  return (
    <TableBody>
      {newData.map((item, index) => {
        const rowClass = `
          ${index % 2 === 0 ? 'bg-white-500 dark:bg-transparent' : 'bg-gray-100 dark:bg-blue-950'}
          ${item.created ? 'bg-green-600 dark:bg-green-600 text-white-500 font-semibold' : ''}
          ${item.altered_value && item.value != item.default_value ? 'bg-yellow-600 dark:bg-yellow-600 text-white-500 font-semibold' : ''}
          ${item.altered_value && item.value == "0" ? 'bg-red-600 dark:bg-red-600 text-white-500 font-semibold' : ''}
        `;
        return (
          <TableRow key={item.id} className={rowClass.trim()}>
            <TableCell className="text-center">{item.material.code}</TableCell>
            <TableCell className="text-center min-w-[300px] w-[300px]">{item.material.description}</TableCell>
            <TableCell className="text-center">
              <Input
                className="text-center border-none py-0 h-auto"
                value={item.value}
                onInput={(e) => {
                  const inputElement = e.target as HTMLInputElement;
                  inputElement.value = inputElement.value.replace(/[^0-9,]/g, "");
                }}
                onChange={(e) => handleChangeInputNumber(e, item.id)}
              />

            </TableCell>
            <TableCell className="text-center">{item.playedfor && formatUserName(item.playedfor)}</TableCell>
            <TableCell className="text-center">{item.createdAt && format(new Date(item.createdAt), "dd/MM/yyyy", { locale: ptBR })}</TableCell>
            <TableCell className="text-center">{item.updatedAuthor && formatUserName(item.updatedAuthor)}</TableCell>
            <TableCell className="text-center">{item.updatedAt && format(new Date(item.updatedAt), "dd/MM/yyyy", { locale: ptBR })}</TableCell>
            <TableCell className="text-center p-2">
              {item.created ? (
                <Trash2 className="mx-auto w-4 h-4 text-white-100 cursor-pointer" onClick={() => handleDelete(item.id as string)} />
              ) : (
                <div className="flex items-center justify-center gap-4">
                  {item.altered_value && item.value != item.default_value ? <History className="w-4 h-4 text-white-100 cursor-pointer" onClick={() => handleReset(item.id as string)} /> : '-'}
                </div>
              )}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
