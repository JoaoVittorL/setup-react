import { useForm } from "react-hook-form";
import { useCallback, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import { toast } from "sonner";
import { Material } from "@/@types/entities/material";
import { ChevronRight, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BudgetProps } from "./update-table-budget";

export const schemaFilter = z.object({
  code: z.string().min(2, 'Insira o código do material corretamente!'),
  description: z.string(),
  to_send: z.string().min(1, 'Insira a quantidade!'),
});

type OrderFiltersSchema = z.infer<typeof schemaFilter>
interface UpdatePasteBudgetProps {
  setNewData: (data: BudgetProps[]) => void;
  user: string | undefined;
  materialList: Material[];
}

export function UpdateAdd({ setNewData, user, materialList }: UpdatePasteBudgetProps) {
  
  const { register, handleSubmit, watch, reset, setValue } = useForm<OrderFiltersSchema>({
    resolver: zodResolver(schemaFilter),
    mode: "all",
    defaultValues: {
      code: "",
      to_send: ""
    },
  });
  const selectedCode = watch("code")

  useEffect(() => {
    if (materialList) {
      const selectedMaterial: Material | undefined = materialList.find(item => String(item.code) === selectedCode);
      if (selectedMaterial) {
        setValue("description", selectedMaterial.description);
      } else {
        setValue("description", "");
      }
    }
  }, [selectedCode]);


  // parsedData.push({
  //   createdAt: currentDate.toISOString(),
  //   id: `new-${Math.random()}`,
  //   material: {
  //     id: '',
  //     code: Number(material_code),
  //     materialId: material?.id,
  //     description: material?.description || '',
  //   },
  //   playedfor: String(user.user.name),
  //   project: '',
  //   project_id: '',
  //   updatedAt: '',
  //   updatedAuthor: '',
  //   value: String(normalizedQuantityStr).trim(),
  //   default_value: String(normalizedQuantityStr).trim(),
  //   altered_value: false,
  //   created: true,
  // });
  function handleAddMaterialAddon({ to_send, code }: OrderFiltersSchema) {
    const material = materialList.find(m => m.code === Number(code));
    const currentDate = new Date();

    if (material) {
      const createNewMaterialAddon = {
        createdAt: currentDate.toISOString(),
        id: `new-${Math.random()}`,
        material: {
          id: '',
          code: Number(material.code),
          materialId: material?.id,
          description: material?.description || '',
        },
        playedfor: String(user),
        project: '',
        project_id: '',
        updatedAt: '',
        updatedAuthor: '',
        value: String(to_send).trim(),
        default_value: String(to_send).trim(),
        altered_value: false,
        created: true,
      }
      handleSetDataAddon([createNewMaterialAddon])
    }
    reset();
  }

  const onError = (errors: any) => {
    if (errors.code) {
      toast.error(errors.code.message);
    }
    if (errors.to_send) {
      toast.error(errors.to_send.message);
    }
  };

  const handleSetDataAddon = useCallback((value: BudgetProps[]) => {
    setNewData((prevData) => [...prevData, ...value]);
  }, []);

  return (
    <>
      <div className="flex items-center gap-2">
        <h2 className="font-bold text-green-500">Adição manual</h2>
        <ChevronRight className="text-blue-800 font-bold" />
      </div>
      <form className='flex border border-gray-950 bg-gray-100 rounded-full justify-between w-full max-w-[1000px] mx-auto mt-4 ' onSubmit={handleSubmit(handleAddMaterialAddon, onError)}>
        <Input className="text-blue-800 border-none text-center max-w-[200px] w-full font-semibold" placeholder='Código' list="codeList" type="text" autoComplete="off" {...register("code")}
          onInput={(e) => {
            (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[^0-9]/g, '');
          }} />
        <datalist id="codeList">
          <div className="absolute z-10 w-full rounded-b-md">
            {materialList.map((r, i) => (
              <option className="p-2 hover:bg-blue-600 cursor-pointer" key={"codelist-" + i.toString() + "-" + r.id} value={r.code}>
                {r.code}
              </option>
            ))}
          </div>
        </datalist>
        <Input className="text-blue-800 border-none text-center" list="descriptionList font-semibold" placeholder='DESCRIÇÃO' type="text" disabled {...register("description")} />
        <Input className="text-blue-800 border-none text-center max-w-[140px] w-full font-semibold" placeholder='QTD' type="text" {...register("to_send")}
          onInput={(e) => {
            const inputElement = e.target as HTMLInputElement;
            inputElement.value = inputElement.value.replace(/[^0-9,]/g, "");
          }}
        />
        <Button type='submit' title='Adicionar Material' className=" max-w-[60px] w-full bg-transparent hover:bg-transparent">
          <PlusCircle className='text-black flex justify-end gap-1 items-center text-center border-0 rounded-full align-middle font-bold' size={32} />
        </Button>
      </form >
    </>
  )
}