import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { STUDIO } from '@/lib/placeholder-data'

type Accent = 'plasma' | 'solar' | 'neon'

const accentText: Record<Accent, string> = {
  plasma: 'text-plasma',
  solar: 'text-solar',
  neon: 'text-neon',
}

export function StudioHighlights() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <FadeInSection>
        <SectionHeading accent="plasma">What We Stand For</SectionHeading>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STUDIO.highlights.map((item, i) => (
          <FadeInSection key={item.title} delay={i * 0.1}>
            <Card accent={item.accent} className="h-full">
              <h3 className={`font-display text-xl mb-3 ${accentText[item.accent]}`}>
                {item.title}
              </h3>
              <p className="text-ash-muted leading-relaxed">{item.description}</p>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
