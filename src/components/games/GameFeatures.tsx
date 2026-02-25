import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SUNS_OF_THE_ABYSS } from '@/lib/placeholder-data'

export function GameFeatures() {
  return (
    <section className="py-24 bg-void-800">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <SectionHeading accent="solar">What Awaits You</SectionHeading>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SUNS_OF_THE_ABYSS.features.map((feature, i) => (
            <FadeInSection key={i} delay={i * 0.08}>
              <div className="flex items-start gap-4 p-5 rounded-lg border border-void-700 bg-void hover:border-solar/30 transition-colors duration-300">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-solar/15 border border-solar/30 flex items-center justify-center font-display text-solar text-xs font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-ash-muted leading-relaxed pt-1">{feature}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
