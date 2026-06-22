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
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[#1A1840] to-[#2D2A6B]" />
        <img src="/CareerGuide Images/pexels-kawserhamid-176342.jpg" alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20" style={{ mixBlendMode: 'overlay' }} />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #C8B8F5 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[var(--color-brand-light)] mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-light)]" />
            Partners
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 max-w-2xl leading-[0.95]">
            Join the{' '}
            <span style={{ background: 'linear-gradient(135deg, #C8B8F5, #7A6AE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              CareerHub network
            </span>
          </h1>
          <p className="text-white/65 text-lg max-w-xl mb-9 leading-relaxed">
            We partner with organisations that share our belief that every young person deserves access to career opportunities — regardless of background.
          </p>
          <Link href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Enquire About Partnership
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)] relative overflow-hidden">
        <div className="absolute inset-0 dot-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">Who We Partner With</p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white mb-10">Partnership types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partnerTypes.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-[var(--color-accent)]/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-brand)] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-extrabold text-white uppercase tracking-tight mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-200">{p.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners */}
      <section className="bg-[var(--color-dark-section-deep)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] mb-3">Current Partners</p>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-10">Organisations we work with</h2>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="h-16 px-8 bg-white/10 backdrop-blur border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white/15 transition-all duration-300">
              <img src="/ncc-logo-white-nobg.png" alt="New City College" className="h-8 w-auto object-contain" />
            </div>
            <div className="h-16 px-8 bg-white/10 backdrop-blur border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white/15 transition-all duration-300">
              <img src="/circl-logo-white.png" alt="Circl" className="h-8 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-section)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[200px] rounded-full opacity-15 animate-pulse-glow"
            style={{ background: 'radial-gradient(ellipse, #C8B8F5 0%, transparent 65%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white mb-4">Interested in partnering with us?</h2>
          <p className="text-white/60 mb-9 max-w-md mx-auto leading-relaxed">Tell us a bit about your organisation and what you are trying to achieve. We will find the right way to work together.</p>
          <a href="https://calendly.com/hello-careerguide/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-[var(--color-dark-section-deep)] font-bold rounded-full hover:bg-[var(--color-accent-dark)] hover:scale-105 hover:shadow-glow transition-all duration-200 text-sm uppercase tracking-wide">
            Book a Discovery Call
          </a>
        </div>
      </section>
    </>
  )
}
