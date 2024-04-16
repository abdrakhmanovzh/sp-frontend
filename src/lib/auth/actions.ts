'use server'

import {
  StudentRegisterRequestType,
  TeacherRegisterRequestType,
  RegisterResponseType
} from '@/models/auth/register'
import { LoginResponseType, LoginRequestType } from '@/models/auth/login'
import { APIResponse } from '@/models/core/api-response'
import { authEndpoint } from '@/lib/core/constants'
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
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values),
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
