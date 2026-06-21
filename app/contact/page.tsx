import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with CareerGuide to book a discovery call or ask about partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[var(--color-dark-section-deep)] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[#1E1B55] to-[var(--color-brand)]" />
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-15 animate-pulse-glow"
          style={{ background: 'radial-gradient(ellipse, #2DCFC1 0%, transparent 65%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/8 border border-white/12 text-[var(--color-accent)] mb-7 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 max-w-xl leading-[0.95]">
            Let&apos;s start a <span className="text-gradient-accent">conversation</span>
          </h1>
          <p className="text-white/65 text-lg max-w-md leading-relaxed">
            Whether you are a school, employer, partner or student — we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            <div className="space-y-5">
              <div className="border border-[var(--color-border)] rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Email</h3>
                <a href="mailto:hello@careerguide.network" className="text-[var(--color-body)] font-bold text-lg hover:text-[var(--color-brand)] transition-colors duration-200">
                  hello@careerguide.network
                </a>
              </div>

              <div className="border border-[var(--color-border)] rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Book a Call</h3>
                <p className="text-[var(--color-muted)] text-sm mb-5 leading-relaxed">Prefer to talk? Book a 30-minute discovery call directly into our calendar.</p>
                <a href="https://calendly.com/hello-careerguide/30min" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[var(--color-brand)] text-white font-bold rounded-full hover:bg-[var(--color-brand-hover)] hover:scale-105 transition-all duration-200 text-sm uppercase tracking-wide">
                  Book a Discovery Call
                </a>
              </div>

              <div className="border border-[var(--color-border)] rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/careerguideuk' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/careerguidenetwork/' },
                    { label: 'TikTok', href: 'https://www.tiktok.com/@careerguidenetwork' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-[var(--color-border)] text-sm font-semibold text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white hover:border-transparent transition-all duration-200">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
