import Image from 'next/image'
import { SUNS_OF_THE_ABYSS } from '@/lib/placeholder-data'

export function GameHero() {
  return (
    <section className="relative flex items-end overflow-hidden" style={{ minHeight: '95vh' }}>
      {/* Full-bleed concept art — large, going up */}
      <div className="absolute inset-0">
        <Image
          src="/images/SotA_BaseMood_1.png"
          alt="Suns of the Abyss concept art"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
      </div>

      {/* Dark overlay — heavy at the bottom for text, lighter at top to let art breathe */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(7,12,18,0.97) 0%, rgba(7,12,18,0.65) 35%, rgba(7,12,18,0.15) 65%, rgba(7,12,18,0.05) 100%)',
        }}
      />

      {/* Subtle color tint to tie art into brand palette */}
      <div className="absolute inset-0 mix-blend-color-burn opacity-20 bg-gradient-to-t from-solar/30 to-transparent" />

      {/* Content pinned to bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-36 w-full">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 border border-solar/50 rounded-full px-4 py-1.5 mb-8 bg-void/60 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
          <span className="text-solar text-xs font-display tracking-widest uppercase">
            {SUNS_OF_THE_ABYSS.status}
          </span>
        </div>

        <h1
          className="font-display font-bold text-ash leading-none mb-5 text-glow-solar"
          style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
        >
          {SUNS_OF_THE_ABYSS.title}
        </h1>

        <p className="text-solar font-display font-semibold text-lg tracking-widest uppercase mb-3">
          {SUNS_OF_THE_ABYSS.tagline}
        </p>

        <p className="text-ash-muted text-base">
          {SUNS_OF_THE_ABYSS.genre}&nbsp;·&nbsp;{SUNS_OF_THE_ABYSS.platform}&nbsp;·&nbsp;{SUNS_OF_THE_ABYSS.engine}
        </p>
      </div>
    </section>
  )
}
