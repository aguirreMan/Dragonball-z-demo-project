import { useParams, Link } from 'react-router-dom'
import { useFetchData } from '@/hooks/useFetchData'
import type { Character } from '@/types/types'

function parseKi(ki: string) {
  return parseFloat(ki.replace(/,/g, ''))
}

function kiBarWidth(ki: string, maxKi: string) {
  return `${((parseKi(ki) / parseKi(maxKi)) * 100).toFixed(0)}%`
}

export default function CharacterPage() {
  const { id } = useParams<{ id: string }>()
  const { data: character, loading, error } = useFetchData<Character>(
    `https://dragonball-api.com/api/characters/${id}`
  )

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 uppercase tracking-widest text-xs font-bold mb-8 transition-colors"
      >
        ← Back to Characters
      </Link>

      {loading && (
        <p className="text-center text-orange-400 animate-pulse text-lg tracking-widest uppercase mt-20">
          Loading...
        </p>
      )}



      {error && (
        <p className="text-center text-red-500 mt-20">{error.message}</p>
      )}

      {character && (
        <div className="max-w-4xl mx-auto">
          {/* Header band */}
          <div className="h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent mb-8 opacity-70" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image panel */}
            <div className="relative bg-linear-to-b from-gray-900 to-gray-950 border border-orange-500/40 rounded-lg overflow-hidden flex items-end justify-center h-[420px] shadow-[0_0_40px_rgba(255,140,0,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,140,0,0.1)_0%,transparent_65%)]" />
              <img
                src={character.image}
                alt={character.name}
                className="h-full object-contain object-bottom drop-shadow-[0_0_24px_rgba(255,200,0,0.4)] z-10"
              />
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500/60" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-500/60" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-orange-500/60" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-orange-500/60" />
            </div>

            {/* Info panel */}
            <div className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <h1
                  className="text-5xl uppercase leading-none"
                  style={{
                    fontFamily: "'Impact','Arial Black',sans-serif",
                    color: '#ffd700',
                    textShadow: '0 0 16px rgba(255,140,0,0.7), 3px 3px 0px #000',
                  }}
                >
                  {character.name}
                </h1>
                <div className="flex gap-2 mt-3">
                  <span className="text-xs bg-orange-500/20 border border-orange-500/40 text-orange-300 px-3 py-1 rounded-full uppercase tracking-wider">
                    {character.race}
                  </span>
                  <span className="text-xs bg-orange-500/10 border border-orange-500/20 text-orange-400/70 px-3 py-1 rounded-full uppercase tracking-wider">
                    {character.gender}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-orange-500/50 to-transparent" />

              {/* Power levels */}
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-orange-500/80 font-bold">
                  Combat Power
                </p>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs uppercase tracking-widest text-orange-400/80">
                    <span>Base Ki</span>
                    <span className="font-mono text-orange-300">{character.ki}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-orange-600 via-yellow-400 to-yellow-200 shadow-[0_0_8px_rgba(255,200,0,0.5)]"
                      style={{ width: kiBarWidth(character.ki, character.maxKi) }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs uppercase tracking-widest text-orange-400/80">
                    <span>Max Ki</span>
                    <span className="font-mono text-yellow-300">{character.maxKi}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-orange-500 via-yellow-300 to-white shadow-[0_0_12px_rgba(255,220,0,0.6)]"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-linear-to-r from-orange-500/50 to-transparent" />

              {/* Description */}
              <div>
                <p className="text-[10px] uppercase tracking-widest text-orange-500/80 font-bold mb-2">
                  Bio
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">{character.description}</p>
              </div>
            </div>
          </div>

          {/* Footer band */}
          <div className="h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent mt-8 opacity-70" />
        </div>
      )}
    </div>
  )
}
