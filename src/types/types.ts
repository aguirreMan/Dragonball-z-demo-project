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

export interface FilterOption {
  value: string
  label: string
}

export interface LayoutContext {
  selectedFilter: string
  setSelectedFilter: (value: string) => void
  setFilterOptions: (options: FilterOption[]) => void
}
