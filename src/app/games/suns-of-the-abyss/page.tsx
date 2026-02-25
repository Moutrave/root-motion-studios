import { GameHero } from '@/components/games/GameHero'
import { GameDetails } from '@/components/games/GameDetails'
import { GameFeatures } from '@/components/games/GameFeatures'
import { GameGallery } from '@/components/games/GameGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suns of the Abyss | Root Motion Studios',
  description: 'A narrative action RPG set in a dying solar system. Explore 7 unique star systems, make impossible choices, and uncover the secrets of the abyss.',
}

export default function SunsOfTheAbyssPage() {
  return (
    <>
      <GameHero />
      <GameDetails />
      <GameFeatures />
      <GameGallery />
    </>
  )
}
