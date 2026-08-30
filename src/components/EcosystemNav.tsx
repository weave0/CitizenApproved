"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function EcosystemNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <nav className="bg-[#09090b] border-b border-zinc-700 relative z-[150]" aria-label="GFD ecosystem">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-7 min-w-10 items-center justify-center rounded-md border border-zinc-600 bg-black px-2 text-[11px] font-bold tracking-[0.14em] text-white" aria-hidden="true">
              GFD
            </span>
            <span className="text-sm font-semibold text-white">
              GFD Ecosystem
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-white hover:bg-white/[0.08] rounded-lg transition-colors"
            aria-label={isOpen ? "Close ecosystem menu" : "Open ecosystem menu"}
            aria-expanded={isOpen}
            aria-controls="ecosystem-menu"
          >
            <span className="hidden sm:inline">Explore Sites</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/70 z-[140]"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div id="ecosystem-menu" className="absolute top-12 left-0 right-0 bg-[#09090b] border-b border-zinc-700 shadow-2xl z-[150]">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h2 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">Production Platforms</h2>
                  <div className="space-y-2">
                    <a href="https://goodflippindesign.com" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"><span className="text-2xl" aria-hidden="true">🎨</span><div><div className="font-semibold text-white text-sm">Good Flippin Design</div><div className="text-xs text-zinc-300">Strategic Web Development</div></div></a>
                    <a href="https://aiaimate.com" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"><span className="text-2xl" aria-hidden="true">🧠</span><div><div className="font-semibold text-white text-sm">AI Aimate</div><div className="text-xs text-zinc-300">AI Education Platform</div></div></a>
                    <a href="https://culturesherpa.org" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"><span className="text-2xl" aria-hidden="true">🌍</span><div><div className="font-semibold text-white text-sm">CultureSherpa</div><div className="text-xs text-zinc-300">Interactive Cultural Atlas</div></div></a>
                    <a href="https://goodflippinvibes.com" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"><span className="text-2xl" aria-hidden="true">✨</span><div><div className="font-semibold text-white text-sm">Good Flippin Vibes</div><div className="text-xs text-zinc-300">Holistic Wellness Platform</div></div></a>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">Research & Intelligence</h2>
                  <div className="space-y-2">
                    <a href="https://globaldeets.com" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"><span className="text-2xl" aria-hidden="true">📊</span><div><div className="font-semibold text-white text-sm">GlobalDeets</div><div className="text-xs text-zinc-300">Visualization & Research Platform</div></div></a>
                    <a href="https://citizenapproved.org" className="flex min-h-11 items-start gap-3 p-2 rounded-lg bg-blue-950 border border-blue-700" aria-current="page">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden bg-[#111118] p-1 flex items-center justify-center" aria-hidden="true"><Image src="/citizenapproved-icon-48x48.png" alt="" width={48} height={48} className="w-full h-full object-contain" /></div>
                      <div><div className="font-semibold text-blue-100 text-sm">CitizenApproved</div><div className="text-xs text-blue-100">U.S. Citizenship Pathways</div><div className="text-xs text-blue-100 mt-0.5">← You are here</div></div>
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">Support the Ecosystem</h2>
                  <div className="space-y-2">
                    <a href="https://gofund.me/f07ea3faf" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 p-3 rounded-lg bg-[#2a1118] border border-rose-700 hover:border-rose-500 transition-colors group"><span className="text-2xl" aria-hidden="true">❤️</span><div><div className="font-bold text-rose-100 text-sm">GoFundMe: $300K Campaign</div><div className="text-xs text-rose-100">Help sustain the GFD Ecosystem</div></div></a>
                    <a href="https://goodflippindesign.com/donate.html" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"><span className="text-2xl" aria-hidden="true">🤝</span><div><div className="font-semibold text-white text-sm">Other Donation Options</div><div className="text-xs text-zinc-300">Stripe, PayPal, and more</div></div></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
