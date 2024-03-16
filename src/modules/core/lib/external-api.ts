const baseURL = process.env.BASE_URL

export type APIResponse = {
  status: 'success' | 'error'
  message: string
}

export const externalApi = (path: string, options?: RequestInit) => {
  return fetch(`${baseURL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    }
  })
}
