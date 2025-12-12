import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageSelector, TranslationNotice } from '@/components/LanguageSelector'

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
    <html lang="en" className="dark notranslate" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Language Selector Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
            <a href="/" className="text-cyan-400 font-bold text-sm hover:text-cyan-300 transition-colors">
              CitizenApproved
            </a>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-xs text-gray-500">Free for everyone</span>
              <LanguageSelector />
            </div>
          </div>
        </header>

        {/* Background grid effect */}
        <div className="cyber-grid" aria-hidden="true"></div>
        
        {/* Main content with top padding for fixed header */}
        <div className="relative z-10 min-h-screen pt-12">
          {children}
        </div>

        {/* Translation notice popup */}
        <TranslationNotice />
      </body>
    </html>
  )
}
