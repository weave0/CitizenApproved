'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ErrorMonitor() {
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      if (typeof window.gtag === 'function')
        window.gtag('event', 'js_error', {
          event_category: 'Error',
          event_label: String(e.message).slice(0, 150),
          non_interaction: true,
        });
    };
    const handleRejection = (e: PromiseRejectionEvent) => {
      if (typeof window.gtag === 'function')
        window.gtag('event', 'promise_error', {
          event_category: 'Error',
          event_label: String(e.reason).slice(0, 150),
          non_interaction: true,
        });
    };
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);
  return null;
}
