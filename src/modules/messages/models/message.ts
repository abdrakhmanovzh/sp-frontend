import { z } from 'zod'

export const messageSchema = z.object({
  content: z.string()
})

export type TMessageRequest = z.infer<typeof messageSchema>
