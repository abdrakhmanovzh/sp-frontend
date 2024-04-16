import { StudentProfileForm } from '@/components/profile/student-profile-form'
import { TeacherProfileForm } from '@/components/profile/teacher-profile-form'
import { getUser } from '@/lib/auth/queries'

export default async function Page() {
  const user = await getUser()

  return (
    <div className="flex flex-1 flex-col gap-4 px-6">
      {user?.role === 'STUDENT' ? (
        <StudentProfileForm student={user} />
      ) : (
        <TeacherProfileForm teacher={user} />
      )}
    </div>
  )
}
