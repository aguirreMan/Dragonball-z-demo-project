import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import type { RaceOption } from '@/types/types'
import type { LayoutContext } from '@/types/types'


export default function Layout() {
  const [selectedRace, setSelectedRace] = useState('')
  const [raceOptions, setRaceOptions] = useState<RaceOption[]>([])

  return (
    <div className="min-h-screen bg-black">
      <Header
        selectedRace={selectedRace}
        setSelectedRace={setSelectedRace}
        raceOptions={raceOptions}
      />
      <main className="p-8">
        <Outlet context={{ selectedRace, setSelectedRace, setRaceOptions } as LayoutContext} />
      </main>
    </div>
  )
}
