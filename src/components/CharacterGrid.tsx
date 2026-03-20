import CharacterCard from './CharacterCard'
import type { Character } from '@/types/types'

export default function CharacterGrid({ characters }: { characters: Character[] }) {
  return (
    <div className="space-y-6">
      <h2 className="dbz-heading text-3xl uppercase tracking-widest text-center">
        Characters
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}
