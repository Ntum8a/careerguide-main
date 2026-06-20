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
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[var(--color-dark-section)] to-[var(--color-brand)] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[var(--color-accent)] mb-6 uppercase tracking-widest">
            For Students
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl">
            Build the career <span className="text-[var(--color-accent)]">you deserve</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Free resources, hidden opportunities and programmes to help you go from uncertain to work-ready.
          </p>
          <Link href="https://resources.careerguide.network" target="_blank"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Browse Free Resources →
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">Free Downloads</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Start here</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {resources.map((r) => (
              <Link key={r.name} href={r.href} target="_blank"
                className="group border border-[var(--color-border)] rounded-2xl p-7 hover:border-[var(--color-brand)] hover:shadow-lg transition-all">
                <h3 className="font-bold text-[var(--color-body)] mb-2 group-hover:text-[var(--color-brand)] transition-colors">{r.name}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4">{r.desc}</p>
                <span className="text-sm font-semibold text-[var(--color-accent)]">Download free →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">Hidden Opportunities</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-10">Opportunities most people never find</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {opportunities.map((o) => (
              <Link key={o.name} href={o.href} target="_blank"
                className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-[var(--color-accent)]/50 hover:bg-white/10 transition-all">
                <h3 className="font-bold text-white mb-2">{o.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{o.desc}</p>
                <span className="text-sm font-semibold text-[var(--color-accent)]">Browse listings →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Want to join a CareerLab programme?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Ask your school or college to partner with us — or get in touch directly.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
