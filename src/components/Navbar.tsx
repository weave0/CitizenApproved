"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/updates", label: "Current Policy" },
  { href: "/pathways", label: "Pathways" },
  { href: "/topics", label: "Topics" },
  { href: "/resources", label: "Resources" },
  { href: "/help", label: "Official Help" },
  { href: "/legal", label: "Legal" },
  { href: "/about", label: "About" },
];

const tools = [
  { href: "/eligibility", label: "Pathway Triage" },
  { href: "/civics", label: "Civics Test Guide" },
  { href: "/costs", label: "Current Fees" },
  { href: "/documents", label: "Evidence Guide" },
  { href: "/processing", label: "Processing Guide" },
  { href: "/glossary", label: "Plain-Language Glossary" },
  { href: "/languages", label: "Language Guides" },
  { href: "/accessibility", label: "Language & Accessibility" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setToolsOpen(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50" aria-label="Primary navigation">
        <div className="absolute inset-0 bg-[#050508]/80 backdrop-blur-xl border-b border-white/[0.06]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-3 group" aria-label="CitizenApproved home">
              <div className="relative" aria-hidden="true">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <Image src="/citizenapproved-icon-48x48.png" alt="" width={48} height={48} className="w-full h-full object-cover" priority />
                </div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">CitizenApproved</span>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200">{link.label}</Link>
              ))}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setToolsOpen(!toolsOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
                  aria-expanded={toolsOpen}
                  aria-controls="tools-navigation"
                >
                  Tools
                  <ChevronDown aria-hidden="true" className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
                </button>

                {toolsOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setToolsOpen(false)} aria-hidden="true" />
                    <div id="tools-navigation" aria-label="Research tools" className="absolute right-0 mt-2 w-64 py-2 bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/[0.12] rounded-xl shadow-2xl shadow-black/50 z-20">
                      {tools.map((tool) => (
                        <Link key={tool.href} href={tool.href} onClick={() => setToolsOpen(false)} className="block px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/[0.06] transition-colors">{tool.label}</Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/languages" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 hover:text-white" aria-label="Language guides and accessibility options">
                <Globe className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                <span className="text-xs">Languages & access</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
                aria-label={isOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="xl:hidden absolute top-full left-0 right-0 bg-[#050508]/98 backdrop-blur-xl border-b border-white/[0.08] max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors">{link.label}</Link>
              ))}
              <div className="pt-2 mt-2 border-t border-white/[0.08]">
                <p className="px-4 py-2 text-xs text-white/60 uppercase tracking-wider">Tools and access</p>
                {tools.map((tool) => (
                  <Link key={tool.href} href={tool.href} onClick={() => setIsOpen(false)} className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors">{tool.label}</Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
      <div id="page-content" tabIndex={-1} />
    </>
  );
}
