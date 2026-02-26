import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-x-clip">
      {/* Solid dark base */}
      <div className="absolute inset-0 bg-void" />

      {/* Logo as large background watermark — bleeds into next section */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center translate-y-[55%]">
        <Image
          src="/images/logos/Logo_Image_Raw.png"
          alt=""
          width={1600}
          height={1600}
          className="w-[110%] h-auto opacity-20 block"
          priority
        />
      </div>

      {/* Warm glow from brand colors */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(0,146,175,0.10) 0%, rgba(220,106,10,0.05) 40%, transparent 70%)',
        }}
      />

      {/* Floating ambient orbs — brand colors */}
      <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-plasma/8 rounded-full blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/5 w-56 h-56 bg-solar/8 rounded-full blur-3xl pointer-events-none"
        style={{ animation: 'float 4s ease-in-out infinite 1.5s' }}
      />

      {/* Content — centered */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-8 w-full text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 border border-plasma/40 rounded-full px-4 py-1.5 mb-8 bg-plasma/10">
          <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
          <span className="text-ash-muted text-xs font-display tracking-widest uppercase">
            Now in Development — Suns of the Abyss
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-ash mb-6 leading-tight">
          We Build{' '}
          <span className="text-plasma text-glow-plasma">Worlds.</span>
          <br />
          We Give{' '}
          <span className="text-solar text-glow-solar">Back.</span>
        </h1>

        <p className="text-ash-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Root Motion Studios is a one person game development studio crafting
          immersive games with real-world impact. <br/><br/>
            
          Our first game is a first-person underwater playground where you get
          to see the world from the points of view of a set of quirky marine creatures, all possessing their own senses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/games/suns-of-the-abyss">
            Our First Game
          </Button>
          <Button variant="secondary" href="/about">
            Our Story
          </Button>
        </div>
      </div>


    </section>
  )
}
