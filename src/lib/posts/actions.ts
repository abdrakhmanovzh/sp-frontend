'use server'

import { PostFormType } from '@/models/core/post'

export async function createPost(values: PostFormType) {
  const response = await fetch('http://localhost:3000/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })

  return await response.json()
}
