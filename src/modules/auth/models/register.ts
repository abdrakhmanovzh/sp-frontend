import { TUser } from '@/modules/user'
import { z } from 'zod'

export const registerSchema = z
  .object({
    user_type_id: z.enum(
      ['a63e9eff-29b1-4450-9eef-05292f8b7d8c', '7dd23036-5e33-4b5e-aabe-40f9772c97e9'],
      {
        required_error: 'Role is required'
      }
    ),
    birthdate: z.date({
      required_error: 'Birth date is required'
    }),
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    confirm_password: z.string().min(1, 'Confirm password is required'),
    phone_number: z.string().min(1, 'Phone number is required'),
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().min(1, 'Last name is required'),
    password: z.string().min(1, 'Password is required')
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'Passwords do not match',
    path: ['confirm_password']
  })

export type TRegisterForm = z.infer<typeof registerSchema>

export type TRegisterRequest = {
  phone_number: string
  user_type_id: string
  first_name: string
  birthdate: string
  last_name: string
  password: string
  email: string
}

export type TRegisterResponse = {
  token: {
    refresh_token: string
    token: string
  }
  user: TUser
}
