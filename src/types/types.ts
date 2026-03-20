export interface Character {
  id: number
  name: string
  ki: string
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
}

export interface RaceOption {
  value: string
  label: string
}

export interface LayoutContext {
  selectedRace: string
  setSelectedRace: (race: string) => void
  setRaceOptions: (options: RaceOption[]) => void
}
