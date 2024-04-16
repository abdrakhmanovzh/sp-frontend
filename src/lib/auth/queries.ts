import { studentEndpoint, teacherEndpoint } from '@/lib/core/constants'
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
