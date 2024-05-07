import { z } from 'zod'

export type PostType = {
  id: number
  title: string
  content: string
  image: string
  isLiked: boolean
}

export const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string()
})

export type PostFormType = z.infer<typeof postSchema>
