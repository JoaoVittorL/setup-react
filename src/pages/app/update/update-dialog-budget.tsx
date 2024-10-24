import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ArrowBigRight } from "lucide-react"

export function UpdateBudgetDialog({ handleClickValue }: { handleClickValue: () => void }) {
  const [open, setOpen] = useState(false)

  const handleConfirmClick = () => {
    handleClickValue()
    setOpen(false)
  }

  return (
    <div className="flex justify-center mt-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="xs" className="w-1/4">
            Corrigir <ArrowBigRight />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="text-center">
            <DialogTitle className="text-center">Deseja corrigir o orçamento?</DialogTitle>
            <DialogDescription className="text-center">Verifique se os dados estão corretos.</DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-center items-center">
            <Button
              type="submit"
              variant="default"
              size="xs"
              className="w-2/4 mx-auto"
              onClick={handleConfirmClick}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
