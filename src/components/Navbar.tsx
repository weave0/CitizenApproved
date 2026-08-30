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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508] border-b border-white/15" aria-label="Primary navigation">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex min-h-11 items-center gap-3 rounded-lg px-1 text-white hover:bg-white/[0.06]" aria-label="CitizenApproved home">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden" aria-hidden="true">
                <Image src="/citizenapproved-icon-48x48.png" alt="" width={48} height={48} className="w-full h-full object-cover" priority />
              </div>
              <span className="text-lg font-bold text-white">CitizenApproved</span>
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-zinc-100 hover:bg-white/[0.08] hover:text-white">{link.label}</Link>
              ))}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setToolsOpen(!toolsOpen)}
                  className="flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-zinc-100 hover:bg-white/[0.08] hover:text-white"
                  aria-expanded={toolsOpen}
                  aria-controls="tools-navigation"
                >
                  Tools
                  <ChevronDown aria-hidden="true" className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`} />
                </button>

                {toolsOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setToolsOpen(false)} aria-hidden="true" />
                    <div id="tools-navigation" aria-label="Research tools" className="absolute right-0 mt-2 w-64 py-2 bg-[#0a0a0f] border border-white/20 rounded-xl shadow-2xl shadow-black/50 z-20">
                      {tools.map((tool) => (
                        <Link key={tool.href} href={tool.href} onClick={() => setToolsOpen(false)} className="flex min-h-11 items-center px-4 py-2 text-sm text-zinc-100 hover:text-white hover:bg-white/[0.08]">{tool.label}</Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/languages" className="hidden sm:flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-3 text-white hover:bg-white/[0.1]" aria-label="Language guides and accessibility options">
                <Globe className="w-4 h-4 text-cyan-300" aria-hidden="true" />
                <span className="text-xs font-medium text-white">Languages & access</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden min-h-11 min-w-11 rounded-lg p-2 text-white hover:bg-white/[0.08]"
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
          <div id="mobile-navigation" className="xl:hidden absolute top-full left-0 right-0 bg-[#050508] border-b border-white/15 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="flex min-h-11 items-center rounded-lg px-4 py-2 text-zinc-100 hover:text-white hover:bg-white/[0.08]">{link.label}</Link>
              ))}
              <div className="pt-2 mt-2 border-t border-white/15">
                <p className="px-4 py-2 text-xs font-semibold text-zinc-300 uppercase tracking-wider">Tools and access</p>
                {tools.map((tool) => (
                  <Link key={tool.href} href={tool.href} onClick={() => setIsOpen(false)} className="flex min-h-11 items-center rounded-lg px-4 py-2 text-zinc-100 hover:text-white hover:bg-white/[0.08]">{tool.label}</Link>
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
