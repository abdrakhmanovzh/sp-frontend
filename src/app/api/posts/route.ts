import { PostType } from '@/models/core/post'
import { NextRequest } from 'next/server'

let posts = [
  {
    content:
      "Feeling overwhelmed by standardized tests? Do not sweat it! I am here to share some proven test-taking strategies that will boost your confidence and help you ace that exam. Let's tackle time management, conquer tricky questions, and develop a study plan that works for you. #testprep #tutoringtips",
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Conquer Standardized Tests: Proven Strategies for Success',
    id: 1,
    isLiked: false
  },
  {
    content:
      "Is history your least favorite subject? Let's change that! History is full of fascinating stories waiting to be explored. I can help you unravel complex events, understand different cultures, and make connections to the present day. Together, we can turn history into an adventure! #historytutor #learningcanbefun",
    image:
      'https://images.unsplash.com/photo-1540402871140-1e9e22e05299?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Make History Come Alive: Unleash the Fun and Fascination',
    id: 2,
    isLiked: false
  },
  {
    content:
      ' Having trouble wrapping your head around math concepts? No problem! Math is all about building a strong foundation. I can help you break down complex topics into manageable steps, identify areas needing improvement, and develop a personalized learning plan to solidify your understanding. #mathtutoring #learntolovemath',
    image:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: ' Unlock the Magic of Math: Build Confidence and Ace Your Courses',
    id: 3,
    isLiked: false
  }
] satisfies PostType[]

export async function GET() {
  return Response.json(posts)
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const newPost = { ...body, id: posts.length + 1 }
  posts.push(newPost)
  return Response.json(posts)
}
