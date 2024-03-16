'use server'

import { APIResponse, externalApi } from '@/modules/core/lib'
import { cookies } from 'next/headers'
import { TUser } from '@/modules/user'

import { TRegisterResponse, TRegisterRequest, TLoginResponse, TLoginRequest } from '../models'

export async function login(values: TLoginRequest) {
  try {
    const response = await externalApi('/auth/login', {
      body: JSON.stringify(values),
      method: 'POST'
    })

    if (!response.ok) {
      if (response.status === 404) {
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
      const loginResponse = (await response.json()) as TLoginResponse

      cookies().set('token', loginResponse.token.token, {
        httpOnly: true,
        path: '/'
      })

      cookies().set('user', JSON.stringify(loginResponse.user), {
        httpOnly: true,
        path: '/'
      })

      return {
        message: 'login successful',
        status: 'success'
      }
    }
  } catch (error) {
    return {
      message: 'Something went wrong',
      status: 'error'
    }
  }
}

export async function logout(): Promise<APIResponse> {
  cookies().set('token', '')
  cookies().set('user', '')
  return {
    message: 'logout successful',
    status: 'success'
  }
}

export async function register(values: TRegisterRequest) {
  try {
    const response = await externalApi('/auth/register', {
      body: JSON.stringify(values),
      method: 'POST'
    })

    if (!response.ok) {
      if (response.status === 404) {
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
      const registerResponse = (await response.json()) as TRegisterResponse
      console.log(registerResponse)

      cookies().set('token', registerResponse.token.token, {
        httpOnly: true,
        path: '/'
      })

      cookies().set('user', JSON.stringify(registerResponse.user), {
        httpOnly: true,
        path: '/'
      })

      return {
        message: 'register successful',
        status: 'success'
      }
    }
  } catch (error) {
    return {
      message: 'Something went wrong',
      status: 'error'
    }
  }
}

export async function getUser() {
  const user = cookies().get('user')
  return user?.value ? (JSON.parse(user.value) as TUser) : null
}
