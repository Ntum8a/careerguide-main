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
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[var(--color-dark-section)] to-[var(--color-brand)] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[var(--color-accent)] mb-6 uppercase tracking-widest">
            For Schools & Colleges
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl">
            Careers education <span className="text-[var(--color-accent)]">that actually works</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Practical, employer-backed programmes that prepare your students for the world of work — fully delivered by us, on your timetable.
          </p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">What We Offer</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Everything in one partnership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="border border-[var(--color-border)] rounded-2xl p-8">
                <h3 className="font-extrabold text-[var(--color-body)] uppercase tracking-tight mb-3">{f.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Gatsby Benchmarks</p>
              <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-5">Meeting your statutory obligations</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                CareerGuide programmes are designed to help schools meet their Gatsby Benchmark requirements — covering employer encounters, workplace visits, and personal guidance touchpoints.
              </p>
              <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-[var(--color-brand)] text-white font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
                Request a Programme Overview
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Benchmark 1: Stable Careers Programme', 'Benchmark 4: Linking Curriculum to Careers', 'Benchmark 5: Employer Encounters', 'Benchmark 6: Workplace Experiences'].map((b) => (
                <div key={b} className="bg-white border border-[var(--color-border)] rounded-xl p-4 text-sm font-medium text-[var(--color-body)]">{b}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Ready to bring CareerGuide to your school?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Book a 30-minute discovery call and we will design a programme around your students.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  )
}
