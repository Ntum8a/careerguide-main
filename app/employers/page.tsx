import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Employers',
  description: 'Partner with CareerGuide to deliver work experience, access early talent, and invest in the next generation.',
}

const benefits = [
  { title: 'CareerXP Hosting', desc: 'Host structured, supported work experience for motivated students. We handle all the coordination — you focus on the experience.' },
  { title: 'Early Talent Pipeline', desc: 'Get first-mover access to a pipeline of young people before they enter the graduate market. Build brand loyalty early.' },
  { title: 'Panel & Insight Sessions', desc: 'Speak at CareerLab workshops, virtual panels, or industry insight days. Low commitment, high impact.' },
  { title: 'CSR & Social Value', desc: 'Demonstrate tangible community investment with measurable outcomes — supported by our impact reports.' },
]

export default function EmployersPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-[var(--color-dark-section-deep)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[var(--color-dark-section)] to-[var(--color-brand)] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[var(--color-accent)] mb-6 uppercase tracking-widest">
            For Employers
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl">
            Invest in the <span className="text-[var(--color-accent)]">next generation</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Partner with CareerGuide to host work experience, shape young talent, and build your early careers brand — fully supported from day one.
          </p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Become a Partner
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">Partnership Options</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">How you can get involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="border border-[var(--color-border)] rounded-2xl p-8">
                <h3 className="font-extrabold text-[var(--color-body)] uppercase tracking-tight mb-3">{b.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Let us build a partnership around your goals</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Every employer partnership is different. Book a call and we will find the right fit.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
