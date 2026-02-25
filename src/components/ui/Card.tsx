import { cn } from './cn'

type AccentColor = 'plasma' | 'solar' | 'neon'

interface CardProps {
  children: React.ReactNode
  className?: string
  accent?: AccentColor
}

const accentTop: Record<AccentColor, string> = {
  plasma: 'border-t-plasma',
  solar: 'border-t-solar',
  neon: 'border-t-neon',
}

export function Card({ children, className, accent }: CardProps) {
  return (
    <div
      className={cn(
        'bg-void-800 rounded-lg p-6 border border-void-700',
        accent && `border-t-2 ${accentTop[accent]}`,
        className
      )}
    >
      {children}
    </div>
  )
}
