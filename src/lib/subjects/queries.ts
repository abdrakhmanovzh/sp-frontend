import { SubjectType } from '@/models/subjects/subject'

import { subjectsEndpoint } from '../core/constants'

export async function getAllSubjects() {
  const response = await fetch(`${subjectsEndpoint}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store',
    method: 'GET'
  })

  if (!response.ok) {
    return null
  } else {
    const teachers = (await response.json()) as SubjectType[]

    return teachers
  }
}
