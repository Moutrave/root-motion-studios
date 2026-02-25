import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SUNS_OF_THE_ABYSS } from '@/lib/placeholder-data'

export function GameGallery() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <FadeInSection>
        <SectionHeading accent="plasma">Screenshots & Art</SectionHeading>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SUNS_OF_THE_ABYSS.screenshots.map((shot, i) => (
          <FadeInSection key={shot.id} delay={i * 0.1}>
            <div className="group relative aspect-video rounded-xl overflow-hidden border border-void-700 bg-void-800 hover:border-plasma/40 transition-colors duration-300">
              {/* Placeholder with gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: i === 0
                    ? 'linear-gradient(135deg, #F97316 0%, #0A0A0F 100%)'
                    : i === 1
                    ? 'linear-gradient(135deg, #7C3AED 0%, #0A0A0F 100%)'
                    : 'linear-gradient(135deg, #06B6D4 0%, #0A0A0F 100%)',
                  opacity: 0.3,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <p className="text-ash-muted text-xs text-center font-display tracking-wide opacity-70">
                  {shot.alt}
                </p>
              </div>
              <div className="absolute inset-0 bg-plasma/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={0.3}>
        <p className="text-center text-ash-muted text-sm mt-8 font-display tracking-wide">
          Full art reveal coming soon — follow us for updates.
        </p>
      </FadeInSection>
    </section>
  )
}
