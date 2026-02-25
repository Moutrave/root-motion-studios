import { cn } from './cn'

type Accent = 'plasma' | 'solar' | 'neon'

interface SectionHeadingProps {
  children: React.ReactNode
  accent?: Accent
  className?: string
  centered?: boolean
}

const accentBar: Record<Accent, string> = {
  plasma: 'bg-plasma',
  solar: 'bg-solar',
  neon: 'bg-neon',
}

export function SectionHeading({
  children,
  accent = 'plasma',
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', centered && 'flex flex-col items-center text-center', className)}>
      <h2 className="font-display text-4xl lg:text-5xl text-ash mb-4 leading-tight">
        {children}
      </h2>
      <div className={cn('h-1 w-16 rounded-full', accentBar[accent])} />
    </div>
  )
}
