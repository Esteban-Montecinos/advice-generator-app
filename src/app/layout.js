import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({weight:'800', subsets: ['latin'] })

export const metadata = {
  title: 'Advice generator | Next.js',
  description: 'Generate random advice for your everyday life',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-gray-800`}>{children}</body>
    </html>
  )
}
