import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark-section-deep)] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="CareerGuide" className="h-8 w-auto mb-4" />
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
                  className="text-white/40 hover:text-white text-sm transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Who We Work With</h3>
            <ul className="space-y-2">
              {[
                { href: '/students', label: 'Students' },
                { href: '/schools', label: 'Schools & Colleges' },
                { href: '/employers', label: 'Employers' },
                { href: '/partners', label: 'Partners' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: 'https://resources.careerguide.network', label: 'Resource Library' },
                { href: 'https://resources.careerguide.network/learning-directory', label: 'Learning Directory' },
                { href: 'https://resources.careerguide.network/hidden-opportunities', label: 'Opportunities' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 hover:text-white text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/about" className="text-white/30 hover:text-white/60 text-xs transition-colors">About</Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-xs transition-colors">Contact</Link>
            <a href="mailto:hello@careerguide.network" className="text-white/30 hover:text-white/60 text-xs transition-colors">hello@careerguide.network</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
