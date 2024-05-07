import { getTeacherById } from '@/lib/teachers/queries'
import dayjs from 'dayjs'
import { Button } from '../ui/button'
import { TableCell, TableRow } from '../ui/table'
import { getStudentById } from '@/lib/student/queries'
import Link from 'next/link'
import { getUser } from '@/lib/auth/queries'
import { Video } from 'lucide-react'
import { SendMessageDialog } from '../messages/send-message-dialog'

interface Props {
  lesson: any
  role: 'STUDENT' | 'TEACHER'
}

export async function UpcomingLessonsRow({ lesson, role }: Props) {
  const currentUser = await getUser()
  const teacher = await getTeacherById(lesson.teacherId)
  const student = await getStudentById(lesson.studentId)

  return (
    <TableRow>
      <TableCell>
        <h4 className="text-lg font-semibold">{teacher?.subjects[0].name}</h4>
      </TableCell>

      <TableCell>
        <span className="text-foreground">
          {dayjs(lesson.scheduledDate).format('HH:mm dddd DD MMMM YYYY')}
        </span>
      </TableCell>
      <TableCell>
        <span>
          {role === 'STUDENT'
            ? `${teacher?.name} ${teacher?.surname}`
            : `${student?.name} ${student?.surname} `}
        </span>
      </TableCell>

      <TableCell>
        <SendMessageDialog
          senderRole={currentUser?.role}
          student_id={Number(student?.id)}
          teacher_id={Number(teacher?.id)}
        />
      </TableCell>

      <TableCell>
        <Button asChild>
          <Link
            href={`/lesson/${lesson.id}?teacher_id=${teacher?.id}&student_id=${student?.id}&username=${currentUser?.name}`}
            className="flex items-center gap-2"
          >
            <Video size={18} />
            Go to the lesson
          </Link>
        </Button>
      </TableCell>
    </TableRow>
  )
}
