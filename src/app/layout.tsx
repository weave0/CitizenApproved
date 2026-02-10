import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EcosystemNav from "@/components/EcosystemNav";
import ConversionFeatures from "@/components/ConversionFeatures";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CitizenApproved | Your Path to U.S. Citizenship",
  description:
    "Comprehensive, legally accurate guide to all pathways to United States citizenship. Based on the Immigration and Nationality Act (INA) - Title 8 U.S. Code.",
  keywords: [
    "U.S. citizenship",
    "naturalization",
    "immigration",
    "green card",
    "INA",
    "Title 8",
  ],
  authors: [{ name: "CitizenApproved" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/citizenapproved-icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/citizenapproved-icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/citizenapproved-icon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "CitizenApproved | Your Path to U.S. Citizenship",
    description:
      "Comprehensive, legally accurate guide to all pathways to United States citizenship.",
    type: "website",
    url: "https://citizenapproved.org",
    siteName: "CitizenApproved",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CitizenApproved | Your Path to U.S. Citizenship",
    description:
      "Comprehensive, legally accurate guide to all pathways to United States citizenship.",
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
  verification: {
    google: "pending", // Add Google Search Console verification code
  },
  other: {
    "facebook-domain-verification": "lplvdum3bgelnyx0u5ycpe2wgt9ffi",
  },
};

// Schema.org structured data for SEO
const structuredData = [
  // Government Organization Schema
  {
    "@context": "https://schema.org",
    "@type": "GovernmentOrganization",
    "@id": "https://citizenapproved.org/#organization",
    name: "CitizenApproved",
    alternateName: "CitizenApproved.org",
    url: "https://citizenapproved.org",
    description:
      "Comprehensive, legally accurate guide to all pathways to United States citizenship based on the Immigration and Nationality Act (INA)",
    knowsAbout: [
      "U.S. Citizenship",
      "Naturalization Process",
      "Immigration Law",
      "Green Card",
      "INA Title 8",
      "USCIS Procedures",
      "Civic Integration",
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    founder: {
      "@type": "Person",
      name: "Brett Weaver",
      url: "https://goodflippindesign.com",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "GFV LLC DBA Good Flippin Design",
      url: "https://goodflippindesign.com",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Citizenship Pathways",
      itemListElement: [
        {
          "@type": "HowTo",
          name: "Naturalization",
          description:
            "Standard path to U.S. citizenship through lawful permanent residence",
        },
        {
          "@type": "HowTo",
          name: "Citizenship Through Parents",
          description:
            "Automatic or derived citizenship for children of U.S. citizens",
        },
        {
          "@type": "HowTo",
          name: "Military Service Naturalization",
          description:
            "Expedited citizenship for U.S. military service members",
        },
      ],
    },
  },
  // WebSite Schema with SearchAction
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://citizenapproved.org/#website",
    name: "CitizenApproved",
    url: "https://citizenapproved.org",
    description: "Comprehensive guide to U.S. citizenship pathways",
    publisher: {
      "@type": "GovernmentOrganization",
      name: "CitizenApproved",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://citizenapproved.org/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  // BreadcrumbList Schema
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://citizenapproved.org/#breadcrumb",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://citizenapproved.org",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pathways",
        item: "https://citizenapproved.org/pathways",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Resources",
        item: "https://citizenapproved.org/resources",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "About",
        item: "https://citizenapproved.org/about",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Google Analytics */}
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
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* GFD Ecosystem Navigation - React Component */}
        <EcosystemNav />

        {/* Background grid effect */}
        <div className="cyber-grid" aria-hidden="true"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen">{children}</div>

        {/* Conversion Optimization Features */}
        <ConversionFeatures />
      </body>
    </html>
  );
}
