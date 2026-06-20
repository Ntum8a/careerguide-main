import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with CareerGuide to book a discovery call or ask about partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-[var(--color-dark-section-deep)] py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark-section-deep)] via-[var(--color-dark-section)] to-[var(--color-brand)] opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[var(--color-accent)] mb-6 uppercase tracking-widest">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 max-w-xl">
            Let&apos;s start a <span className="text-[var(--color-accent)]">conversation</span>
          </h1>
          <p className="text-white/70 text-lg max-w-md">
            Whether you are a school, employer, partner or student — we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-8">Send us a message</h2>
              <ContactForm />
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Email</h3>
                <a href="mailto:hello@careerguide.network" className="text-[var(--color-body)] font-semibold hover:text-[var(--color-brand)] transition-colors">
                  hello@careerguide.network
                </a>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Book a Call</h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">Prefer to talk? Book a 30-minute discovery call directly into our calendar.</p>
                <a href="#calendly-placeholder"
                  className="inline-flex items-center px-6 py-3 bg-[var(--color-brand)] text-white font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide">
                  Book a Discovery Call
                </a>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/careerguideuk' },
                    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/careerguidenetwork/' },
                    { label: 'TikTok', href: 'https://www.tiktok.com/@careerguidenetwork' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--color-brand)] hover:underline">
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
