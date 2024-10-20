import { Smile } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Button } from '@/components/ui/button'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen sm:grid-cols-[2fr_2fr]">
      <div className="relative hidden max-h-screen bg-muted p-16 sm:block">
        <strong>Undefined</strong>
      </div>
      <div className="flex h-screen flex-col justify-center">
        <div className="mx-auto flex w-full max-w-[640px] flex-col items-center p-16">
          <h2 className="mb-4 text-center text-2xl font-bold">
            Bem-vindo à <strong>Undefined</strong>
          </h2>
          <p className="mb-8 text-center text-lg">
            Seu sistema de gerenciamento
          </p>

          <Button variant="outline" className="mx-auto flex items-center gap-2">
            <Smile />
            <span>Login com Google</span>
          </Button>

          <div className="my-8 grid w-full grid-cols-3 items-center gap-4">
            <div className="h-[1px] bg-gray-500" />
            <span className="text-center text-sm font-medium">
              Ou entre com
            </span>
            <div className="h-[1px] bg-gray-500" />
          </div>
          <Outlet />
        </div>
      </div>
      <Toaster position="bottom-right" richColors expand />
    </div>
  )
}
