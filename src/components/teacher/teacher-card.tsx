import { GraduationCap, Languages, Star, User } from 'lucide-react'
import { CardContent, Card } from '@/components/ui/card'
import { TeacherType } from '@/models/users/user'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  teacher: TeacherType
}

export function TeacherCard({ teacher }: Props) {
  return (
    <Card className="p-4">
      <CardContent className="flex gap-10 p-0">
        <div className="relative h-28 w-28 shrink-0 rounded-full border">
          <Image src={`/${teacher.id % 6}.png`} className="rounded-full" alt="avatar" fill />
        </div>
        <div className="flex w-64 flex-none flex-col justify-center gap-2">
          <h2 className="mb-2 text-xl font-semibold">
            {teacher.name} {teacher.surname}
          </h2>

          <div className="flex items-center gap-2">
            <GraduationCap size={20} />
            <Badge className="capitalize">{teacher.subjects.at(0)?.name}</Badge>
          </div>

          <div className="flex items-center gap-2">
            <Languages size={20} />
            {teacher.languages?.split(',').map((language) => (
              <Badge className="capitalize" variant={'secondary'} key={language}>
                {language}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-1 items-center">
          <p>{teacher.description}</p>
        </div>

        <div className="flex w-fit flex-col items-end gap-1">
          <div className="flex items-center gap-1">
            <Star className="text-foreground" />
            <span className="text-2xl font-bold text-foreground">
              {teacher.reviews.length > 0
                ? (
                    teacher.reviews.reduce((acc, review) => acc + review.rating, 0) /
                    teacher.reviews.length
                  ).toFixed(1)
                : '-'}
            </span>
          </div>
          <p className="text-xs text-foreground/70">{teacher.reviews.length} reviews</p>
          <Button className="mt-2" asChild>
            <Link href={`/teachers/${teacher.id}`}>View Profile</Link>
          </Button>
        </div>

        <div className="flex w-fit flex-col items-end gap-1">
          <span className="text-2xl font-bold tracking-tighter text-foreground">
            KZT{' '}
            {teacher.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
          </span>
          <p className="text-xs text-foreground/70">50 min lesson</p>
          <Button variant="secondary" className="mt-2">
            Send Message
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
