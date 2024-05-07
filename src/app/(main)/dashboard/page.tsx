import { FavouriteTeachersCard } from '@/components/dashboard/favourite-teachers-card'
import { UpcomingLessonsCard } from '@/components/dashboard/upcoming-lessons-card'
import { getUser } from '@/lib/auth/queries'
import { getStudentUpcomingLessons, getTeacherUpcomingLessons } from '@/lib/student/queries'

export default async function Page() {
  const user = await getUser()
  const upcomingLessons =
    user?.role === 'STUDENT'
      ? await getStudentUpcomingLessons(user?.id)
      : await getTeacherUpcomingLessons(user?.id)

  return (
    <div className="flex flex-col gap-6 px-6">
      {user && <UpcomingLessonsCard role={user.role} lessons={upcomingLessons} />}

      {user && user.role === 'STUDENT' && <FavouriteTeachersCard id={user.id} />}
    </div>
  )
}
