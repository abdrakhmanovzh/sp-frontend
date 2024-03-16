import { BookHeart } from 'lucide-react'

export function LikedPosts() {
  return (
    <div className="flex w-full flex-col gap-10 rounded-xl border border-neutral-200 bg-white p-6">
      <h2 className="text-xl font-medium">Liked posts</h2>

      <div className="flex flex-col items-center gap-2 opacity-45">
        <BookHeart className="text-primary" size={32} />

        <span className="text-sm text-neutral-600">No posts liked</span>
      </div>
    </div>
  )
}
