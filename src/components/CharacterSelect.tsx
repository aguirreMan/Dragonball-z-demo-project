import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select'

interface Option {
  value: string
  label: string
}

interface CharacterSelectProps {
  value: string
  onValueChange: (value: string | null) => void
  options: Option[]
  placeholder?: string
  resetFilter: () => void
}

export default function CharacterSelect({
  value,
  onValueChange,
  options,
  placeholder,
  resetFilter
}: CharacterSelectProps) {

  function handleChange(value: string | null) {
    if (value === 'reset') {
      resetFilter()
    } else {
      onValueChange(value)
    }
  }

  return (
    <Select value={value || undefined} onValueChange={handleChange}>
      <SelectTrigger className="w-50 bg-black border-orange-500 text-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-black border border-orange-500 text-white">
        <SelectItem value="reset" className="text-white focus:bg-orange-500 focus:text-black">
          All races
        </SelectItem>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value} className="text-white focus:bg-orange-500 focus:text-black">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
