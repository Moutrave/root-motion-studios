import type { Metadata } from 'next'
import { Rajdhani, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  variable: '--font-rajdhani',
  weight: ['400', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Root Motion Games',
  description: 'We build worlds. We give back. Indie game studio crafting immersive games with real-world impact.',
  metadataBase: new URL('https://rootmotion.games'),
  openGraph: {
    title: 'Root Motion Games',
    description: 'Indie game studio crafting immersive games with real-world impact.',
    url: 'https://rootmotion.games',
    siteName: 'Root Motion Games',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable}`}>
      <body className="bg-void text-ash antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
