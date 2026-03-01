import Link from 'next/link'
import Image from 'next/image'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { SUNS_OF_THE_ABYSS } from '@/lib/placeholder-data'

export function FeaturedGame() {
  return (
    <section className="py-24 bg-void-800">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <SectionHeading accent="solar">Our First Game</SectionHeading>
        </FadeInSection>

        <FadeInSection delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-35 items-center">
            {/* Game cover */}
            <Link href="/games/suns-of-the-abyss" className="relative aspect-square rounded-full overflow-hidden border border-solar/200 group block">
              <Image
                src="/images/SotA_DysonSphere_A.png"
                alt="Suns of the Abyss"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-solar/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Game info */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-display tracking-widest uppercase bg-solar/10 text-solar border border-solar/30 rounded-full px-3 py-1">
                  {SUNS_OF_THE_ABYSS.genre}
                </span>
                <span className="text-xs font-display tracking-widest uppercase bg-plasma/10 text-plasma border border-plasma/30 rounded-full px-3 py-1">
                  {SUNS_OF_THE_ABYSS.platform}
                </span>
                <span className="text-xs font-display tracking-widest uppercase bg-neon/10 text-neon border border-neon/30 rounded-full px-3 py-1">
                  {SUNS_OF_THE_ABYSS.status}
                </span>
              </div>

              <h3 className="font-display text-3xl lg:text-4xl text-ash mb-3 text-glow-solar">
                {SUNS_OF_THE_ABYSS.title}
              </h3>

              <p className="text-solar font-display text-sm tracking-wide mb-6 uppercase">
                {SUNS_OF_THE_ABYSS.tagline}
              </p>

              <p
                className="text-ash-muted leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: SUNS_OF_THE_ABYSS.description }}
              />

              <Button variant="solar" href="/games/suns-of-the-abyss">
                Learn More
              </Button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
