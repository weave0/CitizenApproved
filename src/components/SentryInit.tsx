"use client";

import { useEffect } from "react";

/**
 * Client-side Sentry initialization for static exports (Cloudflare Pages)
 * Activate by setting NEXT_PUBLIC_SENTRY_DSN environment variable
 */
export default function SentryInit() {
  useEffect(() => {
    const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!dsn) return;

    import("@sentry/browser").then((Sentry) => {
      Sentry.init({
        dsn,
        environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || "production",
        release: process.env.NEXT_PUBLIC_SENTRY_RELEASE || undefined,
        tracesSampleRate: 0.1,
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        sendDefaultPii: true,
        ignoreErrors: [
          "ResizeObserver loop limit exceeded",
          "Non-Error promise rejection captured",
        ],
        integrations: [
          Sentry.replayIntegration({
            maskAllText: false,
            blockAllMedia: false,
          }),
        ],
        initialScope: {
          tags: { app: "citizenapproved" },
        },
      });
    });
  }, []);

  return null;
}
