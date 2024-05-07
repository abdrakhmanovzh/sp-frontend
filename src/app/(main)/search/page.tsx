import { TeachersFilterForm } from '@/components/teacher/teachers-filter-form'
import { getAllTeachers } from '@/lib/teachers/queries'
import { getAllSubjects } from '@/lib/auth/queries'

export default async function Page() {
  const teachers = await getAllTeachers()
  const subjects = await getAllSubjects()

  return (
    <>{teachers && subjects && <TeachersFilterForm subjects={subjects} teachers={teachers} />}</>
  )
}
