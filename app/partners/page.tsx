import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Join the CareerGuide partner network and help young people access the opportunities they deserve.',
}

const partnerTypes = [
  { title: 'Charities & NPOs', desc: 'Join CareerHub and extend your reach by connecting with the young people we already work with across London.' },
  { title: 'Training Providers', desc: 'Promote your courses, apprenticeships and programmes through our resource library and hidden opportunities directory.' },
  { title: 'Education Institutions', desc: 'University outreach, sixth form taster days, and post-16 transitions — let us connect the dots.' },
  { title: 'Corporate Partners', desc: 'Structured CSR and early careers partnerships that deliver measurable social value and talent pipeline benefits.' },
]

export default function PartnersPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center bg-[var(--color-dark-section-deep)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[var(--color-dark-section)] to-[var(--color-brand)] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[var(--color-accent)] mb-6 uppercase tracking-widest">
            Partners
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl">
            Join the <span className="text-[var(--color-accent)]">CareerHub network</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            We partner with organisations that share our belief that every young person deserves access to career opportunities — regardless of background.
          </p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Enquire About Partnership
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-2">Who We Partner With</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Partnership types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTypes.map((p) => (
              <div key={p.title} className="border border-[var(--color-border)] rounded-2xl p-8">
                <h3 className="font-extrabold text-[var(--color-body)] uppercase tracking-tight mb-3">{p.title}</h3>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners placeholder */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Current Partners</p>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-10">Organisations we work with</h2>
          <div className="flex flex-wrap justify-center gap-6 items-center opacity-50">
            {['New City College Group', 'Circl', 'Partner', 'Partner'].map((name, i) => (
              <div key={i} className="h-12 px-6 bg-[var(--color-border)] rounded-lg flex items-center justify-center text-sm font-semibold text-[var(--color-muted)]">
                {name}
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-muted)] mt-8">Partner logos coming soon</p>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Interested in partnering with us?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">Tell us a bit about your organisation and what you are trying to achieve. We will find the right way to work together.</p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  )
}
