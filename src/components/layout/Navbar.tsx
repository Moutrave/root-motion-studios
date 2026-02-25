'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/components/ui/cn'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Suns of the Abyss', href: '/games/suns-of-the-abyss' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/85 backdrop-blur-md border-b border-plasma/20">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo image */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image
            src="/images/logos/Logo_Main_A.png"
            alt="Root Motion Studios"
            width={140}
            height={140}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm tracking-wide uppercase transition-colors font-display font-semibold',
                  pathname === link.href
                    ? 'text-plasma'
                    : 'text-ash-muted hover:text-ash'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Button
          variant="solar"
          href="/games/suns-of-the-abyss"
          className="hidden md:inline-flex text-xs py-2"
        >
          Wishlist Now
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ash-muted hover:text-ash p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={cn('block h-0.5 bg-current transition-transform duration-200', open && 'translate-y-2 rotate-45')} />
            <span className={cn('block h-0.5 bg-current transition-opacity duration-200', open && 'opacity-0')} />
            <span className={cn('block h-0.5 bg-current transition-transform duration-200', open && '-translate-y-2 -rotate-45')} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-void-800 border-t border-plasma/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'text-sm tracking-wide uppercase font-display font-semibold py-2',
                pathname === link.href ? 'text-plasma' : 'text-ash-muted'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="solar" href="/games/suns-of-the-abyss" className="text-xs py-2 w-fit">
            Wishlist Now
          </Button>
        </div>
      )}
    </header>
  )
}
