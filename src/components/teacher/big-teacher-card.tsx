import { CardContent, CardHeader, CardTitle, Card } from '@/components/ui/card'
import { getCurrentUserId } from '@/lib/auth/actions'
import { TeacherType } from '@/models/users/user'
import { Badge } from '@/components/ui/badge'
import { Heart, MessageCircleX } from 'lucide-react'
import { Fragment } from 'react'
import Image from 'next/image'

import { BookLessonForm } from './book-lesson-form'
import { AddReviewForm } from './add-review-form'
import { RatingCard } from './rating-card'
import { Divider } from '../ui/divider'
import { addTeacherToFavorites } from '@/lib/student/actions'
import { LikeButton } from './like-button'

interface Props {
  teacher: TeacherType
}

export async function BigTeacherCard({ teacher }: Props) {
  const studentId = await getCurrentUserId()

  return (
    <div className="grid max-h-full grid-cols-3 grid-rows-2 gap-4">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col">
            <div className="relative flex items-center gap-10 border-b pb-4">
              <div className="relative h-28 w-28 shrink-0 rounded-full border">
                <Image src={`/${teacher.id % 6}.png`} className="rounded-full" alt="avatar" fill />
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-semibold leading-none tracking-tight">
                  {teacher.name} {teacher.surname}
                </h1>

                <h2 className="text-foreground/80">
                  Subject: <Badge>{teacher.subjects.at(0)?.name}</Badge>
                </h2>

                <h2 className="text-foreground/80">
                  Languages:{' '}
                  <span className="space-x-2">
                    {teacher.languages.split(',').map((language) => (
                      <Badge className="capitalize" variant="secondary" key={language}>
                        {language}
                      </Badge>
                    ))}
                  </span>
                </h2>
              </div>

              <LikeButton studentId={Number(studentId)} teacherId={teacher.id} />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">About {teacher.name}</h2>
              <p>{teacher.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative row-span-2">
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {teacher.reviews.length > 0 ? (
              <>
                {teacher.reviews.map((review) => (
                  <Fragment key={review.id}>
                    <RatingCard review={review} />
                    <Divider />
                  </Fragment>
                ))}
              </>
            ) : (
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 opacity-30">
                <MessageCircleX size={32} />
                <p className="text-lg">No reviews yet</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <BookLessonForm
        items={teacher.items}
        student_id={Number(studentId)}
        subject_id={teacher.subjects[0].id}
        teacher_id={teacher.id}
      />

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>Leave a Review</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-1 flex-col gap-4">
            {studentId && (
              <AddReviewForm
                rating={
                  teacher.reviews.length > 0
                    ? teacher.reviews.reduce((acc, review) => acc + review.rating, 0) /
                      teacher.reviews.length
                    : 0
                }
                teacher_id={teacher.id}
                student_id={studentId}
              />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
