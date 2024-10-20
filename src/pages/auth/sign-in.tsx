import { zodResolver } from '@hookform/resolvers/zod'
import { EyeClosedIcon } from '@radix-ui/react-icons'
import { Eye } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FieldErrors, useForm } from 'react-hook-form' // Import FieldErrors
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const schemaLogin = z.object({
  username: z
    .string()
    .min(1, { message: 'Por favor, insira um usuário' })
    .trim(),
  password: z
    .string()
    .min(1, { message: 'Por favor, insira sua senha' })
    .trim(),
})
type FormData = z.infer<typeof schemaLogin>

export function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schemaLogin),
    mode: 'onBlur', // Mude para 'onBlur' para validação em tempo real
    criteriaMode: 'all',
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => setShowPassword(!showPassword)

  const handleSubmitForm = async (values: FormData) => {
    console.log(values)
  }

  const onError = (errors: FieldErrors<FormData>) => {
    if (errors.username) {
      return toast.error(errors.username.message)
    }
    if (errors.password) {
      return toast.error(errors.password.message)
    }
  }

  const getInputClasses = (error?: string) => {
    return `border ${error ? 'border-red-500' : ''} rounded py-2 w-full`
  }

  return (
    <>
      <Helmet title="Login" />
      <form
        onSubmit={handleSubmit(handleSubmitForm, onError)}
        className="flex w-full flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <Label>Nome de usuário</Label>
          <Input
            type="text"
            {...register('username')}
            className={`${getInputClasses(errors.username?.message)}`}
            aria-invalid={!!errors.username}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Senha:</Label>
          <div
            className={`flex h-8 items-center rounded-md bg-transparent text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground ${getInputClasses(errors.password?.message)}`}
          >
            <Input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className="w-full border-none bg-transparent text-sm outline-none placeholder:text-muted-foreground focus:no-underline"
              aria-invalid={!!errors.password}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
              className="px-2"
            >
              {showPassword ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeClosedIcon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button className="flex items-end justify-end" variant="link">
          <Link to={'/auth/forgot-password'} className="text-sm font-medium">
            Esqueceu sua senha?
          </Link>
        </Button>
        <Button type="submit" variant="default">
          Entrar
        </Button>
      </form>
    </>
  )
}
