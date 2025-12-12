'use client'

import Link from 'next/link'
import { Scale, BookOpen, FileText, Gavel, ExternalLink, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'

const legalFoundation = [
  {
    title: 'U.S. Constitution',
    description: 'Article I, Section 8, Clause 4 grants Congress the power to establish a uniform rule of naturalization.',
    icon: Scale,
    color: 'from-yellow-400 to-orange-500',
    details: [
      'Supreme law of the land',
      'Naturalization Clause establishes federal authority',
      'Fourteenth Amendment defines citizenship by birth'
    ],
    link: 'https://constitution.congress.gov/constitution/article-1/#article-1-section-8-clause-4'
  },
  {
    title: 'Immigration and Nationality Act (INA)',
    description: 'The primary federal statute governing immigration and citizenship in the United States.',
    icon: BookOpen,
    color: 'from-cyan-400 to-blue-500',
    details: [
      'Originally enacted as the McCarran-Walter Act of 1952',
      'Codified in Title 8 of the U.S. Code',
      'Covers all aspects of immigration and naturalization'
    ],
    link: 'https://www.uscis.gov/laws-and-policy/legislation/immigration-and-nationality-act'
  },
  {
    title: 'Title 8 U.S. Code',
    description: 'Aliens and Nationality - the official statutory law containing all citizenship requirements.',
    icon: FileText,
    color: 'from-green-400 to-emerald-500',
    details: [
      '§1401 - Nationals and citizens at birth',
      '§1427 - Requirements of naturalization',
      '§1430 - Married persons and employees of certain organizations',
      '§1439-1440 - Military service naturalization',
      '§1431-1433 - Derivative citizenship'
    ],
    link: 'https://uscode.house.gov/browse/prelim@title8&edition=prelim'
  },
  {
    title: '8 CFR (Code of Federal Regulations)',
    description: 'Implementing regulations that provide detailed rules and procedures.',
    icon: Gavel,
    color: 'from-purple-400 to-violet-500',
    details: [
      'Published by the Office of Federal Register',
      'Updated daily through the eCFR',
      'Contains procedural requirements and definitions',
      'USCIS, CBP, and ICE must follow these rules'
    ],
    link: 'https://www.ecfr.gov/current/title-8'
  }
]

const keySections = [
  { code: '8 U.S.C. § 1401', title: 'Nationals and citizens of United States at birth', topic: 'Birthright Citizenship' },
  { code: '8 U.S.C. § 1409', title: 'Children born out of wedlock', topic: 'Citizenship at Birth' },
  { code: '8 U.S.C. § 1427', title: 'Requirements of naturalization', topic: 'General Requirements' },
  { code: '8 U.S.C. § 1429', title: 'Prerequisite to naturalization; burden of proof', topic: 'Evidence' },
  { code: '8 U.S.C. § 1430', title: 'Married persons and employees of certain organizations', topic: 'Marriage to USC' },
  { code: '8 U.S.C. § 1431', title: 'Children born outside U.S. of one citizen parent', topic: 'Derivative Citizenship' },
  { code: '8 U.S.C. § 1433', title: 'Children born and residing outside U.S.', topic: 'Acquisition at Birth' },
  { code: '8 U.S.C. § 1439', title: 'Naturalization through service in armed forces', topic: 'Military Service' },
  { code: '8 U.S.C. § 1440', title: 'Naturalization through active-duty service in wartime', topic: 'Wartime Service' },
  { code: '8 U.S.C. § 1448', title: 'Oath of renunciation and allegiance', topic: 'Oath Ceremony' },
  { code: '8 U.S.C. § 1451', title: 'Revocation of naturalization', topic: 'Denaturalization' },
]

export default function LegalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent mb-4">
            Legal Basis
          </h1>
          <p className="text-white/60 text-lg">
            Understanding the legal foundation of U.S. citizenship law
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
          <h3 className="text-amber-400 font-semibold mb-2">⚖️ Legal Hierarchy</h3>
          <p className="text-gray-300 text-sm">
            U.S. citizenship law follows a hierarchy of authority. The Constitution is the supreme law, 
            followed by federal statutes (Title 8 U.S.C.), then regulations (8 CFR), and finally agency 
            policy guidance. Understanding this hierarchy helps you verify information correctly.
          </p>
        </div>

        {/* Legal Foundation Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Legal Foundation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {legalFoundation.map((item) => (
              <div key={item.title} className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <ul className="space-y-2 mb-4">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300"
                >
                  View Source <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Key Code Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Key Code Sections</h2>
          <div className="glass-panel overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Code Section</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Title</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400 hidden md:table-cell">Topic</th>
                </tr>
              </thead>
              <tbody>
                {keySections.map((section, index) => (
                  <tr key={section.code} className={`border-b border-gray-800/50 hover:bg-gray-800/30 ${index % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                    <td className="px-4 py-3">
                      <a 
                        href={`https://www.law.cornell.edu/uscode/text/8/${section.code.split('§')[1]?.trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-cyan-400 hover:text-cyan-300"
                      >
                        {section.code}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-300">{section.title}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">{section.topic}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Official Sources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="https://uscode.house.gov/browse/prelim@title8&edition=prelim"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400">U.S. Code (Official)</h3>
                <p className="text-sm text-gray-500">Office of Law Revision Counsel</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
            </a>
            <a 
              href="https://www.ecfr.gov/current/title-8"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400">eCFR Title 8</h3>
                <p className="text-sm text-gray-500">Electronic Code of Federal Regulations</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
            </a>
            <a 
              href="https://www.uscis.gov/policy-manual"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400">USCIS Policy Manual</h3>
                <p className="text-sm text-gray-500">Official agency guidance</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
            </a>
          </div>
        </section>

        {/* CTA to Sources */}
        <div className="glass-panel p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Want More Detail?</h3>
          <p className="text-gray-400 mb-4">
            View our comprehensive sources page with all legal authorities, landmark cases, and verification tips.
          </p>
          <Link 
            href="/sources"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <span>View All Sources</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> This page provides general information about U.S. citizenship law. 
            It is not legal advice. For advice about your specific situation, consult a licensed immigration attorney.
          </p>
        </div>
      </div>
    </main>
  )
}
