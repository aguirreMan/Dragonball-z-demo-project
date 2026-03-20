import { Card, CardHeader, CardTitle, CardContent, CardDescription } from './ui/card'
import type { Character } from '@/types/types'

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Card className="group bg-gray-950 border border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,140,0,0.35)] transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950 h-48 flex items-end justify-center">
        <img
          src={character.image}
          alt={character.name}
          className="h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(255,200,0,0.3)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,140,0,0.08)_0%,transparent_70%)]" />
      </div>

      <CardHeader className="pb-1">
        <CardTitle
          className="text-center text-base uppercase tracking-wide"
          style={{
            fontFamily: "'Impact','Arial Black',sans-serif",
            color: '#ffd700',
            textShadow: '0 0 8px rgba(255,140,0,0.7), 2px 2px 0px #000',
          }}
        >
          {character.name}
        </CardTitle>
        <div className="flex justify-center gap-2 mt-1">
          <span className="text-xs bg-orange-500/20 border border-orange-500/40 text-orange-300 px-2 py-0.5 rounded-full">
            {character.race}
          </span>
          <span className="text-xs bg-orange-500/10 border border-orange-500/20 text-orange-400/70 px-2 py-0.5 rounded-full">
            {character.gender}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-orange-400/80">
            <span>Power Level</span>
            <span className="font-mono text-orange-300">{character.ki}</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-gray-800 overflow-hidden">
            <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-orange-600 via-yellow-400 to-yellow-200" />
          </div>
          <div className="flex justify-between text-[10px] text-gray-500">
            <span>MAX</span>
            <span className="font-mono">{character.maxKi}</span>
          </div>
        </div>
        <CardDescription className="text-xs text-gray-400 line-clamp-3 border-t border-orange-500/10 pt-2">
          {character.description}
        </CardDescription>
      </CardContent>

      <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-40 group-hover:opacity-90 transition-opacity" />
    </Card>
  )
}
