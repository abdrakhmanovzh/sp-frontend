import { z } from 'zod'

const optionSchema = z.object({
  value: z.string(),
  label: z.string()
})

export const studentProfileSchema = z.object({
  id: z.string(),
  email: z.string().email().min(1, 'Email is required'),
  name: z.string().min(1, 'Name is required'),
  surname: z.string().min(1, 'Surname is required'),
  phone: z.string(),
  birthdate: z.date()
})

export const teacherProfileSchema = z.object({
  id: z.string(),
  email: z.string().email().min(1, 'Email is required'),
  name: z.string().min(1, 'Name is required'),
  surname: z.string().min(1, 'Surname is required'),
  phone: z.string(),
  birthdate: z.date(),
  languages: z.array(optionSchema),
  price: z.number().min(1, 'Price is required'),
  description: z.string().min(1, 'Description is required')
})

export type StudentProfile = z.infer<typeof studentProfileSchema>
export type TeacherProfile = z.infer<typeof teacherProfileSchema>

export type StudentProfileEditRequest = {
  id: string
  email: string
  name: string
  surname: string
  phone: number
  birthday: string
}

export type TeacherProfileEditRequest = {
  id: string
  email: string
  name: string
  surname: string
  phone: number
  birthday: string
  languages: string
  price: number
  description: string
}
