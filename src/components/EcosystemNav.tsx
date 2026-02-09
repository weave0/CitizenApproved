"use client";

import { useState, useEffect } from "react";

export default function EcosystemNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on escape  key
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
    <nav className="bg-zinc-900 border-b border-zinc-800 relative z-150">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/gfd-logo.png"
              alt="GFD Ecosystem"
              className="h-5 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <span className="text-sm font-semibold text-zinc-300">
              GFD Ecosystem
            </span>
          </div>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            aria-label={isOpen ? "Close ecosystem menu" : "Open ecosystem menu"}
            aria-expanded={isOpen}
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
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-140"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Content */}
          <div className="absolute top-12 left-0 right-0 bg-zinc-900 border-b border-zinc-800 shadow-2xl z-150">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Production Platforms */}
                <div>
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                    Production Platforms
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://goodflippindesign.com"
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        🎨
                      </span>
                      <div>
                        <div className="font-semibold text-zinc-200 group-hover:text-white text-sm">
                          Good Flippin Design
                        </div>
                        <div className="text-xs text-zinc-500">
                          Strategic Web Development
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://aiaimate.com"
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        🧠
                      </span>
                      <div>
                        <div className="font-semibold text-zinc-200 group-hover:text-white text-sm">
                          AI Aimate
                        </div>
                        <div className="text-xs text-zinc-500">
                          AI Education Platform
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://culturesherpa.org"
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        🌍
                      </span>
                      <div>
                        <div className="font-semibold text-zinc-200 group-hover:text-white text-sm">
                          CultureSherpa
                        </div>
                        <div className="text-xs text-zinc-500">
                          Interactive Cultural Atlas
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://goodflippinvibes.com"
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        ✨
                      </span>
                      <div>
                        <div className="font-semibold text-zinc-200 group-hover:text-white text-sm">
                          Good Flippin Vibes
                        </div>
                        <div className="text-xs text-zinc-500">
                          Holistic Wellness Platform
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Research & Intelligence */}
                <div>
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                    Research & Intelligence
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://globaldeets.com"
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        📊
                      </span>
                      <div>
                        <div className="font-semibold text-zinc-200 group-hover:text-white text-sm">
                          GlobalDeets
                        </div>
                        <div className="text-xs text-zinc-500">
                          Visualization & Research Platform
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://citizenapproved.org"
                      className="flex items-start gap-3 p-2 rounded-lg bg-blue-950/30 border border-blue-800/30"
                      aria-current="page"
                    >
                      <span
                        className="inline-flex w-8 h-8 items-center justify-center rounded-full overflow-hidden flex-shrink-0"
                        aria-hidden="true"
                      >
                        <img
                          src="/ca-logo.png"
                          alt=""
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </span>
                      <div>
                        <div className="font-semibold text-blue-300 text-sm">
                          CitizenApproved
                        </div>
                        <div className="text-xs text-blue-400">
                          U.S. Citizenship Pathways
                        </div>
                        <div className="text-xs text-blue-500 mt-0.5">
                          ← You are here
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Support the Ecosystem */}
                <div>
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">
                    Support the Ecosystem
                  </h3>
                  <div className="space-y-2">
                    <a
                      href="https://gofund.me/f07ea3faf"
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-500/30 hover:border-rose-400/50 transition-colors group"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        ❤️
                      </span>
                      <div>
                        <div className="font-bold text-rose-300 group-hover:text-rose-200 text-sm">
                          GoFundMe: $300K Campaign
                        </div>
                        <div className="text-xs text-rose-400">
                          Help sustain the GFD Ecosystem
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://goodflippindesign.com/donate.html"
                      target="_blank"
                      rel="noopener"
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-800 transition-colors group"
                    >
                      <span className="text-2xl" aria-hidden="true">
                        🤝
                      </span>
                      <div>
                        <div className="font-semibold text-zinc-200 group-hover:text-white text-sm">
                          Other Donation Options
                        </div>
                        <div className="text-xs text-zinc-500">
                          Stripe, PayPal, and more
                        </div>
                      </div>
                    </a>
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
