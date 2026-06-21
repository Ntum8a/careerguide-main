import Link from 'next/link'

const programmes = [
  {
    name: 'CareerLab',
    desc: '10-part employability workshops delivered in sixth forms and colleges. Practical, hands-on sessions that build the skills, confidence and knowledge students need to compete.',
    href: '/schools',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11m0 0h10m-10 0H5a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2m-5-5v5" />
        <circle cx="12" cy="10" r="2" />
      </svg>
    ),
    audience: 'For Schools & Colleges',
    accent: 'var(--color-violet)',
  },
  {
    name: 'CareerXP',
    desc: 'Immersive work experience delivered in partnership with businesses. Students gain real exposure to professional environments and employers get access to motivated early talent.',
    href: '/employers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
    audience: 'For Employers',
    accent: 'var(--color-accent)',
  },
  {
    name: 'CareerEarn',
    desc: 'Structured pathways to apprenticeships, part-time roles and entry-level opportunities. We guide students to opportunities they can apply for and win.',
    href: '/students',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L8.5 8.5 2 9.27l5 4.87-1.18 6.88L12 17.77l6.18 3.25L17 14.14l5-4.87-6.5-.77L12 2z" />
      </svg>
    ),
    audience: 'For Students',
    accent: '#F59E0B',
  },
  {
    name: 'CareerHub',
    desc: 'A growing network of organisations committed to boosting employability among the next generation — covering mentorship, digital skills, financial literacy and wellbeing.',
    href: '/partners',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    audience: 'For Partners',
    accent: 'var(--color-brand-light)',
  },
]

const audiences = [
  {
    label: 'Students',
    desc: 'Free resources, opportunities and programmes to help you become work-ready.',
    href: '/students',
    cta: 'Explore for students',
    gradient: 'from-[#1A1840] to-[#2D2A6B]',
    accentColor: 'var(--color-accent)',
  },
  {
    label: 'Schools & Colleges',
    desc: 'CareerLab workshops, employer connections and measurable careers outcomes.',
    href: '/schools',
    cta: 'Explore for schools',
    gradient: 'from-[#221060] to-[#3D2A7B]',
    accentColor: 'var(--color-violet)',
  },
  {
    label: 'Employers',
    desc: 'Work experience programmes, talent pipelines and early careers partnerships.',
    href: '/employers',
    cta: 'Explore for employers',
    gradient: 'from-[#0F1535] to-[#1A1840]',
    accentColor: '#60E8DC',
  },
]

const stats = [
  { value: '14–24', label: 'Age group served' },
  { value: '4', label: 'Core programmes' },
  { value: '£0', label: 'Cost to students' },
  { value: 'London', label: 'Based & growing' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center bg-[var(--color-dark-section-deep)] overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[#1E1B55] to-[var(--color-brand)]" />

        {/* Dot grid texture */}
        <div className="absolute inset-0 dot-grid opacity-100" />

        {/* Glow orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #2DCFC1 0%, transparent 65%)' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow delay-300"
          style={{ background: 'radial-gradient(ellipse, #7A6AE8 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[var(--color-accent)] mb-8 uppercase tracking-widest animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              London-based · Schools · Employers · Students
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.95] mb-7 uppercase tracking-tight text-white animate-fade-up delay-75">
              Preparing young people for the{' '}
              <span className="text-gradient-accent">world of work</span>
            </h1>
            <p className="text-lg md:text-xl text-white/65 leading-relaxed mb-10 max-w-xl animate-fade-up delay-150">
              Practical employability programmes, work experience and career resources — connecting education with industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-200">
              <Link href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
                Book a Discovery Call
              </Link>
              <Link href="/students"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-200 text-sm uppercase tracking-wide">
                I&apos;m a Student
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[var(--color-dark-section)] to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-[var(--color-dark-section)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center px-8 py-3 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
                <div className="text-4xl font-extrabold text-[var(--color-accent)] tracking-tight">{s.value}</div>
                <div className="text-xs text-white/55 font-medium uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience split */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {audiences.map((a) => (
          <Link key={a.label} href={a.href}
            className={`relative bg-gradient-to-br ${a.gradient} text-white p-12 group overflow-hidden transition-all duration-300 hover:brightness-110`}>
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `radial-gradient(ellipse at 50% 0%, ${a.accentColor}18 0%, transparent 70%)` }} />

            {/* Accent top border */}
            <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(to right, transparent, ${a.accentColor}, transparent)` }} />

            <div className="relative">
              <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-3 text-white/70 group-hover:text-white transition-colors">{a.label}</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-7 group-hover:text-white/75 transition-colors">{a.desc}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
                style={{ color: a.accentColor }}>
                {a.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* Programmes */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-4">The Complete Approach</h2>
            <p className="text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
              Four integrated programmes that work together — equipping young people with skills, experience and opportunities while creating value for schools and employers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {programmes.map((p) => (
              <Link key={p.name} href={p.href}
                className="group relative border border-[var(--color-border)] rounded-2xl p-8 hover:border-transparent transition-all duration-300 bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 overflow-hidden">
                {/* Accent top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ background: p.accent }} />

                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${p.accent}18`, color: p.accent }}>
                  {p.icon}
                </div>

                <span className="text-xs font-semibold uppercase tracking-widest mb-2 block transition-colors duration-200"
                  style={{ color: p.accent }}>{p.audience}</span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-3 group-hover:text-[var(--color-brand)] transition-colors duration-200">{p.name}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">{p.desc}</p>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  Learn more
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Trusted By</p>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="h-16 px-8 bg-white border border-[var(--color-border)] rounded-2xl flex items-center justify-center shadow-card">
              <img src="/CareerGuide Images/New-City-College-Aramark.jpg" alt="New City College" className="h-9 w-auto object-contain" />
            </div>
            <div className="h-16 px-8 bg-white border border-[var(--color-border)] rounded-2xl flex items-center justify-center shadow-card">
              <img src="/Circl Brand Pack/Circl Logo PNG/Circl Logo – Blue.png" alt="Circl" className="h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Resources crosslink */}
      <section className="bg-[var(--color-dark-section-deep)] relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at 80% 30%, #2DCFC1 0%, transparent 60%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3">Free For Every Student</p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-5 leading-tight">
                CV guides, interview prep, opportunities — all free
              </h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Our resource library gives every young person access to the tools and information that too many never get. No paywalls. No sign-up required.
              </p>
              <Link href="/resources"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
                Browse Free Resources →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'CV Templates', icon: '📄' },
                { label: 'Interview Prep', icon: '🎯' },
                { label: 'AI for Students', icon: '🤖' },
                { label: 'Pay Guide', icon: '💷' },
                { label: 'Foundation Kit', icon: '🧱' },
                { label: 'Cover Letters', icon: '✉️' },
              ].map((r) => (
                <div key={r.label} className="bg-white/6 border border-white/10 rounded-xl p-4 text-sm font-semibold text-white/75 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200 cursor-default flex items-center gap-2.5">
                  <span className="text-base">{r.icon}</span>
                  {r.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social follow */}
      <section className="bg-[var(--color-dark-section-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">Stay in the Loop</p>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white">Follow us for career tips &amp; opportunities</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Instagram', handle: '@careerguideuk', href: 'https://www.instagram.com/careerguideuk' },
                { label: 'TikTok', handle: '@careerguidenetwork', href: 'https://www.tiktok.com/@careerguidenetwork' },
                { label: 'LinkedIn', handle: 'CareerGuide', href: 'https://www.linkedin.com/company/careerguidenetwork/' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-2.5 bg-white/6 border border-white/12 rounded-full hover:bg-[var(--color-accent)] hover:border-transparent transition-all duration-200">
                  <span className="font-bold text-sm text-white">{s.label}</span>
                  <span className="text-white/45 text-xs group-hover:text-white/80 transition-colors hidden sm:block">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--color-dark-section)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] rounded-full opacity-15 animate-pulse-glow"
            style={{ background: 'radial-gradient(ellipse, #2DCFC1 0%, transparent 65%)' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3">Work With Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
            Whether you are a school, employer or partner — book a discovery call and let us build something together.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
