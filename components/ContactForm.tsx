'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const { firstName, lastName, email, enquiry } = data as Record<string, string>

    const tag = enquiry === 'school' ? 'School' :
                enquiry === 'employer' ? 'Employer' :
                enquiry === 'partner' ? 'Partner' : 'Student'

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName, tags: [tag, 'Contact Form'] }),
      })
      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Something went wrong')
      }
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[var(--color-body)] uppercase tracking-wider mb-1.5">First name</label>
          <input name="firstName" type="text" required
            className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
            placeholder="Jerome" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[var(--color-body)] uppercase tracking-wider mb-1.5">Last name</label>
          <input name="lastName" type="text" required
            className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
            placeholder="Ntumba" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-body)] uppercase tracking-wider mb-1.5">Email</label>
        <input name="email" type="email" required
          className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-brand)] transition-colors"
          placeholder="you@organisation.com" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-body)] uppercase tracking-wider mb-1.5">I am a…</label>
        <select name="enquiry" required
          className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-body)] focus:outline-none focus:border-[var(--color-brand)] transition-colors bg-white">
          <option value="">Select one</option>
          <option value="school">School or College</option>
          <option value="employer">Employer</option>
          <option value="partner">Organisation / Partner</option>
          <option value="student">Student</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[var(--color-body)] uppercase tracking-wider mb-1.5">Message</label>
        <textarea name="message" rows={4}
          className="w-full border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
          placeholder="Tell us what you are looking for…" />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800 font-medium">
          Thanks! We have received your message and will be in touch shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          {errorMsg || 'Something went wrong. Please try again or email us directly.'}
        </div>
      )}

      <button type="submit" disabled={status === 'loading'}
        className="w-full py-4 bg-[var(--color-brand)] text-white font-bold rounded-full hover:opacity-90 transition-opacity text-sm uppercase tracking-wide disabled:opacity-60">
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
