import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CitizenApproved | Your Path to U.S. Citizenship',
  description: 'Comprehensive, legally accurate guide to all pathways to United States citizenship. Based on the Immigration and Nationality Act (INA) - Title 8 U.S. Code.',
  keywords: ['U.S. citizenship', 'naturalization', 'immigration', 'green card', 'INA', 'Title 8'],
  authors: [{ name: 'CitizenApproved' }],
  openGraph: {
    title: 'CitizenApproved | Your Path to U.S. Citizenship',
    description: 'Comprehensive, legally accurate guide to all pathways to United States citizenship.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {/* Background grid effect */}
        <div className="cyber-grid" aria-hidden="true"></div>
        
        {/* Main content */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
