import { z } from 'zod'
import { UserType } from '@/models/users/user'

const optionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disabled: z.boolean().optional()
})

export const studentRegisterSchema = z
  .object({
    email: z.string().email().min(1, 'Email is required'),
    name: z.string().min(1, 'Name is required'),
    surname: z.string().min(1, 'Surname is required'),
    birthdate: z.date({
      required_error: 'Birth date is required'
    }),
    phone: z.string().min(1, 'Phone number is required'),
    password: z.string().min(1, 'Password is required'),
    confirm_password: z.string().min(1, 'Confirm password is required')
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
  })

export const teacherRegisterSchema = z
  .object({
    email: z.string().email().min(1, 'Email is required'),
    name: z.string().min(1, 'Name is required'),
    surname: z.string().min(1, 'Surname is required'),
    birthdate: z.date({
      required_error: 'Birth date is required'
    }),
    phone: z.string().min(1, 'Phone number is required'),
    password: z.string().min(1, 'Password is required'),
    confirm_password: z.string().min(1, 'Confirm password is required'),
    price: z.string().min(1, 'Price is required'),
    languages: z.array(optionSchema).min(1, 'Languages are required'),
    description: z.string().min(1, 'Description is required')
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
  })

export type StudentRegisterFormType = z.infer<typeof studentRegisterSchema>

export type TeacherRegisterFormType = z.infer<typeof teacherRegisterSchema>

export type StudentRegisterRequestType = {
  email: string
  name: string
  surname: string
  role: 'students' | 'teachers'
  birthday: string
  phone: number
  password: string
}

export type TeacherRegisterRequestType = {
  email: string
  name: string
  surname: string
  role: 'students' | 'teachers'
  birthday: string
  phone: number
  password: string
  price: string
  languages: string
  description: string
}

export type RegisterResponseType = {
  access_token: string
  refresh_token: string
  user?: UserType
}
