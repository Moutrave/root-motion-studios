import { HeroSection } from '@/components/home/HeroSection'
import { StudioHighlights } from '@/components/home/StudioHighlights'
import { FeaturedGame } from '@/components/home/FeaturedGame'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StudioHighlights />
      <FeaturedGame />
    </>
  )
}
