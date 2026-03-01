import { FadeInSection } from '@/components/ui/FadeInSection'
import { Button } from '@/components/ui/Button'
import { SUNS_OF_THE_ABYSS } from '@/lib/placeholder-data'

const INFO = [
  { label: 'Genre', value: SUNS_OF_THE_ABYSS.genre },
  { label: 'Platform', value: SUNS_OF_THE_ABYSS.platform },
  { label: 'Status', value: SUNS_OF_THE_ABYSS.status },
  { label: 'Engine', value: SUNS_OF_THE_ABYSS.engine },
]

export function GameDetails() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <FadeInSection>
        {/* Info strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {INFO.map((item) => (
            <div key={item.label} className="bg-void-800 rounded-lg p-4 border border-void-700">
              <p className="text-ash-muted text-xs font-display tracking-widest uppercase mb-1">
                {item.label}
              </p>
              <p className="text-ash font-display text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Description */}
          <div className="lg:col-span-2">
            <p
              className="text-ash-muted text-lg leading-relaxed"
              dangerouslySetInnerHTML={{ __html: SUNS_OF_THE_ABYSS.description }}
            />
          </div>

          {/* CTA */}
          <div className="bg-void-800 rounded-xl p-6 border border-solar/20">
            <p className="font-display text-solar text-sm tracking-widest uppercase mb-2">
              Wishlist on Steam
            </p>
            <p className="text-ash-muted text-sm mb-6">
              Be the first to know when Suns of the Abyss launches. Wishlisting on Steam helps us enormously.
            </p>
            <Button variant="solar" className="w-full justify-center">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}
