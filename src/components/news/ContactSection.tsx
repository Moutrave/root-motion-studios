import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'

export function ContactSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <FadeInSection>
        <SectionHeading accent="solar">Get in Touch</SectionHeading>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <Card accent="solar" className="max-w-xl">
          <p className="text-ash-muted leading-relaxed mb-6">
            Want to chat about our games, pitch a collaboration, or just say
            hello? Reach out directly.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-solar font-display text-sm uppercase tracking-wide w-20">
                Email
              </span>
              <a
                href="mailto:clem@rootmotion.game"
                className="text-ash hover:text-plasma transition-colors"
              >
                clem@rootmotion.game
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-solar font-display text-sm uppercase tracking-wide w-20">
                Bluesky
              </span>
              <a
                href="https://bsky.app/profile/root-motion.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash hover:text-plasma transition-colors"
              >
                @root-motion.bsky.social
              </a>
            </div>
          </div>
        </Card>
      </FadeInSection>
    </section>
  )
}
