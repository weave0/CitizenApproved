import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EcosystemNav from "@/components/EcosystemNav";
import ConversionFeatures from "@/components/ConversionFeatures";
import { ErrorMonitor } from "@/components/ErrorMonitor";
import SentryInit from "@/components/SentryInit";

const inter = Inter({ subsets: ["latin"] });

const siteDescription =
  "A source-first, current guide to U.S. citizenship and naturalization law: citizenship at birth, citizenship through parents, naturalization, USCIS policy, fees, evidence, testing, processing, and legal changes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://citizenapproved.org"),
  title: {
    default: "CitizenApproved | Current U.S. Citizenship Law & Policy",
    template: "%s | CitizenApproved",
  },
  description: siteDescription,
  keywords: [
    "U.S. citizenship",
    "naturalization",
    "birthright citizenship",
    "citizenship through parents",
    "military naturalization",
    "USCIS policy",
    "citizenship law",
    "INA",
    "Title 8",
  ],
  authors: [{ name: "CitizenApproved" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/citizenapproved-icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/citizenapproved-icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/citizenapproved-icon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "CitizenApproved | Current U.S. Citizenship Law & Policy",
    description: siteDescription,
    type: "website",
    url: "https://citizenapproved.org",
    siteName: "CitizenApproved",
    locale: "en_US",
    images: [{ url: "/og-image.png", alt: "CitizenApproved" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitizenApproved | Current U.S. Citizenship Law & Policy",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "facebook-domain-verification": "lplvdum3bgelnyx0u5ycpe2wgt9ffi",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://citizenapproved.org/#site",
      url: "https://citizenapproved.org",
      name: "CitizenApproved",
      description: siteDescription,
      inLanguage: "en",
      isAccessibleForFree: true,
      publisher: { "@id": "https://goodflippindesign.com/#studio" },
      about: [
        "United States citizenship",
        "United States nationality law",
        "Naturalization",
        "USCIS policy",
        "Citizenship at birth",
        "Citizenship through parents",
      ],
      audience: {
        "@type": "Audience",
        audienceType: "Applicants, families, educators, researchers, and international readers",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://goodflippindesign.com/#studio",
      name: "Good Flippin Design",
      url: "https://goodflippindesign.com",
      sameAs: ["https://goodflippinvibes.com"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WM6Q66W9W0"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WM6Q66W9W0');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{if(!window.PerformanceObserver)return;function r(n,v,i){if(window.gtag)gtag('event',n,{value:Math.round('CLS'===n?1e3*v:v),metric_id:i||'',non_interaction:!0,event_category:'Web Vitals'});}const ob=(t,cb,opts)=>{try{new PerformanceObserver(l=>{l.getEntries().forEach(cb)}).observe(Object.assign({type:t,buffered:!0},opts||{}));}catch(e){}};ob('largest-contentful-paint',e=>r('LCP',e.startTime,e.id));ob('first-input',e=>r('FID',e.processingStart-e.startTime,e.id));ob('layout-shift',e=>{if(!e.hadRecentInput)r('CLS',e.value,e.id);},{durationThreshold:0});ob('event',e=>{if(e.interactionId)r('INP',e.duration,e.id);},{durationThreshold:40});const np=(performance.getEntriesByType('navigation')||[])[0];if(np)r('TTFB',np.responseStart,np.name);})();`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <EcosystemNav />
        <ErrorMonitor />
        <div className="cyber-grid" aria-hidden="true"></div>
        <div className="relative z-10 min-h-screen">{children}</div>
        <ConversionFeatures />
        <SentryInit />
      </body>
    </html>
  );
}
