import { SectionHeading } from '@/components/ui/SectionHeading'
import { StudioStory } from '@/components/about/StudioStory'
import { MissionValues } from '@/components/about/MissionValues'
import { TeamSection } from '@/components/about/TeamSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Root Motion Studios',
  description: 'Learn about Root Motion Studios — who we are, what we believe, and who makes the magic happen.',
}

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-8 max-w-7xl mx-auto px-6">
        <SectionHeading accent="plasma">Our Story</SectionHeading>
        <p className="text-ash-muted text-lg max-w-2xl">
          We&apos;re a small team with a big belief: that games can be fun, immersive AND inspire people. Here&apos;s how who we are and want to do.
        </p>
      </section>

      <StudioStory />
      <MissionValues />
      <TeamSection />
    </>
  )
}
