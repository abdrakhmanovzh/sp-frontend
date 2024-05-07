import { PostType } from '@/models/core/post'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/cn'

interface Props {
  post: PostType
}

export function PostCard({ post }: Props) {
  const [currentPost, setCurrentPost] = useState<PostType>(post)

  const handleLike = () => {
    setCurrentPost({ ...currentPost, isLiked: !currentPost.isLiked })
  }

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="relative h-[500px] w-full rounded-md">
            <Image src={post.image} alt={post.title} fill className="rounded-md object-cover" />
          </div>
          <p className="text-lg">{post.content}</p>

          <div className="flex w-full justify-end">
            <Heart
              className={cn(
                currentPost.isLiked && 'fill-primary text-primary',
                'cursor-pointer transition-colors'
              )}
              size={24}
              onClick={handleLike}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
