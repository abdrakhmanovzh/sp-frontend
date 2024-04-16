'use server'

import { StudentProfileEditRequest, TeacherProfileEditRequest } from '@/models/profile/profile'
import { APIResponse } from '@/models/core/api-response'
import { baseURL } from '@/lib/core/constants'
import { revalidatePath } from 'next/cache'

export async function editProfile(
  values: StudentProfileEditRequest | TeacherProfileEditRequest,
  role: 'students' | 'teachers'
): Promise<APIResponse> {
  const response = await fetch(`${baseURL}/api/${role}/${values.id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
    method: 'PUT'
  })

  if (!response.ok) {
    if (response.status === 403) {
      return {
        message: 'Invalid values',
        status: 'error'
      }
    }

    return {
      message: 'Something went wrong',
      status: 'error'
    }
  } else {
    revalidatePath('/profile')
    return {
      status: 'success'
    }
  }
}
