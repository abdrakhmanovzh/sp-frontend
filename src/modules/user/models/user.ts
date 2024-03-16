/* eslint-disable no-unused-vars */
export type TUser = {
  user_type_id: TUserRole
  phone_number: string
  first_name: string
  birthdate: string
  last_name: string
  password: string
  email: string
  id: string
}

export enum TUserRole {
  STUDENT = 'a63e9eff-29b1-4450-9eef-05292f8b7d8c',
  TEACHER = '7dd23036-5e33-4b5e-aabe-40f9772c97e9'
}
