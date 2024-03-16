import { TUser } from '@/modules/user'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required')
})

export type TLoginRequest = z.infer<typeof loginSchema>

export type TLoginResponse = {
  token: {
    refresh_token: string
    token: string
  }
  user: TUser
}
