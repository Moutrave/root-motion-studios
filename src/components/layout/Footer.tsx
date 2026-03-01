import Link from 'next/link'

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Suns of the Abyss', href: '/games/suns-of-the-abyss' },
]

export function Footer() {
  return (
    <footer className="border-t border-void-700 bg-void-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-plasma tracking-widest uppercase text-base mb-2">
              Root Motion Studios
            </p>
            <p className="text-ash-muted text-sm max-w-xs">
              We build worlds. We give back.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ash-muted hover:text-ash text-sm uppercase tracking-wide font-display transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-void-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ash-muted text-xs">
            © {new Date().getFullYear()} Root Motion Studios. All rights reserved.
          </p>
          <p className="text-ash-muted text-xs">
            Crafted with passion — not by committee.
          </p>
        </div>
      </div>
    </footer>
  )
}
