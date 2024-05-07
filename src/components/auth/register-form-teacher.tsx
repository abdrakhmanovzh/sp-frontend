'use client'

import {
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  Dialog
} from '@/components/ui/dialog'
import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/components/ui/form'
import { TeacherRegisterFormType, teacherRegisterSchema } from '@/models/auth/register'
import { PopoverContent, PopoverTrigger, Popover } from '@/components/ui/popover'
import { CardContent, CardHeader, CardTitle, Card } from '@/components/ui/card'
import { CalendarIcon, ChevronRight, ChevronLeft } from 'lucide-react'
import MultipleSelector from '@/components/ui/multiple-selector'
import { languagesOptions, steps } from '@/lib/auth/constants'
import { ErrorAlert } from '@/components/ui/error-alert'
import { PhoneInput } from '@/components/ui/phone-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar } from '@/components/ui/calendar'
import { Textarea } from '@/components/ui/textarea'
import { Divider } from '@/components/ui/divider'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { register } from '@/lib/auth/actions'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { format } from 'date-fns'
import { useState } from 'react'
import { cn } from '@/lib/cn'
import Link from 'next/link'

export function RegisterFormTeacher() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter()

  const form = useForm<TeacherRegisterFormType>({
    defaultValues: {
      schedule: [
        {
          weekday: 'MONDAY',
          start_hour: '9',
          end_hour: '17',
          status: false
        },
        {
          weekday: 'TUESDAY',
          start_hour: '9',
          end_hour: '17',
          status: false
        },
        {
          weekday: 'WEDNESDAY',
          start_hour: '9',
          end_hour: '17',
          status: false
        },
        {
          weekday: 'THURSDAY',
          start_hour: '9',
          end_hour: '17',
          status: false
        },
        {
          weekday: 'FRIDAY',
          start_hour: '9',
          end_hour: '17',
          status: false
        },
        {
          weekday: 'SATURDAY',
          start_hour: '9',
          end_hour: '17',
          status: false
        },
        {
          weekday: 'SUNDAY',
          start_hour: '9',
          end_hour: '17',
          status: false
        }
      ],
      subject: {
        description: '',
        name: ''
      },
      birthdate: undefined,
      description: '',
      password: '',
      surname: '',
      price: '',
      phone: '',
      email: '',
      name: ''
    },
    resolver: zodResolver(teacherRegisterSchema)
  })

  const onSubmit = async (values: TeacherRegisterFormType) => {
    const { message, status } = await register({
      languages: values.languages?.map((lang) => lang.value).join(','),
      birthday: format(values.birthdate, 'yyyy-MM-dd'),
      phone: Number(values.phone.split('+7')[1]),
      description: values.description,
      password: values.password,
      schedule: values.schedule.filter((day) => day.status),
      surname: values.surname,
      subject: values.subject,
      email: values.email,
      price: values.price,
      name: values.name,
      role: 'teachers'
    })

    if (status === 'error') {
      form.setError('root', {
        message
      })
      return
    }

    router.push('/dashboard')
  }

  type FieldName = keyof TeacherRegisterFormType

  const next = async () => {
    const fields = steps[currentStep].steps
    const output = await form.trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Sign Up | Teacher</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="flex flex-col gap-6 md:gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === 0 && (
              <>
                <div className="flex flex-1 flex-col gap-4 md:flex-row lg:gap-10">
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
                </div>

                <div className="flex flex-1 flex-col gap-4 md:flex-row lg:gap-10">
                  <FormField
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                          <PhoneInput
                            {...field}
                            placeholder="+7 777 777 77 77"
                            defaultCountry="KZ"
                            maxLength={15}
                          />
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
                                {field.value ? (
                                  format(field.value, 'PPP')
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-full p-0" align="start">
                            <Calendar
                              disabled={(date) =>
                                date > new Date() || date < new Date('1900-01-01')
                              }
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
                </div>
              </>
            )}

            {currentStep === 1 && (
              <>
                <div className="flex flex-1 flex-col gap-4 md:flex-row lg:gap-10">
                  <FormField
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} placeholder="Set price" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    control={form.control}
                    name="price"
                  />
                </div>

                <FormField
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Languages</FormLabel>
                      <FormControl>
                        <MultipleSelector
                          defaultOptions={languagesOptions}
                          placeholder="Select languages"
                          onChange={field.onChange}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  control={form.control}
                  name="languages"
                />

                <FormField
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  control={form.control}
                  name="description"
                />

                <FormField
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-2">
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant={'outline'} type="button">
                              {form.getValues('subject.name')
                                ? form.getValues('subject.name')
                                : 'Add a subject'}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add a subject</DialogTitle>
                            </DialogHeader>
                            <FormField
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input type="text" {...field} placeholder="Subject name" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                              control={form.control}
                              name="subject.name"
                            />

                            <FormField
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Description</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      placeholder="Subject description"
                                      className="resize-none"
                                      spellCheck={false}
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                              name="subject.description"
                              control={form.control}
                            />

                            <FormLabel>Schedule</FormLabel>
                            <div className="flex flex-col gap-2 rounded-md border p-4">
                              {form.getValues('schedule').map((day, index) => (
                                <FormField
                                  render={({ field }) => (
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <FormField
                                          render={({ field }) => (
                                            <Switch
                                              onCheckedChange={field.onChange}
                                              checked={field.value}
                                            />
                                          )}
                                          name={`schedule.${index}.status`}
                                          control={form.control}
                                        />
                                        <span>{day.weekday}</span>
                                      </div>

                                      <div className="flex items-center gap-1">
                                        <FormField
                                          render={({ field }) => (
                                            <Input
                                              {...field}
                                              inputMode="numeric"
                                              className="w-10"
                                            />
                                          )}
                                          name={`schedule.${index}.start_hour`}
                                          control={form.control}
                                        />
                                        <Input
                                          inputMode="numeric"
                                          defaultValue={'00'}
                                          className="w-12"
                                        />

                                        <span>-</span>

                                        <FormField
                                          render={({ field }) => (
                                            <Input
                                              {...field}
                                              inputMode="numeric"
                                              className="w-10"
                                            />
                                          )}
                                          name={`schedule.${index}.end_hour`}
                                          control={form.control}
                                        />
                                        <Input
                                          inputMode="numeric"
                                          defaultValue={'00'}
                                          className="w-12"
                                        />
                                      </div>
                                    </div>
                                  )}
                                  name={`schedule.${index}`}
                                  key={day.weekday}
                                />
                              ))}
                            </div>

                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="button">Save</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                  control={form.control}
                  name="subject"
                />

                <Button className="mt-4" type="submit">
                  Create an account
                </Button>

                {form.formState.errors.root && (
                  <ErrorAlert message={form.formState.errors.root.message} />
                )}
              </>
            )}

            <div className="mt-2 flex justify-between">
              <Button
                disabled={currentStep === 0}
                className="gap-2 pl-1 pr-3"
                onClick={prev}
                type="button"
              >
                <ChevronLeft size={20} />
                Back
              </Button>

              <Button
                disabled={currentStep === steps.length - 1}
                className="gap-2 pl-3 pr-1"
                onClick={next}
                type="button"
              >
                Next <ChevronRight size={20} />
              </Button>
            </div>
          </form>
        </Form>

        <Divider text="or" />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Button variant={'secondary'} className="w-full" asChild>
              <Link href="/register/student">Sign Up as a Student</Link>
            </Button>

            <Button variant={'secondary'} className="w-full" asChild>
              <Link href="/register/edu">Sign Up as Education Center</Link>
            </Button>
          </div>

          <Button variant={'outline'} className="w-full" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
