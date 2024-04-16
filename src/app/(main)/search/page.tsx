import { TeacherCard } from '@/components/teacher/teacher-card'
import { getAllTeachers } from '@/lib/teachers/queries'

export default async function Page() {
  const teachers = await getAllTeachers()

  return (
    <div className="flex flex-1 flex-col gap-4 px-6">
      {teachers?.map((teacher) => <TeacherCard teacher={teacher} key={teacher.id} />)}
    </div>
  )
}
