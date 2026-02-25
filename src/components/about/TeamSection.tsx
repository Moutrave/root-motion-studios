import Image from 'next/image'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { TEAM } from '@/lib/placeholder-data'

const colorMap: Record<string, string> = {
  plasma: 'bg-plasma/20 text-plasma border-plasma/30',
  solar: 'bg-solar/20 text-solar border-solar/30',
  neon: 'bg-neon/20 text-neon border-neon/30',
}

export function TeamSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      {/* Section header with round studio logo */}
      <FadeInSection>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
          <Image
            src="/images/logos/Logo_Round_BiColor.png"
            alt="Root Motion Studios emblem"
            width={80}
            height={80}
            className="w-16 h-16 rounded-full flex-shrink-0"
          />
          <SectionHeading accent="neon" className="mb-0">
            Meet the Team
          </SectionHeading>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TEAM.map((member, i) => (
          <FadeInSection key={member.name} delay={i * 0.1}>
            <Card className="text-center py-10">
              {/* Avatar with round logo watermark for the studio brand */}
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div
                  className={`w-20 h-20 rounded-full border-2 flex items-center justify-center font-display text-xl font-bold ${colorMap[member.color]}`}
                >
                  {member.initials}
                </div>
              </div>
              <h3 className="font-display font-bold text-ash text-xl mb-1">{member.name}</h3>
              <p className="text-ash-muted text-sm font-display tracking-widest uppercase mb-4">
                {member.role}
              </p>
              <p className="text-ash-muted text-sm leading-relaxed">{member.bio}</p>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </section>
  )
}
