import { GraduationCap, Languages, User } from 'lucide-react'
import { CardContent, Card } from '@/components/ui/card'
import { TeacherType } from '@/models/users/user'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface Props {
  teacher: TeacherType
}

export function TeacherCard({ teacher }: Props) {
  return (
    <Card>
      <CardContent className="flex gap-10 pt-6">
        <div className="relative h-28 w-28 rounded-full border">
          <Image src={`/${teacher.id % 6}.png`} className="rounded-full" alt="avatar" fill />
        </div>
        <div className="flex flex-none flex-col gap-2">
          <h2 className="mb-2 text-xl font-semibold">
            {teacher.name} {teacher.surname}
          </h2>

          <div className="flex items-center gap-2">
            <GraduationCap size={20} />
          </div>

          <div className="flex items-center gap-2">
            <User size={20} />
            <span className="text-sm font-medium text-neutral-700">? active students</span>
          </div>

          <div className="flex items-center gap-2">
            <Languages size={20} />
            {teacher.languages?.split(',').map((language) => (
              <Badge className="capitalize" key={language}>
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
