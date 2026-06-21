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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1535] via-[var(--color-dark-section-deep)] to-[#1A1840]" />
        <img src="/CareerGuide Images/pexels-seven11nash-380769.jpg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20" style={{ mixBlendMode: 'overlay' }} />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #60E8DC 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[#60E8DC] mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60E8DC]" />
            For Employers
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl leading-[0.95]">
            Invest in the{' '}
            <span className="text-gradient-accent">next generation</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl mb-9 leading-relaxed">
            Partner with CareerGuide to host work experience, shape young talent, and build your early careers brand — fully supported from day one.
          </p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Become a Partner
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">Partnership Options</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">How you can get involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="border border-[var(--color-border)] rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-brand)] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-extrabold text-[var(--color-body)] uppercase tracking-tight mb-3 group-hover:text-[var(--color-brand)] transition-colors duration-200">{b.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{b.desc}</p>
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
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Let us build a partnership around your goals</h2>
          <p className="text-white/60 mb-9 max-w-md mx-auto leading-relaxed">Every employer partnership is different. Book a call and we will find the right fit.</p>
          <a href="https://calendly.com/hello-careerguide/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Book a Discovery Call
          </a>
        </div>
      </section>
    </>
  )
}
