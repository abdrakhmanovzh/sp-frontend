import { z } from 'zod'

export type ChatType = {
  id: number
  studentId: number
  teacherId: number
  messages: MessageType[]
}

export type MessageType = {
  id: number
  sender_id: number
  receiver_id: number
  text: string
}

export type CreateChat = {
  student_id: number
  teacher_id: number
}

export const messageSchema = z.object({
  text: z.string()
})

export type MessageFormType = z.infer<typeof messageSchema>
