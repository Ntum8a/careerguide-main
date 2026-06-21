import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Students',
  description: 'Free career resources, opportunities and programmes for young people aged 14–24.',
}

const resources = [
  { name: 'Foundation Kit', desc: 'Your complete starting point — mindset, CV, LinkedIn and a 90-day plan.', href: 'https://resources.careerguide.network/resources/foundation-kit' },
  { name: 'CV Booster Guide', desc: 'Write a CV that actually gets read. No fluff, no templates that look the same as everyone else.', href: 'https://resources.careerguide.network/resources/cv-booster-guide' },
  { name: 'Interview Cheat Sheet', desc: 'STAR method, top 20 questions, pre-interview checklist. Everything for the night before.', href: 'https://resources.careerguide.network/resources/interview-cheat-sheet' },
  { name: 'AI for Students Playbook', desc: '32 prompts across 8 categories. Use AI the right way without losing your voice.', href: 'https://resources.careerguide.network/resources/ai-for-students-playbook' },
]

const opportunities = [
  { name: 'Apprenticeships', desc: 'Degree to intermediate — find the right level and sector for you.', href: 'https://resources.careerguide.network/hidden-opportunities/apprenticeships' },
  { name: 'Insight Programmes', desc: 'Paid insight days and virtual programmes at top employers.', href: 'https://resources.careerguide.network/hidden-opportunities/insight-programmes' },
  { name: 'Scholarships', desc: 'Funding for sixth form and university across law, STEM, finance and more.', href: 'https://resources.careerguide.network/hidden-opportunities/scholarships' },
  { name: 'Mentoring', desc: '1-to-1 and group mentoring — online and in-person.', href: 'https://resources.careerguide.network/hidden-opportunities/mentoring' },
]

export default function StudentsPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-[var(--color-dark-section-deep)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[#1E1B55] to-[var(--color-brand)]" />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #2DCFC1 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[var(--color-accent)] mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            For Students
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl leading-[0.95]">
            Build the career <span className="text-gradient-accent">you deserve</span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl mb-9 leading-relaxed">
            Free resources, hidden opportunities and programmes to help you go from uncertain to work-ready.
          </p>
          <Link href="https://resources.careerguide.network" target="_blank"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Browse Free Resources →
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">Free Downloads</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Start here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resources.map((r) => (
              <Link key={r.name} href={r.href} target="_blank"
                className="group border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-brand)]/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 bg-white shadow-card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-violet)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                <h3 className="font-extrabold text-[var(--color-body)] mb-2.5 group-hover:text-[var(--color-brand)] transition-colors duration-200 text-lg">{r.name}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-5">{r.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-accent)] group-hover:gap-2.5 transition-all duration-200">
                  Download free
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section-deep)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">Hidden Opportunities</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-10">Opportunities most people never find</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {opportunities.map((o) => (
              <Link key={o.name} href={o.href} target="_blank"
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[var(--color-accent)]/40 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                <h3 className="font-extrabold text-white mb-2.5 text-lg">{o.name}</h3>
                <p className="text-sm text-white/55 leading-relaxed mb-5 group-hover:text-white/70 transition-colors">{o.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-accent)] group-hover:gap-2.5 transition-all duration-200">
                  Browse listings
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
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
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Want to join a CareerLab programme?</h2>
          <p className="text-white/60 mb-9 max-w-md mx-auto leading-relaxed">Ask your school or college to partner with us — or get in touch directly.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
