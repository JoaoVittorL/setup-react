import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function UpdateTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="text-center w-[80px] min-w-[80px]">Código</TableHead>
        <TableHead className="text-center min-w-[300px] w-[300px]">Descrição</TableHead>
        <TableHead className="text-center w-[60px] min-w-[60px]">Quantidade</TableHead>
        <TableHead className="text-center w-[100px] min-w-[100px]">Orçado por</TableHead>
        <TableHead className="text-center w-[100px] min-w-[100px]">Data orçado</TableHead>
        <TableHead className="text-center w-[100px] min-w-[100px] truncate break-words">Editado por</TableHead>
        <TableHead className="text-center w-[100px] min-w-[100px] truncate">Data editado</TableHead>
        <TableHead className="text-center w-[100px] min-w-[100px]">Ações</TableHead>
      </TableRow>
    </TableHeader>
  );
}