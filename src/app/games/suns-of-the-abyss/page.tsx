import { GameHero } from '@/components/games/GameHero'
import { GameDetails } from '@/components/games/GameDetails'
import { GameFeatures } from '@/components/games/GameFeatures'
import { GameGallery } from '@/components/games/GameGallery'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Suns of the Abyss | Root Motion Games',
  description: 'A first-person underwater exploration playground where forgotten technology meets strange, living creatures who lend you their senses and special skills.',
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
