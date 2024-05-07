'use server'

import { revalidatePath } from 'next/cache'
import { studentEndpoint, teacherEndpoint } from '../core/constants'

type AddLessonType = {
  student_id: number
  teacher_id: number
  date: string | undefined
  subject_id: number
  item_id: number | undefined
}

export async function addLesson(values: AddLessonType) {
  const res = await fetch(`${teacherEndpoint}/${values.teacher_id}/lesson`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      student_id: values.student_id,
      teacher_id: values.teacher_id,
      scheduled_date: values.date,
      subject_id: values.subject_id,
      item_id: values.item_id
    })
  })

  revalidatePath('/dashboard')
}

export async function addTeacherToFavorites(teacher_id: number, student_id: number) {
  const res = await fetch(`${studentEndpoint}/${student_id}/favorite`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      teacherId: teacher_id
    })
  })

  revalidatePath('/dashboard')
}
