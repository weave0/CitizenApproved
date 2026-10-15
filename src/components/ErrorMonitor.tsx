'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function ErrorMonitor() {
  useEffect(() => {
    const handleError = () => {
      if (typeof window.gtag === 'function')
        window.gtag('event', 'js_error', {
          event_category: 'Error',
          event_label: 'client_error',
          non_interaction: true,
        });
    };
    const handleRejection = () => {
      if (typeof window.gtag === 'function')
        window.gtag('event', 'promise_error', {
          event_category: 'Error',
          event_label: 'unhandled_rejection',
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
