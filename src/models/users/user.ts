export type UserType = {
  id: number
  email: string
  name: string
  surname: string
  role: 'STUDENT' | 'TEACHER'
  birthday: string
  phone: string
}

export type TeacherType = UserType & {
  languages: string
  price: number
  description: string
}

export type StudentType = UserType
