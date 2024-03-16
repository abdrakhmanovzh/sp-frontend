'use client'

import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/shared/components/ui/form'
import { ErrorAlert } from '@/shared/components/ui/error-alert'
import { Divider } from '@/shared/components/ui/divider'
import { Button } from '@/shared/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/components/ui/input'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import { TLoginRequest, loginSchema } from '../models'
import { login } from '../lib'

export function LoginForm() {
  const router = useRouter()

  const form = useForm<TLoginRequest>({
    defaultValues: {
      password: '',
      email: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (values: TLoginRequest) => {
    const { message, status } = await login(values)

    if (status === 'error') {
      form.setError('root', {
        message
      })
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-8">
      <h1 className="mb-3 text-center text-3xl font-semibold">Sign In</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="email@example.com" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="email"
          />

          <FormField
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="enter password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="password"
          />

          <Button
            className="mt-4 text-base font-medium"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            Continue
          </Button>

          {form.formState.errors.root && (
            <ErrorAlert message={form.formState.errors.root.message} />
          )}
        </form>
      </Form>

      <Divider text="or" />

      <Button
        className="bg-secondary text-base font-medium text-black hover:bg-secondary/90"
        asChild
      >
        <Link href="/register">Sign Up</Link>
      </Button>
    </div>
  )
}
