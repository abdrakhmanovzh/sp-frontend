'use client'

import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/components/ui/form'
import { StudentRegisterFormType, studentRegisterSchema } from '@/models/auth/register'
import { PopoverContent, PopoverTrigger, Popover } from '@/components/ui/popover'
import { CardContent, CardHeader, CardTitle, Card } from '@/components/ui/card'
import { ErrorAlert } from '@/components/ui/error-alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar } from '@/components/ui/calendar'
import { Divider } from '@/components/ui/divider'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { register } from '@/lib/auth/actions'
import { useRouter } from 'next/navigation'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { cn } from '@/lib/cn'
import Link from 'next/link'

export function RegisterFormStudent() {
  const router = useRouter()

  const form = useForm<StudentRegisterFormType>({
    defaultValues: {
      birthdate: undefined,
      confirm_password: '',
      password: '',
      surname: '',
      phone: '',
      email: '',
      name: ''
    },
    resolver: zodResolver(studentRegisterSchema)
  })

  const onSubmit = async (values: StudentRegisterFormType) => {
    const { message, status } = await register({
      birthday: format(values.birthdate, 'yyyy-MM-dd'),
      phone: Number(values.phone.split('+7')[1]),
      password: values.password,
      surname: values.surname,
      email: values.email,
      name: values.name,
      role: 'students'
    })

    if (status === 'error') {
      form.setError('root', {
        message
      })
      return
    }

    router.push('/dashboard')
  }

  return (
    <Card className="w-fit max-w-3xl">
      <CardHeader>
        <CardTitle>Sign Up | Student</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="flex flex-col gap-6 md:gap-4" onSubmit={form.handleSubmit(onSubmit)}>
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

            <div className="flex flex-1 flex-col gap-4 md:flex-row lg:gap-10">
              <FormField
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} placeholder="Gosling" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="surname"
              />

              <FormField
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} placeholder="Ryan" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="name"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 md:flex-row lg:gap-10">
              <FormField
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} placeholder="+7 777 777 77 77" maxLength={12} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="phone"
              />

              <FormField
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-2">
                    <FormLabel>Birth date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                            variant={'outline'}
                          >
                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0" align="start">
                        <Calendar
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          onSelect={field.onChange}
                          selected={field.value}
                          mode="single"
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
                control={form.control}
                name="birthdate"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 md:flex-row lg:gap-10">
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

              <FormField
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} placeholder="repeat password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                name="confirm_password"
                control={form.control}
              />
            </div>

            <Button className="mt-4" type="submit">
              Continue
            </Button>

            {form.formState.errors.root && (
              <ErrorAlert message={form.formState.errors.root.message} />
            )}
          </form>
        </Form>

        <Divider text="or" />
        <div className="flex gap-4">
          <Button variant={'secondary'} className="w-full" asChild>
            <Link href="/register/teacher">Sign Up as a Teacher</Link>
          </Button>

          <Button variant={'secondary'} className="w-full" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
