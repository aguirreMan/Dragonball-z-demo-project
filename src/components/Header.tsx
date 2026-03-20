import { Link, NavLink } from 'react-router-dom'
import CharacterSelect from './CharacterSelect'

const navLinks = [
  { to: '/', label: 'Characters' },
  { to: '/planets', label: 'Planets' },
  { to: '/transformations', label: 'Transformations' },
]

interface RaceOption {
  value: string
  label: string
}

interface HeaderProps {
  selectedRace: string
  setSelectedRace: (race: string) => void
  raceOptions: RaceOption[]
}

export default function Header({ selectedRace, setSelectedRace, raceOptions }: HeaderProps) {
  return (
    <header className="w-full bg-black border-b-4 border-orange-500 px-8 py-4 flex items-center gap-12">
      <h2 className="dbz-heading text-5xl uppercase tracking-widest shrink-0">
        <Link to="/">Dragon Ball Z</Link>
      </h2>
      <nav className="flex gap-6">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `text-lg font-bold uppercase tracking-wide transition-colors ${
                isActive ? 'text-orange-500' : 'text-gray-400 hover:text-orange-400'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="ml-auto">
        <CharacterSelect
          value={selectedRace}
          onValueChange={(val) => setSelectedRace(val ?? '')}
          options={raceOptions}
          placeholder="Filter by race"
          resetFilter={() => setSelectedRace('')}
        />
      </div>
    </header>
  )
}
