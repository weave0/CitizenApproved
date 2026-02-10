"use client";

import { useState, useEffect } from "react";

export default function ConversionFeatures() {
  // Exit Intent State
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);

  // Sticky CTA State
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);

  // Social Proof State
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [socialDismissed, setSocialDismissed] = useState(false);

  const activities = [
    { icon: "🗳️", text: "Someone just checked eligibility requirements" },
    { icon: "📋", text: "Naturalization pathway viewed" },
    { icon: "💚", text: "New supporter joined our mission" },
    { icon: "🌐", text: "Citizenship flowchart explored" },
    { icon: "👥", text: "Community member shared our resource" },
    { icon: "✉️", text: "Newsletter subscriber received updates" },
  ];

  // Check sessionStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const exitSeen = sessionStorage.getItem("citizenapproved_exit_intent_seen");
    const stickyDism = sessionStorage.getItem(
      "citizenapproved_sticky_dismissed",
    );
    const socialDism = sessionStorage.getItem(
      "citizenapproved_social_dismissed",
    );

    if (stickyDism) setStickyDismissed(true);
    if (socialDism) setSocialDismissed(true);

    if (!exitSeen) {
      // Desktop: mouse leave detection
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY < 10 && !showExitIntent) {
          setShowExitIntent(true);
          sessionStorage.setItem("citizenapproved_exit_intent_seen", "true");
        }
      };

      // Mobile: scroll velocity detection
      let lastScrollY = window.scrollY;
      let lastScrollTime = Date.now();

      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const currentTime = Date.now();
        const scrollDelta = lastScrollY - currentScrollY;
        const timeDelta = currentTime - lastScrollTime;

        // Detect rapid upward scroll
        if (
          scrollDelta > 50 &&
          timeDelta < 100 &&
          currentScrollY > 200 &&
          !showExitIntent
        ) {
          setShowExitIntent(true);
          sessionStorage.setItem("citizenapproved_exit_intent_seen", "true");
        }

        lastScrollY = currentScrollY;
        lastScrollTime = currentTime;
      };

      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [showExitIntent]);

  // Sticky CTA Timer & Scroll Detection
  useEffect(() => {
    if (stickyDismissed || typeof window === "undefined") return;

    const timer = setTimeout(() => setShowStickyCTA(true), 10000);

    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (scrollPercent > 50) setShowStickyCTA(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stickyDismissed]);

  // Social Proof Rotation
  useEffect(() => {
    if (socialDismissed || typeof window === "undefined") return;

    const initialTimer = setTimeout(() => setShowSocialProof(true), 15000);

    const rotationInterval = setInterval(() => {
      setShowSocialProof(false);
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length);
        setShowSocialProof(true);
      }, 500);
    }, 45000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(rotationInterval);
    };
  }, [socialDismissed, activities.length]);

  // Email Form Submit
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || emailLoading) return;

    setEmailLoading(true);

    try {
      await fetch("https://formspree.io/f/xanyedqp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "exit_intent",
          site: "CitizenApproved",
        }),
      });

      setEmailSubmitted(true);
      setTimeout(() => setShowExitIntent(false), 3000);
    } catch (error) {
      console.error("Email submission error:", error);
      alert("Failed to subscribe. Please try again.");
    } finally {
      setEmailLoading(false);
    }
  };

  // Close handlers
  const handleExitClose = () => {
    setShowExitIntent(false);
  };

  const handleStickyDismiss = () => {
    setShowStickyCTA(false);
    setStickyDismissed(true);
    sessionStorage.setItem("citizenapproved_sticky_dismissed", "true");
  };

  const handleSocialDismiss = () => {
    setShowSocialProof(false);
    setSocialDismissed(true);
    sessionStorage.setItem("citizenapproved_social_dismissed", "true");
  };

  // Escape key handling
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showExitIntent) handleExitClose();
        if (showStickyCTA) handleStickyDismiss();
        if (showSocialProof) handleSocialDismiss();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showExitIntent, showStickyCTA, showSocialProof]);

  return (
    <>
      {/* Exit Intent Popup */}
      {showExitIntent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-200 animate-fadeIn">
          <div
            className="fixed inset-0"
            onClick={handleExitClose}
            aria-hidden="true"
          />
          <div className="relative bg-gradient-to-br from-blue-950 to-slate-900 rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-blue-800/50 animate-slideUp">
            <button
              onClick={handleExitClose}
              className="absolute top-4 right-4 text-blue-300 hover:text-white transition-colors"
              aria-label="Close"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {!emailSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Before you go... 🗳️
                </h3>
                <p className="text-blue-200 mb-6">
                  Get citizenship updates, legal pathway changes, and civic
                  engagement resources delivered to your inbox.
                </p>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={emailLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50"
                  >
                    {emailLoading ? "Subscribing..." : "Stay Informed 📬"}
                  </button>
                </form>

                <p className="text-xs text-blue-400 mt-4 text-center">
                  No spam. Unsubscribe anytime. Privacy respected.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  You're subscribed!
                </h3>
                <p className="text-blue-200">Check your inbox for updates.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sticky CTA Bar */}
      {showStickyCTA && !stickyDismissed && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-4 px-6 shadow-2xl z-100 border-t-2 border-blue-400 animate-slideUp">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <p className="font-bold text-lg">
                Help Others Find Their Path to Citizenship 🗳️
              </p>
              <p className="text-sm text-blue-200">
                Support our mission to make civic resources accessible to all
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://gofund.me/f07ea3faf"
                target="_blank"
                rel="noopener"
                className="bg-white text-blue-900 font-bold py-2 px-6 rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap"
              >
                Support Us 💙
              </a>
              <button
                onClick={handleStickyDismiss}
                className="text-blue-200 hover:text-white transition-colors p-2"
                aria-label="Dismiss"
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof Activity Feed */}
      {showSocialProof && !socialDismissed && (
        <div className="fixed bottom-6 left-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-lg shadow-2xl p-4 max-w-sm border border-blue-700/50 z-90 animate-slideInLeft">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0" aria-hidden="true">
              {activities[currentActivity].icon}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">
                {activities[currentActivity].text}
              </p>
              <p className="text-xs text-blue-400 mt-1">Just now</p>
            </div>
            <button
              onClick={handleSocialDismiss}
              className="text-blue-300 hover:text-white transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 4L4 12M4 4l8 8" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
