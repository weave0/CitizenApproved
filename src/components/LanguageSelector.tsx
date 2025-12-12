'use client'

import { useEffect, useState } from 'react'

/**
 * Language Selector Component (disabled)
 *
 * The previous implementation loaded the Google Translate widget, which was
 * causing console errors and a persistent "Loading translator..." label.
 * For now we render nothing and rely on the UI hint and browser translation.
 */

export function LanguageSelector() {
  // Disabled: we intentionally render nothing so the old widget
  // and its "Loading translator..." text never appear.
  return null
}

/**
 * Simple manual language notice for accessibility
 * Shows on every page as a reminder that translation is available
 */
export function TranslationNotice() {
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Check if user previously dismissed this notice
    const wasDismissed = localStorage.getItem('translation-notice-dismissed')
    if (wasDismissed) setDismissed(true)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem('translation-notice-dismissed', 'true')
  }

  if (dismissed) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-gray-900/95 border border-cyan-500/30 rounded-lg p-4 shadow-xl">
      <div className="flex items-start gap-3">
        <span className="text-2xl">🌐</span>
        <div className="flex-1">
          <p className="text-cyan-400 font-medium text-sm">
            Need this in another language?
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Use the language selector at the top of the page, or your browser&apos;s translate feature.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            ¿Necesitas esto en español? • 需要中文? • Cần tiếng Việt? • 한국어 필요?
          </p>
        </div>
        <button 
          onClick={handleDismiss}
          className="text-gray-400 hover:text-white text-lg leading-none"
          aria-label="Dismiss translation notice"
        >
          ×
        </button>
      </div>
    </div>
  )
}
