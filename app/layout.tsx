import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'CareerGuide — Bridging Careers and Education',
    template: '%s | CareerGuide',
  },
  description: 'Practical employability programmes, work experience opportunities and career resources connecting education with industry across London.',
  metadataBase: new URL('https://www.careerguide.network'),
  openGraph: {
    siteName: 'CareerGuide',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
