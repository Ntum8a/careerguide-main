import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CareerGuide collects, uses and protects your personal data.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand)] mb-3">Legal</p>
        <h1 className="text-4xl font-extrabold uppercase tracking-tight text-[var(--color-body)] mb-3">Privacy Policy</h1>
        <p className="text-sm text-[var(--color-muted)] mb-12">Last updated: June 2026</p>

        <div className="prose prose-slate max-w-none space-y-10 text-[var(--color-body)]">

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">1. Who We Are</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              CareerGuide (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the websites at{' '}
              <strong>www.careerguide.network</strong> and <strong>resources.careerguide.network</strong>.
              We are based at 21 Ballance Road, London, E9 5ST, United Kingdom.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mt-3">
              We are committed to protecting your personal data and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              For any privacy-related queries, contact us at{' '}
              <a href="mailto:hello@careerguide.network" className="text-[var(--color-brand)] hover:underline">hello@careerguide.network</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">2. What Data We Collect</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">We collect the following personal data:</p>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Contact form:</strong> your name, email address, and message when you submit an enquiry through our contact page.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Newsletter & updates:</strong> your email address when you subscribe to our mailing list for career tips, opportunities, and updates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Usage data:</strong> information about how you use our websites, including pages visited, time spent, and device/browser type — collected via Google Analytics and Vercel Analytics.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Cookies:</strong> small files placed on your device to help our site function and to understand usage patterns (see Section 6).</span>
              </li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              We do not collect sensitive personal data (such as health information, financial details, or government identifiers) and we do not knowingly collect data from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">3. How We Use Your Data</h2>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span>To respond to your enquiries submitted via our contact form.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span>To send you career tips, hidden opportunities, and updates you have subscribed to.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span>To understand how our websites are used so we can improve them.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span>To comply with legal obligations.</span>
              </li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              We will never sell your personal data to third parties or use it for automated decision-making.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">4. Legal Basis for Processing</h2>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Consent</strong> — for newsletter subscriptions and non-essential cookies. You can withdraw consent at any time.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Legitimate interests</strong> — for responding to contact form enquiries and understanding how our site is used, where this does not override your rights.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Legal obligation</strong> — where we are required to process data to comply with UK law.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">5. Third Parties We Share Data With</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">We use trusted third-party services to operate our websites:</p>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Mailchimp (Intuit Inc.)</strong> — stores and manages our newsletter subscriber list. Your email is transferred to Mailchimp&apos;s servers in the USA under standard contractual clauses. You can unsubscribe at any time via the link in any email.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Google Analytics (Google LLC)</strong> — collects anonymised usage data. Data may be processed in the USA. You can opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)] hover:underline">Google&apos;s opt-out tool</a>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Vercel Analytics (Vercel Inc.)</strong> — privacy-friendly, cookieless analytics used to measure site performance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Vercel Inc.</strong> — hosts our websites. Your IP address may be processed as part of standard web hosting.</span>
              </li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              We do not share your personal data with any other third parties without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">6. Cookies</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">Our websites use the following types of cookies:</p>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Essential cookies:</strong> required for the website to function correctly. These cannot be disabled.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Analytics cookies:</strong> set by Google Analytics to help us understand how visitors use our site. These are only placed with your consent.</span>
              </li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">7. Data Retention</h2>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Contact form data:</strong> retained for up to 12 months from the date of your enquiry, then securely deleted.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Newsletter subscribers:</strong> retained until you unsubscribe. You can unsubscribe at any time via the link in any email we send.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-brand)] font-bold shrink-0">→</span>
                <span><strong className="text-[var(--color-body)]">Analytics data:</strong> retained in accordance with Google Analytics and Vercel&apos;s own data retention policies.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">8. Your Rights</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">Under UK GDPR you have the right to:</p>
            <ul className="space-y-3 text-[var(--color-muted)]">
              <li className="flex gap-3"><span className="text-[var(--color-brand)] font-bold shrink-0">→</span><span><strong className="text-[var(--color-body)]">Access</strong> the personal data we hold about you.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-brand)] font-bold shrink-0">→</span><span><strong className="text-[var(--color-body)]">Rectify</strong> inaccurate or incomplete data.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-brand)] font-bold shrink-0">→</span><span><strong className="text-[var(--color-body)]">Erase</strong> your personal data (&ldquo;right to be forgotten&rdquo;).</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-brand)] font-bold shrink-0">→</span><span><strong className="text-[var(--color-body)]">Restrict</strong> how we process your data.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-brand)] font-bold shrink-0">→</span><span><strong className="text-[var(--color-body)]">Port</strong> your data to another service.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-brand)] font-bold shrink-0">→</span><span><strong className="text-[var(--color-body)]">Object</strong> to processing based on legitimate interests.</span></li>
              <li className="flex gap-3"><span className="text-[var(--color-brand)] font-bold shrink-0">→</span><span><strong className="text-[var(--color-body)]">Withdraw consent</strong> at any time where processing is based on consent.</span></li>
            </ul>
            <p className="text-[var(--color-muted)] leading-relaxed mt-4">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:hello@careerguide.network" className="text-[var(--color-brand)] hover:underline">hello@careerguide.network</a>.
              We will respond within 30 days. You also have the right to lodge a complaint with the{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[var(--color-brand)] hover:underline">Information Commissioner&apos;s Office (ICO)</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold uppercase tracking-tight mb-4">9. Changes to This Policy</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              We may update this privacy policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of our websites after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="border-t border-[var(--color-border)] pt-8">
            <p className="text-sm text-[var(--color-muted)]">
              Questions? Contact us at{' '}
              <a href="mailto:hello@careerguide.network" className="text-[var(--color-brand)] hover:underline font-semibold">hello@careerguide.network</a>
              {' '}or write to us at 21 Ballance Road, London, E9 5ST.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
