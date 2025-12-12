'use client'

import { useEffect, useState } from 'react'

/**
 * Language Selector Component
 * 
 * Uses Google Translate Widget for free translation.
 * This approach allows the entire site to be translated into 100+ languages.
 * 
 * Why Google Translate?
 * - Free for website translation
 * - Supports 100+ languages
 * - No API key required for the widget
 * - Works on static sites
 */

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (options: {
          pageLanguage: string
          includedLanguages?: string
          layout?: number
          autoDisplay?: boolean
        }, element: string) => void
        InlineLayout: {
          SIMPLE: number
        }
      }
    }
    googleTranslateElementInit?: () => void
  }
}

export function LanguageSelector() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    // Define the callback function that Google Translate will call
    window.googleTranslateElementInit = () => {
      // Check that all required properties exist before initializing
      if (window.google?.translate?.TranslateElement && window.google?.translate?.InlineLayout) {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              // Most common languages for immigration information
              includedLanguages: 'en,es,zh-CN,zh-TW,tl,vi,ko,ar,ru,pt,hi,fa,ur,bn,ja,fr,de,it,pl,uk,th,id,tr,he,am,sw,so,my,km,ne,pa,gu,ta,te,ml,mr,kn',
              layout: window.google.translate.InlineLayout.SIMPLE,
              autoDisplay: false
            },
            'google_translate_element'
          )
          setIsLoaded(true)
        } catch (error) {
          // Fallback: initialize without layout option if InlineLayout fails
          console.warn('Google Translate layout option failed, using default:', error)
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,es,zh-CN,zh-TW,tl,vi,ko,ar,ru,pt,hi,fa,ur,bn,ja,fr,de,it,pl,uk,th,id,tr,he,am,sw,so,my,km,ne,pa,gu,ta,te,ml,mr,kn',
              autoDisplay: false
            },
            'google_translate_element'
          )
          setIsLoaded(true)
        }
      } else if (window.google?.translate?.TranslateElement) {
        // InlineLayout not available, initialize without it
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,es,zh-CN,zh-TW,tl,vi,ko,ar,ru,pt,hi,fa,ur,bn,ja,fr,de,it,pl,uk,th,id,tr,he,am,sw,so,my,km,ne,pa,gu,ta,te,ml,mr,kn',
              autoDisplay: false
            },
            'google_translate_element'
          )
          setIsLoaded(true)
        } catch (error) {
          console.error('Google Translate initialization failed:', error)
        }
      }
    }

    // Load the Google Translate script
    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script')
      script.id = 'google-translate-script'
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      script.async = true
      document.body.appendChild(script)
    } else if (window.google?.translate?.TranslateElement) {
      // Script already loaded, just initialize
      window.googleTranslateElementInit()
    }

    return () => {
      // Cleanup not strictly necessary as widget persists
    }
  }, [])

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg" title="Translate this page">🌐</span>
      <div 
        id="google_translate_element"
        className={`translate-selector ${isLoaded ? 'loaded' : ''}`}
      />
      {!isLoaded && (
        <span className="text-xs text-gray-400">Loading translator...</span>
      )}
    </div>
  )
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
