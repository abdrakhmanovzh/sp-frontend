import { studentEndpoint, teacherEndpoint } from '@/lib/core/constants'
import { StudentType, TeacherType } from '@/models/users/user'

export async function getStudentById(id: number) {
  const response = await fetch(`${studentEndpoint}/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    method: 'GET'
  })

  if (!response.ok) {
    return null
  } else {
    const teacher = (await response.json()) as StudentType[]

    return teacher[0]
  }
}

export async function getStudentUpcomingLessons(id: number) {
  const response = await fetch(`${studentEndpoint}/${id}/upcoming-lessons`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    method: 'GET'
  })

  return await response.json()
}

export async function getTeacherUpcomingLessons(id: number | undefined) {
  const response = await fetch(`${teacherEndpoint}/${id}/upcoming-lessons`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    method: 'GET'
  })

  return await response.json()
}

export async function getStudentFavoriteTeachers(id: number) {
  const response = await fetch(`${studentEndpoint}/${id}/favorite`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    method: 'GET'
  })

  return (await response.json()) as TeacherType[]
}
