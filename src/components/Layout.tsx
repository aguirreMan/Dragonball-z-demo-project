import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import type { FilterOption, LayoutContext } from '@/types/types'


export default function Layout() {
  const [selectedFilter, setSelectedFilter] = useState('')
  const [filterOptions, setFilterOptions] = useState<FilterOption[]>([])
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-black">
      <Header
        selectedRace={selectedFilter}
        setSelectedRace={setSelectedFilter}
        raceOptions={filterOptions}
      />
      <main key={pathname} className="p-8">
        <Outlet context={{ selectedFilter, setSelectedFilter, setFilterOptions } as LayoutContext} />
      </main>
    </div>
  )
}
