import Image from 'next/image'
import { FadeInSection } from '@/components/ui/FadeInSection'
import { STUDIO } from '@/lib/placeholder-data'

export function StudioStory() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/SotA_ConcreteRock.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(7,12,18,0.97) 0%, rgba(7,12,18,0.80) 50%, rgba(7,12,18,0.60) 100%)' }} />
      </div>
      <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image placeholder */}
        <FadeInSection>
          <div className="relative aspect-square rounded-full overflow-hidden">
            <Image
              src="/images/logos/Logo_Round_BiColor.png"
              alt="Root Motion Studios"
              fill
              className="object-contain object-center"
            />
          </div>
        </FadeInSection>

        {/* Story text */}
        <FadeInSection delay={0.15}>
          <div className="space-y-6">
            {STUDIO.story.map((paragraph, i) => (
              <p key={i} className="text-ash-muted leading-relaxed text-lg whitespace-pre-line">
                {paragraph}
              </p>
            ))}
            <blockquote className="border-l-2 border-plasma pl-6 mt-8">
              <p className="font-display text-plasma text-lg italic">
                &ldquo;{STUDIO.mission}&rdquo;
              </p>
            </blockquote>
          </div>
        </FadeInSection>
      </div>
    </div>
    </section>
  )
}
