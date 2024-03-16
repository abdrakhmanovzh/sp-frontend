import { PostCard } from '@/modules/posts'

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}
