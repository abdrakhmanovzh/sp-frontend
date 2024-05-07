'use server'

import {
  StudentRegisterRequestType,
  TeacherRegisterRequestType,
  RegisterResponseType
} from '@/models/auth/register'
import { subjectsEndpoint, teacherEndpoint, authEndpoint } from '@/lib/core/constants'
import { LoginResponseType, LoginRequestType } from '@/models/auth/login'
import { APIResponse } from '@/models/core/api-response'
import { SubjectType } from '@/models/subjects/subject'
import { UserType } from '@/models/users/user'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function login(values: LoginRequestType): Promise<APIResponse> {
  const response = await fetch(`${authEndpoint}/${values.role}/authenticate`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
    method: 'POST'
  })

  if (!response.ok) {
    if (response.status === 403) {
      return {
        message: 'Invalid email or password',
        status: 'error'
      }
    }

    return {
      message: 'Something went wrong',
      status: 'error'
    }
  } else {
    const loginResponse = (await response.json()) as LoginResponseType

    cookies().set('token', loginResponse.access_token, {
      httpOnly: true,
      path: '/'
    })

    cookies().set('user', JSON.stringify(loginResponse.user), {
      httpOnly: true,
      path: '/'
    })

    return {
      status: 'success'
    }
  }
}

export async function logout() {
  cookies().set('token', '')
  cookies().set('user', '')

  redirect('/')
}

export async function register(
  values: StudentRegisterRequestType | TeacherRegisterRequestType
): Promise<APIResponse> {
  const response = await fetch(`${authEndpoint}/${values.role}/register`, {
    body:
      values.role === 'students'
        ? JSON.stringify(values)
        : JSON.stringify({
            scheduleRequest: (values as TeacherRegisterRequestType).schedule,
            description: (values as TeacherRegisterRequestType).description,
            languages: (values as TeacherRegisterRequestType).languages,
            password: (values as TeacherRegisterRequestType).password,
            birthday: (values as TeacherRegisterRequestType).birthday,
            surname: (values as TeacherRegisterRequestType).surname,
            email: (values as TeacherRegisterRequestType).email,
            phone: (values as TeacherRegisterRequestType).phone,
            price: (values as TeacherRegisterRequestType).price,
            name: (values as TeacherRegisterRequestType).name
          }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })

  if (!response.ok) {
    if (response.status === 404) {
      return {
        message: 'Invalid data provided',
        status: 'error'
      }
    }

    return {
      message: 'Something went wrong',
      status: 'error'
    }
  } else {
    const registerResponse = (await response.json()) as RegisterResponseType

    if (values.role === 'teachers') {
      const response = await fetch(`${subjectsEndpoint}`, {
        body: JSON.stringify((values as TeacherRegisterRequestType).subject),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })

      const subject = (await response.json()) as SubjectType

      await fetch(`${teacherEndpoint}/subjects`, {
        body: JSON.stringify({
          teacher_id: registerResponse.user?.id,
          subject_id: subject.id
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    }

    cookies().set('token', registerResponse.access_token, {
      httpOnly: true,
      path: '/'
    })

    cookies().set('user', JSON.stringify(registerResponse.user), {
      httpOnly: true,
      path: '/'
    })

    return {
      status: 'success'
    }
  }
}

export async function getCurrentUserId() {
  const userCookie = cookies().get('user')

  if (!userCookie?.value) {
    return null
  }

  const user = JSON.parse(userCookie.value) as UserType

  return user.id
}
