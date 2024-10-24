import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
export function UpdateBudgetskeleton() {

  return (
    <Table>
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
      <TableBody>
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <TableRow key={i} className="w-full gap-2">
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="my-2 h-6 w-[40px] min-w-[40px] bg-slate-600" />
                </span>
              </TableCell>
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="h-6 w-[300px] min-w-[300px] bg-slate-600" />
                </span>
              </TableCell>
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="h-6 w-[60px] min-w-[60px] bg-slate-600" />
                </span>
              </TableCell>
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="h-6 w-[100px] min-w-[100px] bg-slate-600" />
                </span>
              </TableCell>
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="h-6 w-[40px] min-w-[40px] bg-slate-600" />
                </span>
              </TableCell>
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="h-6 w-[100px] min-w-[100px] bg-slate-600" />
                </span>
              </TableCell>
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="h-6 w-[100px] min-w-[100px] bg-slate-600" />
                </span>
              </TableCell>
              <TableCell>
                <span className="flex justify-center">
                  <Skeleton className="h-6 w-[100px] min-w-[100px] bg-slate-600" />
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
