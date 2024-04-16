import { teacherEndpoint } from '@/lib/core/constants'
import { TeacherType } from '@/models/users/user'

export async function getAllTeachers() {
  const response = await fetch(`${teacherEndpoint}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  if (!response.ok) {
    return null
  } else {
    const teachers = (await response.json()) as TeacherType[]

    return teachers
  }
}
