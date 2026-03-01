import { FadeInSection } from '@/components/ui/FadeInSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { SubscribeForm } from '@/components/news/SubscribeForm'

export function ContactSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <FadeInSection>
        <SectionHeading accent="solar">Stay in the Loop</SectionHeading>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        <FadeInSection delay={0.1}>
          <Card accent="plasma" className="h-full">
            <h3 className="font-display text-lg text-ash mb-3">Newsletter</h3>
            <p className="text-ash-muted text-sm leading-relaxed mb-5">
              Get dev logs and studio updates straight to your inbox.
            </p>
            <SubscribeForm />
          </Card>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <Card accent="solar" className="h-full">
            <h3 className="font-display text-lg text-ash mb-3">Get in Touch</h3>
            <p className="text-ash-muted text-sm leading-relaxed mb-5">
              Want to chat, collaborate, or just say hello?
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-solar font-display text-sm uppercase tracking-wide w-20">
                  Email
                </span>
                <a
                  href="mailto:clem@rootmotion.game"
                  className="text-ash hover:text-plasma transition-colors text-sm"
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
                  className="text-ash hover:text-plasma transition-colors text-sm"
                >
                  @root-motion.bsky.social
                </a>
              </div>
            </div>
          </Card>
        </FadeInSection>
      </div>
    </section>
  )
}
