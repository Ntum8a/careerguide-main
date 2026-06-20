import Link from 'next/link'

const programmes = [
  {
    name: 'CareerLab',
    desc: '10-part employability workshops delivered in sixth forms and colleges. Practical, hands-on sessions that build the skills, confidence and knowledge students need to compete.',
    href: '/schools',
    icon: '🧪',
    audience: 'For Schools & Colleges',
  },
  {
    name: 'CareerXP',
    desc: 'Immersive work experience delivered in partnership with businesses. Students gain real exposure to professional environments and employers get access to motivated early talent.',
    href: '/employers',
    icon: '💼',
    audience: 'For Employers',
  },
  {
    name: 'CareerEarn',
    desc: 'Structured pathways to apprenticeships, part-time roles and entry-level opportunities. We guide students to opportunities they can apply for and win.',
    href: '/students',
    icon: '🚀',
    audience: 'For Students',
  },
  {
    name: 'CareerHub',
    desc: 'A growing network of organisations committed to boosting employability among the next generation — covering mentorship, digital skills, financial literacy and wellbeing.',
    href: '/partners',
    icon: '🤝',
    audience: 'For Partners',
  },
]

const audiences = [
  {
    label: 'Students',
    desc: 'Free resources, opportunities and programmes to help you become work-ready.',
    href: '/students',
    cta: 'Explore for students →',
    bg: 'bg-[var(--color-dark-section)]',
  },
  {
    label: 'Schools & Colleges',
    desc: 'CareerLab workshops, employer connections and measurable careers outcomes.',
    href: '/schools',
    cta: 'Explore for schools →',
    bg: 'bg-[var(--color-brand-dark)]',
  },
  {
    label: 'Employers',
    desc: 'Work experience programmes, talent pipelines and early careers partnerships.',
    href: '/employers',
    cta: 'Explore for employers →',
    bg: 'bg-[var(--color-dark-section-deep)]',
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
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[var(--color-dark-section)] to-[var(--color-brand)] opacity-90" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, #2DCFC1 0%, transparent 60%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[var(--color-accent)] mb-6 uppercase tracking-widest">
              London-based · Schools · Employers · Students
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-none mb-6 uppercase tracking-tight text-white">
              Preparing young people for the{' '}
              <span className="text-[var(--color-accent)]">world of work</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Practical employability programmes, work experience and career resources — connecting education with industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
                Book a Discovery Call
              </Link>
              <Link href="/students"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-wide">
                I&apos;m a Student
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-[var(--color-accent)]">{s.value}</div>
                <div className="text-xs text-white/40 font-medium uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience split */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {audiences.map((a) => (
          <Link key={a.label} href={a.href}
            className={`${a.bg} text-white p-10 group hover:brightness-110 transition-all`}>
            <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-3">{a.label}</h2>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{a.desc}</p>
            <span className="text-[var(--color-accent)] text-sm font-semibold group-hover:underline">{a.cta}</span>
          </Link>
        ))}
      </section>

      {/* Programmes */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[var(--color-body)]">The Complete Approach</h2>
            <p className="text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">
              Four integrated programmes that work together — equipping young people with skills, experience and opportunities while creating value for schools and employers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programmes.map((p) => (
              <Link key={p.name} href={p.href}
                className="group border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-brand)] hover:shadow-lg transition-all bg-white">
                <div className="text-3xl mb-4">{p.icon}</div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">{p.audience}</span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-3 group-hover:text-[var(--color-brand)] transition-colors">{p.name}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof placeholder */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Trusted By</p>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Schools, Employers &amp; Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50">
            {['New City College Group', 'Circl', 'Partner', 'Partner', 'Partner'].map((name, i) => (
              <div key={i} className="h-12 px-6 bg-[var(--color-border)] rounded-lg flex items-center justify-center text-sm font-semibold text-[var(--color-muted)]">
                {name}
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-muted)] mt-8">
            Partner logos coming soon — <Link href="/contact" className="underline">get in touch</Link>
          </p>
        </div>
      </section>

      {/* Resources crosslink */}
      <section className="bg-[var(--color-dark-section-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3">Free For Every Student</p>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-5">
                CV guides, interview prep, opportunities — all free
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Our resource library gives every young person access to the tools and information that too many never get. No paywalls. No sign-up required.
              </p>
              <Link href="https://resources.careerguide.network" target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
                Visit Resource Library →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['CV Templates', 'Interview Prep', 'AI for Students', 'Pay Guide', 'Foundation Kit', 'Cover Letters'].map((r) => (
                <div key={r} className="bg-white/5 border border-white/10 rounded-xl p-4 text-sm font-semibold text-white/70">
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3">Work With Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">Ready to get started?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Whether you are a school, employer or partner — book a discovery call and let us build something together.
          </p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
