'use client'

import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/shared/components/ui/form'
import { PopoverContent, PopoverTrigger, Popover } from '@/shared/components/ui/popover'
import { RadioGroupItem, RadioGroup } from '@/shared/components/ui/radio-group'
import { ErrorAlert } from '@/shared/components/ui/error-alert'
import { Calendar } from '@/shared/components/ui/calendar'
import { Divider } from '@/shared/components/ui/divider'
import { Button } from '@/shared/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/shared/components/ui/input'
import { useRouter } from 'next/navigation'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { cn } from '@/shared/lib'
import Link from 'next/link'

import { registerSchema, TRegisterForm } from '../models'
import { register } from '../lib/actions'

export function RegisterForm() {
  const router = useRouter()

  const form = useForm<TRegisterForm>({
    defaultValues: {
      birthdate: undefined,
      confirm_password: '',
      phone_number: '',
      first_name: '',
      last_name: '',
      password: '',
      email: ''
    },
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (values: TRegisterForm) => {
    const { message, status } = await register({
      ...values,
      birthdate: format(values.birthdate, 'yyyy-MM-dd')
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
    <div className="flex w-full max-w-3xl flex-col gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-8">
      <h1 className="mb-3 text-center text-3xl font-semibold">Sign Up</h1>
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

          <div className="flex flex-1 gap-4 lg:gap-10">
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
              name="last_name"
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
              name="first_name"
            />
          </div>

          <FormField
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input type="text" {...field} placeholder="+7 777 777 77 77" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            control={form.control}
            name="phone_number"
          />

          <div className="flex flex-1 gap-4 lg:gap-10">
            <FormField
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel>Birth date</FormLabel>
                  <Popover>
                    <PopoverTrigger className="hover:bg-white" asChild>
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

            <FormField
              render={({ field }) => (
                <FormItem className="flex w-full flex-col">
                  <FormLabel>Who you are?</FormLabel>
                  <RadioGroup
                    className="flex h-full items-center gap-4 lg:gap-10"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="a63e9eff-29b1-4450-9eef-05292f8b7d8c" />
                      </FormControl>
                      <FormLabel className="font-normal">Student</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="7dd23036-5e33-4b5e-aabe-40f9772c97e9" />
                      </FormControl>
                      <FormLabel className="font-normal">Tutor</FormLabel>
                    </FormItem>
                  </RadioGroup>
                  <FormMessage />
                </FormItem>
              )}
              control={form.control}
              name="user_type_id"
            />
          </div>

          <div className="flex flex-1 gap-4 lg:gap-10">
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

          <Button className="mt-4 text-base font-medium" type="submit">
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
        <Link href="/login">Sign In</Link>
      </Button>
    </div>
  )
}
