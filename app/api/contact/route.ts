import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, enquiry, message } = await req.json()

    if (!firstName || !email || !enquiry) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const enquiryLabels: Record<string, string> = {
      school: 'School or College',
      employer: 'Employer',
      partner: 'Organisation / Partner',
      student: 'Student',
    }

    await resend.emails.send({
      from: 'CareerGuide Contact Form <onboarding@resend.dev>',
      to: 'hello@careerguide.network',
      replyTo: email,
      subject: `New enquiry from ${firstName} ${lastName} — ${enquiryLabels[enquiry] ?? enquiry}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1A1840; margin-bottom: 24px;">New contact form submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2DCFC1;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Type</td><td style="padding: 8px 0;">${enquiryLabels[enquiry] ?? enquiry}</td></tr>
          </table>
          ${message ? `<div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;"><p style="color: #666; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p><p style="margin: 0; white-space: pre-wrap;">${message}</p></div>` : ''}
          <p style="margin-top: 24px; color: #999; font-size: 12px;">Reply directly to this email to respond to ${firstName}.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
