import { useState, useEffect } from 'react'

interface FetchDataProps<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useFetchData<T>(url : string ): FetchDataProps<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
   async function fetchData() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const results: T = await response.json()
        setData(results)

      } catch (err: unknown) {
        if(err instanceof Error) {
          setError(err)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
