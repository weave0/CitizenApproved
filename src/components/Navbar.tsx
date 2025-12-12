'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Scale, Menu, X, Globe, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/pathways', label: 'Pathways' },
  { href: '/resources', label: 'Resources' },
  { href: '/legal', label: 'Legal Basis' },
  { href: '/about', label: 'About' },
]

const tools = [
  { href: '/eligibility', label: 'Eligibility Wizard' },
  { href: '/civics', label: 'Civics Test' },
  { href: '/costs', label: 'Cost Calculator' },
  { href: '/documents', label: 'Document Checklist' },
  { href: '/processing', label: 'Processing Times' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.06]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              CitizenApproved
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                Tools
                <ChevronDown className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {toolsOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setToolsOpen(false)} />
                  <div className="absolute right-0 mt-2 w-56 py-2 bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/[0.08] rounded-xl shadow-2xl shadow-black/50 z-20">
                    {tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setToolsOpen(false)}
                        className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/[0.06] transition-colors"
                      >
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right side - Language hint + Mobile menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs text-white/50">100+ languages</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#050508]/98 backdrop-blur-xl border-b border-white/[0.06]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="pt-2 mt-2 border-t border-white/[0.06]">
              <p className="px-4 py-2 text-xs text-white/40 uppercase tracking-wider">Tools</p>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                >
                  {tool.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
