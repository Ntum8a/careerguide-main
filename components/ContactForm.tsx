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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, enquiry, message: data.message }),
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

  const inputClass = "w-full border border-[var(--color-border)] rounded-xl px-4 py-3.5 text-sm text-[var(--color-body)] placeholder:text-[var(--color-muted)]/60 focus:outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/10 transition-all duration-200 bg-white"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-[var(--color-body)] uppercase tracking-wider mb-2">First name</label>
          <input name="firstName" type="text" required className={inputClass} placeholder="Jerome" />
        </div>
        <div>
          <label className="block text-xs font-bold text-[var(--color-body)] uppercase tracking-wider mb-2">Last name</label>
          <input name="lastName" type="text" required className={inputClass} placeholder="Ntumba" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-[var(--color-body)] uppercase tracking-wider mb-2">Email</label>
        <input name="email" type="email" required className={inputClass} placeholder="you@organisation.com" />
      </div>

      <div>
        <label className="block text-xs font-bold text-[var(--color-body)] uppercase tracking-wider mb-2">I am a…</label>
        <select name="enquiry" required className={inputClass}>
          <option value="">Select one</option>
          <option value="school">School or College</option>
          <option value="employer">Employer</option>
          <option value="partner">Organisation / Partner</option>
          <option value="student">Student</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-[var(--color-body)] uppercase tracking-wider mb-2">Message</label>
        <textarea name="message" rows={4} className={`${inputClass} resize-none`}
          placeholder="Tell us what you are looking for…" />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-800 font-medium flex items-start gap-3">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
          Thanks! We have received your message and will be in touch shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          {errorMsg || 'Something went wrong. Please try again or email us directly.'}
        </div>
      )}

      <button type="submit" disabled={status === 'loading'}
        className="w-full py-4 bg-[var(--color-brand)] text-white font-bold rounded-full hover:bg-[var(--color-brand-hover)] hover:scale-[1.01] transition-all duration-200 text-sm uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed shadow-card hover:shadow-card-hover">
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </span>
        ) : 'Send Message'}
      </button>
    </form>
  )
}
