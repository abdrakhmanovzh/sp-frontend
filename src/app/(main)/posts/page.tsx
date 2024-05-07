import { AllPosts } from '@/components/posts/all-posts'
import { getUser } from '@/lib/auth/queries'
import { getPosts } from '@/lib/posts/queries'

export default async function Page() {
  const currentUser = await getUser()
  const posts = await getPosts()

  return <AllPosts posts={posts} currentUser={currentUser} />
}
