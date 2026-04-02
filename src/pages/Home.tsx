import { useMemo, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { useFetchData } from '@/hooks/useFetchData'
import CharacterGrid from '@/components/CharacterGrid'
import type { Character, LayoutContext } from '@/types/types'

interface CharacterResponse {
  items: Character[]
}

export default function Home() {
  const { selectedFilter, setFilterOptions } = useOutletContext<LayoutContext>()
  const { data, loading, error } = useFetchData<CharacterResponse>('https://dragonball-api.com/api/characters?limit=58')

  useEffect(() => {
    if (!data) return
    const unique = [...new Set(data.items.map(c => c.race))].sort()
    setFilterOptions(unique.map(r => ({ value: r, label: r })))
  }, [data, setFilterOptions])

  const filtered = useMemo(() => {
    if (!data) return []
    if (!selectedFilter) return data.items
    return data.items.filter(c => c.race === selectedFilter)
  }, [data, selectedFilter])

  return (
    <div className="p-6">
      {loading && <p className="text-center text-orange-400 animate-pulse text-lg tracking-widest uppercase">Loading...</p>}
      {error && <p className="text-center text-red-500">{error.message}</p>}
      {data && <CharacterGrid characters={filtered} />}
    </div>
  )
}
