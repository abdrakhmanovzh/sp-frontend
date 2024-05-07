import { BigCalendar } from '@/components/schedule/big-calendar'
import { getStudentLessons, getTeacherLessons, getUser } from '@/lib/auth/queries'
import dayjs from 'dayjs'

export default async function Page() {
  const user = await getUser()
  const lessons =
    user?.role === 'STUDENT' ? await getStudentLessons(user?.id) : await getTeacherLessons(user?.id)

  const events = lessons.map((lesson: any) => ({
    title: 'Lesson',
    start: dayjs(lesson.scheduledDate).toDate(),
    end: dayjs(lesson.scheduledDate).add(1, 'hour').toDate()
  }))

  return (
    <div className="p-6">
      <BigCalendar events={events} />
    </div>
  )
}
