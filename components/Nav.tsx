'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/students', label: 'Students' },
  { href: '/schools', label: 'Schools' },
  { href: '/employers', label: 'Employers' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[var(--color-dark-section-deep)]/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)]'
        : 'bg-[var(--color-dark-section-deep)]'
    } border-b border-white/10`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-icon.png" alt="CareerGuide" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-[var(--color-accent)]'
                    : 'text-white/65 hover:text-white hover:bg-white/8'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--color-accent)]" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://resources.careerguide.network"
              target="_blank"
              className="text-sm font-medium text-[var(--color-accent)] hover:text-white transition-colors duration-200"
            >
              Free Resources
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-white text-[var(--color-dark-section-deep)] hover:bg-[var(--color-accent)] transition-all duration-200 hover:scale-105 hover:shadow-glow-sm"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 border-t border-white/10 pt-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium mb-1 transition-colors ${
                  isActive(link.href)
                    ? 'bg-white/10 text-[var(--color-accent)]'
                    : 'text-white/65 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://resources.careerguide.network"
              target="_blank"
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-[var(--color-accent)] mb-1"
            >
              Free Resources ↗
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2.5 rounded-full text-sm font-semibold bg-white text-[var(--color-dark-section-deep)] text-center hover:bg-[var(--color-accent)] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
