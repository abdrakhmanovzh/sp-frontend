import { BigTeacherCard } from '@/components/teacher/big-teacher-card'
import { getTeacherById } from '@/lib/teachers/queries'

export default async function Page({ params }: { params: { id: string } }) {
  const teacher = await getTeacherById(Number(params.id))

  return (
    <div className="grid flex-1 gap-4 px-6 pb-10">
      {teacher && <BigTeacherCard teacher={teacher} />}
    </div>
  )
}
