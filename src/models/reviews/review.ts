import { z } from 'zod'

export const reviewSchema = z.object({
  rating: z.string(),
  description: z.string(),
  student_id: z.number(),
  teacher_id: z.number()
})

export type ReviewFormType = z.infer<typeof reviewSchema>

export type ReviewType = {
  id: number
  rating: number
  description: string
  student_id: number
  teacher_id: number
  subject_id: number
}
