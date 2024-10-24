import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchButtonsFilter } from "@/components/search-buttons-filter";

const schemaFilter = z.object({
  project_number: z.string().optional(),
})
type OrderFiltersSchema = z.infer<typeof schemaFilter>

export function UpdateSearchBudget() {
  const [searchParams, setSearchParams] = useSearchParams()

  const projectNumberFromURL = searchParams.get('project_number');

  const { register, handleSubmit, watch, reset } = useForm<OrderFiltersSchema>({
    resolver: zodResolver(schemaFilter),
    defaultValues: {
      project_number: projectNumberFromURL ?? '',
    },
  })

  const [project_number] = watch(['project_number']);
  const activeButtonInteraction = !!(project_number);

  function handleFilter({ project_number }: OrderFiltersSchema) {
    setSearchParams((state: any) => {
      if (project_number) {
        state.set('project_number', project_number.trim());
      } else {
        state.delete('project_number');
      }

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state: any) => {
      state.delete('project_number')
      return state
    })
    reset({ project_number: '' })
  }

  return (
    <form onSubmit={handleSubmit(handleFilter)} className="flex justify-between items-end flex-wrap gap-2 w-full" >
      <Input id="project_number" placeholder="Projeto" type="text" {...register('project_number')} className="w-full sm:w-[200px]" />
      <div className="flex gap-2">
        <SearchButtonsFilter activeButtonInteraction={activeButtonInteraction} handleClearFilters={handleClearFilters} />
      </div>
    </form>
  )
}