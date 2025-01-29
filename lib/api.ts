import { useStorageState } from '@/context/useStorageState'

type FetchOptions = {
  method?: string
  headers?: Record<string, string>
  body?: any
  retryCount?: number
}

const refreshToken = async (
  token: string,
  setSession: (value: any) => void,
  retries = 3
): Promise<string> => {
  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_BACKEND_URL}/auth/login`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: token }),
      }
    )

    if (!response.ok) {
      throw new Error('Failed to refresh token')
    }

    const data = await response.json()
    return data.access_token
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      refreshToken(token, setSession, retries - 1)
    }
    setSession(JSON.stringify({}))
    throw new Error('Failed to refresh access token after multiple attempts')
  }
}

export async function api(
  endpoint: string,
  options: FetchOptions = {},
  maxRetries: number = 3,
  addAuthorization: boolean = true
): Promise<Response> {
  const [[isLoading, session], setSession] = useStorageState('session')

  const { access_token, refresh_token } = session
    ? JSON.parse(session)
    : { refresh_token: '', access_token: '' }
  const fetchOptions: RequestInit = {
    method: options.method || 'GET',
    headers: {
      'Content-Type': options.headers?.['Content-Type'] || 'application/json',
      ...(addAuthorization &&
        access_token && { Authorization: `Bearer ${access_token}` }),
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: 'no-cache',
    redirect: 'follow',
  }

  const fetchApi = async (retriesLeft: number): Promise<Response> => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}${endpoint}`,
        fetchOptions
      )

      if (response.ok) {
        return response
      }

      if (response.status === 401) {
        console.log('Token Expired, Trying to refresh!')
        const newToken = await refreshToken(refresh_token, setSession)
        if (newToken) {
          setSession(JSON.stringify({ access_token: newToken }))

          // Update Authorization header with the new token
          fetchOptions.headers = {
            ...fetchOptions.headers,
            Authorization: `Bearer ${newToken}`,
          }

          return await fetchApi(retriesLeft)
        } else {
          throw new Error('Unable to refresh token')
        }
      }

      return response
    } catch (error) {
      console.log(error)
      if (retriesLeft > 0) {
        console.log(`Retrying... attempts left: ${retriesLeft}`)
        return fetchApi(retriesLeft - 1)
      }

      console.log('Maximum retry attempts reached')
      throw error
    }
  }

  return fetchApi(maxRetries)
}
