import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Schools & Colleges',
  description: 'CareerLab employability workshops and employer connections for schools and colleges.',
}

const features = [
  { title: 'CareerLab Workshops', desc: '10-part programme covering CVs, interviews, networking, finance, and personal brand. Delivered in your timetable by trained facilitators.' },
  { title: 'Employer Connections', desc: 'We bring in vetted professionals for panels, mock interviews, Q&A sessions and industry insight days — at no cost to you.' },
  { title: 'Work Experience Placements', desc: 'Structured CareerXP placements with employer partners across a range of sectors, fully coordinated by our team.' },
  { title: 'Careers Data & Impact', desc: 'End-of-programme reports showing student progress, engagement metrics and Gatsby benchmark alignment for OFSTED readiness.' },
]

export default function SchoolsPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-[var(--color-dark-section-deep)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[#221060] to-[#3D2A7B]" />
        <img src="/CareerGuide Images/pexels-pixabay-356065.jpg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20" style={{ mixBlendMode: 'overlay' }} />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #7A6AE8 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[var(--color-violet)] mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet)]" />
            For Schools & Colleges
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl leading-[0.95]">
            Careers education{' '}
            <span style={{ background: 'linear-gradient(135deg, #7A6AE8, #C8B8F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              that actually works
            </span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl mb-9 leading-relaxed">
            Practical, employer-backed programmes that prepare your students for the world of work — fully delivered by us, on your timetable.
          </p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">What We Offer</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Everything in one partnership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="border border-[var(--color-border)] rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-violet)] to-[var(--color-brand)] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-extrabold text-[var(--color-body)] uppercase tracking-tight mb-3 group-hover:text-[var(--color-brand)] transition-colors duration-200">{f.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Gatsby Benchmarks</p>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-5">Meeting your statutory obligations</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-7">
                CareerGuide programmes are designed to help schools meet their Gatsby Benchmark requirements — covering employer encounters, workplace visits, and personal guidance touchpoints.
              </p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[var(--color-brand)] text-white font-bold rounded-full hover:bg-[var(--color-brand-hover)] hover:scale-105 transition-all duration-200 text-sm uppercase tracking-wide">
                Request a Programme Overview
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Benchmark 1: Stable Careers Programme', 'Benchmark 4: Linking Curriculum to Careers', 'Benchmark 5: Employer Encounters', 'Benchmark 6: Workplace Experiences'].map((b) => (
                <div key={b} className="bg-white border border-[var(--color-border)] rounded-xl p-4 text-sm font-semibold text-[var(--color-body)] shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[200px] rounded-full opacity-15 animate-pulse-glow"
            style={{ background: 'radial-gradient(ellipse, #7A6AE8 0%, transparent 65%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Ready to bring CareerGuide to your school?</h2>
          <p className="text-white/60 mb-9 max-w-md mx-auto leading-relaxed">Book a 30-minute discovery call and we will design a programme around your students.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
