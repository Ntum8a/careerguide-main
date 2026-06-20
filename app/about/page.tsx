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
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[var(--color-dark-section)] to-[var(--color-brand)] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[var(--color-accent)] mb-6 uppercase tracking-widest">
            About CareerGuide
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl">
            Built for the young people <span className="text-[var(--color-accent)]">who needed it most</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            CareerGuide exists because too many young people are leaving education without the confidence, connections or knowledge to compete for the careers they deserve.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Our Founder</p>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-5">Jerome Ntumba</h2>
              <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Jerome founded CareerGuide after seeing firsthand how differently young people from different backgrounds are prepared for the world of work — and how much of that gap comes down to information, access and confidence rather than ability.
                </p>
                <p>
                  CareerGuide is his answer to that gap: a practical, no-nonsense approach to employability that works for young people from any background, in partnership with the schools and employers who care about closing it.
                </p>
                <p className="italic text-[var(--color-body)] font-medium">
                  &ldquo;Every young person I have ever worked with has had potential. What they often lack is the knowledge and connections that some people are born into. We are here to change that.&rdquo;
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl h-80 flex items-center justify-center">
              <p className="text-[var(--color-muted)] text-sm">Founder photo coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[var(--color-dark-section-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">What We Stand For</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.name} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="font-extrabold text-[var(--color-accent)] uppercase tracking-tight mb-3">{v.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Want to work with us?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Whether you are a school, employer or partner — we would love to hear from you.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
