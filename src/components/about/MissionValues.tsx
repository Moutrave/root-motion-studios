import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { STUDIO } from '@/lib/placeholder-data'

export function MissionValues() {
  return (
    <section className="py-24 bg-void-800">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <SectionHeading accent="solar">What We Believe</SectionHeading>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STUDIO.values.map((value, i) => (
            <FadeInSection key={value.name} delay={i * 0.1}>
              <Card className="flex items-start gap-5 h-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-plasma/10 border border-plasma/30 flex items-center justify-center text-xl text-plasma">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg text-ash mb-2">{value.name}</h3>
                  <p className="text-ash-muted leading-relaxed">{value.description}</p>
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
