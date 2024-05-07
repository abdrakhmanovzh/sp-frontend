import { getStudentById } from '@/lib/student/queries'
import { ReviewType } from '@/models/reviews/review'
import { Star } from 'lucide-react'
import { cn } from '@/lib/cn'

interface Props {
  review: ReviewType
}

export async function RatingCard({ review }: Props) {
  const student = await getStudentById(review.student_id)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex w-full items-center justify-between">
        <h2 className="font-bold">
          {student?.name} {student?.surname}
        </h2>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              className={cn('h-5 w-5', review.rating > index && 'fill-foreground')}
              key={index}
            />
          ))}
        </div>
      </div>

      <p>{review.description}</p>
    </div>
  )
}
