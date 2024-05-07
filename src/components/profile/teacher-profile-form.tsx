'use client'

import {
  FormControl,
  FormMessage,
  FormField,
  FormLabel,
  FormItem,
  Form
} from '@/components/ui/form'
import { PopoverContent, PopoverTrigger, Popover } from '@/components/ui/popover'
import { CardContent, CardHeader, CardTitle, Card } from '@/components/ui/card'
import { teacherProfileSchema, TeacherProfile } from '@/models/profile/profile'
import MultipleSelector from '@/components/ui/multiple-selector'
import { SuccessAlert } from '@/components/ui/success-alert'
import { TeacherType, UserType } from '@/models/users/user'
import { ErrorAlert } from '@/components/ui/error-alert'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { editProfile } from '@/lib/profile/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { format, parse } from 'date-fns'
import { cn } from '@/lib/cn'

interface Props {
  teacher: UserType | null
}

const languagesOptions = [
  {
    label: 'English',
    value: 'english'
  },
  {
    label: 'Russian',
    value: 'russian'
  },
  {
    label: 'Kazakh',
    value: 'kazakh'
  }
]

export function TeacherProfileForm({ teacher }: Props) {
  const form = useForm<TeacherProfile>({
    defaultValues: {
      languages: languagesOptions.filter((lang) =>
        (teacher as TeacherType)?.languages?.includes(lang.value)
      ),
      birthdate: parse(teacher!.birthday, 'yyyy-MM-dd', new Date()),
      description: (teacher as TeacherType)?.description,
      phone: '+7' + `${teacher?.phone ?? ''}`,
      price: (teacher as TeacherType)?.price,
      id: teacher?.id.toString(),
      surname: teacher?.surname,
      email: teacher?.email,
      name: teacher?.name
    },
    resolver: zodResolver(teacherProfileSchema)
  })

  const onSubmit = async (values: TeacherProfile) => {
    const { message, status } = await editProfile(
      {
        languages: values.languages?.map((lang) => lang.value).join(','),
        birthday: format(values.birthdate, 'yyyy-MM-dd'),
        phone: Number(values.phone.split('+7')[1]),
        surname: values.surname,
        email: values.email,
        price: values.price,
        name: values.name,
        id: values.id
      },
      'teachers'
    )

    if (status === 'error') {
      form.setError('root', {
        message
      })

      return
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
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

            <div className="flex flex-1 flex-col items-center gap-4 md:flex-row lg:gap-10">
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
            </div>

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

            <Button disabled={!form.formState.isDirty} className="mt-4" type="submit">
              Save changes
            </Button>

            {form.formState.isSubmitSuccessful && (
              <SuccessAlert message="Profile updated successfully" />
            )}

            {form.formState.errors.root && (
              <ErrorAlert message={form.formState.errors.root.message} />
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
