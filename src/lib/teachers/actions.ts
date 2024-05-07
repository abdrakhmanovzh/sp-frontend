'use server'

import { ReviewFormType } from '@/models/reviews/review'
import { revalidatePath } from 'next/cache'

import { teacherEndpoint } from '../core/constants'

export async function addReview(values: ReviewFormType, id: string) {
  const response = await fetch(`${teacherEndpoint}/${id}/reviews`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
    method: 'POST'
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
    revalidatePath('/teachers')
    return {
      status: 'success'
    }
  }
}
