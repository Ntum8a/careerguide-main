import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story behind CareerGuide — who we are, why we exist, and how we work.',
}

const values = [
  { name: 'Access', desc: 'Every young person — regardless of background — deserves access to careers support that is practical, honest and useful.' },
  { name: 'Honesty', desc: 'We tell students the truth about the job market, what employers actually look for, and how to compete.' },
  { name: 'Action', desc: 'Knowledge without action is decoration. Everything we do is designed to get young people moving forward.' },
  { name: 'Partnership', desc: 'We succeed when schools, employers and communities work together around the young person.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-[var(--color-dark-section-deep)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[#1E1B55] to-[var(--color-brand)]" />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-10 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #7A6AE8 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[var(--color-accent)] mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            About CareerGuide
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl leading-[0.95]">
            Built for the young people{' '}
            <span className="text-gradient-accent">who needed it most</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl leading-relaxed">
            CareerGuide exists because too many young people are leaving education without the confidence, connections or knowledge to compete for the careers they deserve.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Our Founder</p>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-6">Jerome Ntumba</h2>
              <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Jerome founded CareerGuide after seeing firsthand how differently young people from different backgrounds are prepared for the world of work — and how much of that gap comes down to information, access and confidence rather than ability.
                </p>
                <p>
                  CareerGuide is his answer to that gap: a practical, no-nonsense approach to employability that works for young people from any background, in partnership with the schools and employers who care about closing it.
                </p>
                <blockquote className="border-l-2 border-[var(--color-accent)] pl-5 italic text-[var(--color-body)] font-medium py-1">
                  &ldquo;Every young person I have ever worked with has had potential. What they often lack is the knowledge and connections that some people are born into. We are here to change that.&rdquo;
                </blockquote>
              </div>
            </div>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-80 flex items-center justify-center shadow-card">
              <p className="text-[var(--color-muted)] text-sm">Founder photo coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-dark-section-deep)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">What We Stand For</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-[var(--color-accent)]/30 hover:-translate-y-0.5 transition-all duration-300 group">
                <h3 className="font-extrabold text-[var(--color-accent)] uppercase tracking-tight mb-3 text-lg">{v.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[200px] rounded-full opacity-15 animate-pulse-glow"
            style={{ background: 'radial-gradient(ellipse, #2DCFC1 0%, transparent 65%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Want to work with us?</h2>
          <p className="text-white/60 mb-9 max-w-md mx-auto leading-relaxed">Whether you are a school, employer or partner — we would love to hear from you.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
