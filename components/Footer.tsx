import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-section-deep)] text-white mt-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-icon.png" alt="" aria-hidden="true" className="h-8 w-8" />
              <span className="text-white font-extrabold text-xl tracking-tight">CareerGuide</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Preparing young people for the world of work through mentorship, work experience and real-world skills — in partnership with schools, colleges and employers.
            </p>
            <div className="flex gap-4 mt-5">
              {[
                { label: 'Instagram', href: 'https://www.instagram.com/careerguideuk' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/careerguidenetwork/' },
                { label: 'TikTok', href: 'https://www.tiktok.com/@careerguidenetwork' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-white/40 hover:text-[var(--color-accent)] text-sm transition-colors duration-200 font-medium">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Who We Work With</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/students', label: 'Students' },
                { href: '/schools', label: 'Schools & Colleges' },
                { href: '/employers', label: 'Employers' },
                { href: '/partners', label: 'Partners' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/resources', label: 'Resource Library', external: false },
                { href: 'https://resources.careerguide.network/learning-directory', label: 'Learning Directory', external: true },
                { href: 'https://resources.careerguide.network/hidden-opportunities', label: 'Opportunities', external: true },
                { href: '/about', label: 'About Us', external: false },
                { href: '/contact', label: 'Contact', external: false },
              ].map((l) => (
                <li key={l.href}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer"
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/about" className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200">About</Link>
            <Link href="/contact" className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200">Contact</Link>
            <Link href="/privacy" className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200">Privacy Policy</Link>
            <a href="mailto:hello@careerguide.network" className="text-white/25 hover:text-[var(--color-accent)] text-xs transition-colors duration-200">hello@careerguide.network</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
