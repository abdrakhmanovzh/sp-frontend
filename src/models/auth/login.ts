import { z } from 'zod'
import { UserType } from '@/models/users/user'

export const loginSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
  role: z.enum(['students', 'teachers'])
})

export type LoginRequestType = z.infer<typeof loginSchema>

export type LoginResponseType = {
  access_token: string
  refresh_token: string
  user: UserType
}
