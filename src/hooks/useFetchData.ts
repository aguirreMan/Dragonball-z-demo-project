import { useState, useEffect } from 'react'

interface FetchDataProps<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useFetchData<T>(url: string ): FetchDataProps<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    const controller = new AbortController()
    async function fetchData() {
      try {
        const response = await fetch(url, { signal: controller.signal })
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const results: T = await response.json()
        setData(results)

      } catch (err: unknown) {
        if(err instanceof Error && err.name !== 'AbortError') {
          setError(err)
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData()
    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}
