import { SubjectType } from '@/models/subjects/subject'
import { ReviewType } from '@/models/reviews/review'

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
  subjects: SubjectType[]
  reviews: ReviewType[]
  items: ScheduleItem[]
}

export type StudentType = UserType

export type ScheduleItem = {
  id: number
  teacher_id: number
  weekday: string
  start_time: string
  end_time: string
  status: string
}
