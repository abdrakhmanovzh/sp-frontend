'use client'

import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/components/ui/form'
import {
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  Select
} from '@/components/ui/select'
import { LoginRequestType, loginSchema } from '@/models/auth/login'
import { CardContent, Card } from '@/components/ui/card'
import { ErrorAlert } from '@/components/ui/error-alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { Divider } from '@/components/ui/divider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/auth/actions'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

export function LoginForm() {
  const router = useRouter()

  const form = useForm<LoginRequestType>({
    defaultValues: {
      role: 'students',
      password: '',
      email: ''
    },
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (values: LoginRequestType) => {
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
    <Card className="w-96">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold leading-none tracking-tight">Sign In</h1>

              <FormField
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="flex h-fit gap-2 border-none p-0 text-xl font-semibold leading-none tracking-tight ring-0 focus:ring-0 focus-visible:ring-white">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="students">Student</SelectItem>
                        <SelectItem value="teachers">Teacher</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
                control={form.control}
                name="role"
              />
            </div>
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
                    <Input
                      data-test="password-input"
                      type="password"
                      {...field}
                      placeholder="enter password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="password"
            />

            {/* <FormField
              render={({ field }) => (
                <FormItem className="flex flex-col gap-3">
                  <FormLabel>Role</FormLabel>
                  <FormControl className="ml-2">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-12"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="students" />
                        </FormControl>
                        <FormLabel className="font-normal">Student</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="teachers" />
                        </FormControl>
                        <FormLabel className="font-normal">Teacher</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="role"
            /> */}

            <Button disabled={form.formState.isSubmitting} className="mt-2" type="submit">
              Continue
            </Button>

            {form.formState.errors.root && (
              <div className="error-alert">
                <ErrorAlert message={form.formState.errors.root.message} />
              </div>
            )}
          </form>
        </Form>

        <Divider text="or" />

        <Button variant={'secondary'} className="w-full" asChild>
          <Link href="/register/student">Create an account</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
