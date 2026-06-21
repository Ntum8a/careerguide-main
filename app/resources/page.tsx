import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Career Resources',
  description: 'Free CV guides, interview prep, AI tools and hidden opportunities for young people aged 14–24. No paywalls, no sign-up required.',
}

const downloads = [
  {
    name: 'Foundation Kit',
    tagline: 'Your complete starting point',
    desc: 'Mindset, CV, LinkedIn and a 90-day action plan all in one kit. Everything you need to go from zero to ready.',
    href: 'https://resources.careerguide.network/resources/foundation-kit',
    image: '/CareerGuide Images/pexels-te-lensfix-380994-1083728.jpg',
    tag: 'Most popular',
    accent: 'var(--color-accent)',
  },
  {
    name: 'CV Booster Guide',
    tagline: 'Write a CV that actually gets read',
    desc: 'No fluff, no templates that look the same as everyone else. A practical guide to standing out on paper.',
    href: 'https://resources.careerguide.network/resources/cv-booster-guide',
    image: '/CareerGuide Images/pexels-pixabay-159497.jpg',
    tag: 'Free download',
    accent: 'var(--color-violet)',
  },
  {
    name: 'Interview Cheat Sheet',
    tagline: 'Everything for the night before',
    desc: 'STAR method, top 20 questions, pre-interview checklist. Walk in confident, walk out with an offer.',
    href: 'https://resources.careerguide.network/resources/interview-cheat-sheet',
    image: '/CareerGuide Images/pexels-markus-winkler-1430818-19856609.jpg',
    tag: 'Free download',
    accent: '#F59E0B',
  },
  {
    name: 'AI for Students Playbook',
    tagline: '32 prompts across 8 categories',
    desc: 'Use AI the right way without losing your voice. Career research, applications and interview prep — all covered.',
    href: 'https://resources.careerguide.network/resources/ai-for-students-playbook',
    image: '/CareerGuide Images/pexels-vojtech-okenka-127162-392018.jpg',
    tag: 'New',
    accent: 'var(--color-brand)',
  },
]

const directories = [
  {
    name: 'Learning Directory',
    desc: 'Courses, certifications and programmes — free and paid — curated for young people trying to build real skills. Filtered by sector, level and cost.',
    href: 'https://resources.careerguide.network/learning-directory',
    image: '/CareerGuide Images/thisisengineering-omrpeqLz6Po-unsplash.jpg',
    cta: 'Browse learning →',
  },
  {
    name: 'Hidden Opportunities',
    desc: 'Apprenticeships, paid insight days, scholarships and mentoring programmes that most young people never hear about. Updated regularly.',
    href: 'https://resources.careerguide.network/hidden-opportunities',
    image: '/CareerGuide Images/pexels-kawserhamid-176342.jpg',
    cta: 'Find opportunities →',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-[var(--color-dark-section-deep)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[#1E1B55] to-[var(--color-brand)]" />
        <img src="/CareerGuide Images/pexels-te-lensfix-380994-1083728.jpg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20" style={{ mixBlendMode: 'overlay' }} />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #2DCFC1 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[var(--color-accent)] mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Free For Every Student
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl leading-[0.95]">
            Everything you need to <span className="text-gradient-accent">compete</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl mb-9 leading-relaxed">
            CV guides, interview prep, AI tools and hidden opportunities — all free, all practical, all built for young people aged 14–24.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="https://resources.careerguide.network" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
              Browse All Resources →
            </a>
          </div>
        </div>
      </section>

      {/* Free downloads */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">Free Downloads</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-3">Start here</h2>
          <p className="text-[var(--color-muted)] mb-12 max-w-xl leading-relaxed">Four tools that every young person should have before applying for anything.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloads.map((r) => (
              <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer"
                className="group border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img src={r.image} alt={r.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white"
                    style={{ backgroundColor: r.accent }}>
                    {r.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: r.accent }}>{r.tagline}</p>
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-3 group-hover:text-[var(--color-brand)] transition-colors duration-200">{r.name}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1 mb-5">{r.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all duration-200" style={{ color: r.accent }}>
                    Download free
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Directories */}
      <section className="bg-[var(--color-dark-section-deep)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">Explore More</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-12">Go deeper</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {directories.map((d) => (
              <a key={d.name} href={d.href} target="_blank" rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                {/* Background image */}
                <div className="absolute inset-0">
                  <img src={d.image} alt="" aria-hidden="true" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)]/90 via-[var(--color-dark-section-deep)]/75 to-[var(--color-dark-section-deep)]/60" />
                </div>
                {/* Content */}
                <div className="relative p-10 h-64 flex flex-col justify-end">
                  <h3 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-3">{d.name}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-5 max-w-sm">{d.desc}</p>
                  <span className="text-[var(--color-accent)] font-bold text-sm group-hover:gap-3 transition-all duration-200 inline-flex items-center gap-1.5">
                    {d.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social follow CTA */}
      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3">Stay in the Loop</p>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">New resources drop every week</h2>
          <p className="text-white/60 mb-10 max-w-md mx-auto leading-relaxed">Follow us for career tips, hidden opportunities and behind-the-scenes content.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Instagram', handle: '@careerguideuk', href: 'https://www.instagram.com/careerguideuk' },
              { label: 'TikTok', handle: '@careerguidenetwork', href: 'https://www.tiktok.com/@careerguidenetwork' },
              { label: 'LinkedIn', handle: 'CareerGuide Network', href: 'https://www.linkedin.com/company/careerguidenetwork/' },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-white/6 border border-white/12 rounded-full hover:bg-[var(--color-accent)] hover:border-transparent transition-all duration-200">
                <span className="font-bold text-sm text-white">{s.label}</span>
                <span className="text-white/50 text-xs group-hover:text-white/80 transition-colors">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--color-dark-section)] relative overflow-hidden border-t border-white/6">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-xl font-extrabold uppercase tracking-tight text-white mb-3">Want us in your school?</h2>
          <p className="text-white/55 mb-7 max-w-md mx-auto leading-relaxed text-sm">If you are a teacher, careers leader or student — get in touch and we will bring CareerGuide to you.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
