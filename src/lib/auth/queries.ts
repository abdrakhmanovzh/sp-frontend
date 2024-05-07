import { subjectsEndpoint, studentEndpoint, teacherEndpoint } from '@/lib/core/constants'
import { UserType } from '@/models/users/user'
import { cookies } from 'next/headers'

export async function getUser() {
  const id = JSON.parse(cookies().get('user')?.value ?? '').id

  const role = JSON.parse(cookies().get('user')?.value ?? '').role

  try {
    const response = await fetch(
      `${role === 'STUDENT' ? studentEndpoint : teacherEndpoint}/${id}`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        cache: 'no-store',
        method: 'GET'
      }
    )

    if (!response.ok) {
      return null
    } else {
      const user = (await response.json()) as UserType[]

      return user[0]
    }
  } catch (error) {
    return null
  }
}

export async function getAllSubjects() {
  const response = await fetch(`${subjectsEndpoint}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  return await response.json()
}

export async function getStudentLessons(id: number | undefined) {
  const response = await fetch(`${studentEndpoint}/${id}/lessons`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  return await response.json()
}

export async function getTeacherLessons(id: number | undefined) {
  const response = await fetch(`${teacherEndpoint}/${id}/lessons`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  return await response.json()
}
