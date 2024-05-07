'use server'
import { revalidatePath } from 'next/cache'
import { baseURL } from '../core/constants'

export async function sendMessageToTeacher(
  text: string,
  teacher_id: number | undefined,
  student_id: number | undefined
) {
  const res = await fetch(`${baseURL}/api/teachers/${teacher_id}/message`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      text_message: text,
      teacher_id,
      student_id
    })
  })

  revalidatePath('/messages')
}

export async function sendMessageToStudent(
  text: string,
  teacher_id: number | undefined,
  student_id: number | undefined
) {
  const res = await fetch(`${baseURL}/api/students/${student_id}/message`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      text_message: text,
      teacher_id,
      student_id
    })
  })
  revalidatePath('/messages')
}
