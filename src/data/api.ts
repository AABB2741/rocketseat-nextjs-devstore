import { env } from '@/env'

export function api<T = unknown>(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)

  return fetch(url, init) as Promise<
    Omit<Response, 'json'> & {
      json(): Promise<T>
    }
  >
}
