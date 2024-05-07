'use client'

import { cn } from '@/lib/cn'
import { addTeacherToFavorites } from '@/lib/student/actions'
import { Heart } from 'lucide-react'
import { useState } from 'react'

interface Props {
  teacherId: number
  studentId: number
}

export function LikeButton({ studentId, teacherId }: Props) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="absolute right-0 top-2">
      <Heart
        className={cn('cursor-pointer', liked && 'fill-primary')}
        onClick={async () => {
          await addTeacherToFavorites(teacherId, studentId)
          setLiked(!liked)
        }}
      />
    </div>
  )
}
