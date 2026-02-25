import Link from 'next/link'
import { cn } from './cn'

type ButtonVariant = 'primary' | 'secondary' | 'solar'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  href?: string
  className?: string
  children: React.ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-plasma text-white hover:bg-plasma-light shadow-lg shadow-plasma/30 animate-glow-pulse',
  secondary:
    'border border-plasma text-plasma hover:bg-plasma/10 transition-colors',
  solar:
    'bg-solar text-void font-bold hover:bg-solar-light shadow-lg shadow-solar/30 transition-colors',
}

export function Button({
  variant = 'primary',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center px-6 py-3 rounded-md',
    'font-display text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer',
    variants[variant],
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
