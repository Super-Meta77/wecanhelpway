import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' })

export const metadata = {
  title: 'WeCanHelpWay — Everyone deserves a way forward.',
  description: 'Tell us what you need. We help you find a way forward. A global platform for people seeking help — and people ready to offer it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased bg-[#FAF7F2] text-[#0F0F0E] font-sans selection:bg-[#E76F51]/25 selection:text-[#0F0F0E]">{children}</body>
    </html>
  )
}
