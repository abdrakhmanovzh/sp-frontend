import { PostType } from '@/models/core/post'

export async function getPosts() {
  const response = await fetch('http://localhost:3000/api/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return (await response.json()) as PostType[]
}
