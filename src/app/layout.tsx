import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
          src="https://www.googletagmanager.com/gtag/js?id=G-QPPVJM1B60"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QPPVJM1B60');
            `,
          }}
        />
        {/* GFD Ecosystem Navigation */}
        <link rel="stylesheet" href="/shared/ecosystem-nav.css" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* GFD Ecosystem Navigation */}
        <nav className="gfd-ecosystem-nav" aria-label="Ecosystem navigation">
          <div className="ecosystem-nav-container">
            <div className="ecosystem-brand">
              <svg viewBox="324 324 1352 1352" fill="currentColor" className="ecosystem-logo" aria-hidden="true">
                <path transform="matrix(1.542,0,0,1.542,-480.343,167.307)" d="M896.648,101.831L1398.17,101.831L1304.42,289.331L1154.42,289.331L1185.67,226.831L984.148,226.831L859.148,476.831L859.331,476.831L960,678.169L990,618.169L1065,768.169L960,978.169L709.24,476.648L896.648,101.831Z" />
                <path transform="matrix(1.542,0,0,1.542,-480.343,167.307)" d="M521.831,101.831L836.648,101.831L679.24,416.648L521.831,101.831Z" />
                <path transform="matrix(1.542,0,0,1.542,-480.343,167.307)" d="M1273.17,351.831L1095,708.169L1020,558.169L1060.67,476.831L919.331,476.831L919.24,476.648L981.648,351.831L1273.17,351.831Z" />
              </svg>
              <span className="ecosystem-title">GFD Ecosystem</span>
            </div>
            <button className="ecosystem-toggle" aria-label="Open ecosystem menu" aria-expanded="false" aria-controls="ecosystem-dropdown">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="ecosystem-dropdown" id="ecosystem-dropdown" role="menu" aria-hidden="true">
            <div className="dropdown-content">
              <div className="nav-section">
                <h3 className="nav-section-title">Production Platforms</h3>
                <a href="https://goodflippindesign.com" className="nav-link" role="menuitem" target="_blank" rel="noopener">
                  <span className="nav-icon" aria-hidden="true">🎨</span>
                  <div className="nav-link-content">
                    <strong className="nav-link-title">Good Flippin Design</strong>
                    <small className="nav-link-subtitle">Strategic Web Development</small>
                  </div>
                </a>
                <a href="https://aiaimate.com" className="nav-link" role="menuitem" target="_blank" rel="noopener">
                  <span className="nav-icon" aria-hidden="true">🧠</span>
                  <div className="nav-link-content">
                    <strong className="nav-link-title">AI Aimate</strong>
                    <small className="nav-link-subtitle">AI Education Platform</small>
                  </div>
                </a>
                <a href="https://culturesherpa.org" className="nav-link" role="menuitem" target="_blank" rel="noopener">
                  <span className="nav-icon" aria-hidden="true">🌍</span>
                  <div className="nav-link-content">
                    <strong className="nav-link-title">CultureSherpa</strong>
                    <small className="nav-link-subtitle">Interactive Cultural Atlas</small>
                  </div>
                </a>
                <a href="https://goodflippinvibes.com" className="nav-link" role="menuitem" target="_blank" rel="noopener">
                  <span className="nav-icon" aria-hidden="true">✨</span>
                  <div className="nav-link-content">
                    <strong className="nav-link-title">Good Flippin Vibes</strong>
                    <small className="nav-link-subtitle">Holistic Wellness Platform</small>
                  </div>
                </a>
              </div>
              <div className="nav-section">
                <h3 className="nav-section-title">Research & Intelligence</h3>
                <a href="https://globaldeets.com" className="nav-link" role="menuitem" target="_blank" rel="noopener">
                  <span className="nav-icon" aria-hidden="true">📊</span>
                  <div className="nav-link-content">
                    <strong className="nav-link-title">GlobalDeets</strong>
                    <small className="nav-link-subtitle">Visualization & Research Platform</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Background grid effect */}
        <div className="cyber-grid" aria-hidden="true"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen">{children}</div>
        
        {/* Ecosystem Navigation Script */}
        <script src="/shared/ecosystem-nav.js" />
      </body>
    </html>
  );
}
