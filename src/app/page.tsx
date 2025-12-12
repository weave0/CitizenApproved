'use client'

import { Shield, BookOpen, Users, Scale, Clock, Award, ChevronRight, Star, FileText } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const pathways = [
  {
    id: 'birthright',
    title: 'Citizenship at Birth',
    icon: Star,
    description: 'Born in the U.S. or to U.S. citizen parents',
    legalBasis: '8 U.S.C. § 1401',
    color: 'from-yellow-400 to-orange-500',
    href: '/pathways/birthright'
  },
  {
    id: 'naturalization',
    title: 'Naturalization',
    icon: Award,
    description: 'Standard pathway for permanent residents',
    legalBasis: '8 U.S.C. § 1427',
    color: 'from-cyan-400 to-blue-500',
    href: '/pathways/naturalization'
  },
  {
    id: 'marriage',
    title: 'Marriage to U.S. Citizen',
    icon: Users,
    description: 'Expedited pathway through marriage',
    legalBasis: '8 U.S.C. § 1430',
    color: 'from-pink-400 to-rose-500',
    href: '/pathways/marriage'
  },
  {
    id: 'military',
    title: 'Military Service',
    icon: Shield,
    description: 'Naturalization through armed forces service',
    legalBasis: '8 U.S.C. § 1439-1440',
    color: 'from-green-400 to-emerald-500',
    href: '/pathways/military'
  },
  {
    id: 'derivative',
    title: 'Derivative Citizenship',
    icon: BookOpen,
    description: 'Automatic citizenship for qualifying children',
    legalBasis: '8 U.S.C. § 1431-1433',
    color: 'from-purple-400 to-violet-500',
    href: '/pathways/derivative'
  },
]

const stats = [
  { label: 'Pathways Documented', value: '5+' },
  { label: 'Legal Citations', value: '100+' },
  { label: 'USC Sections Referenced', value: '50+' },
  { label: 'CFR Regulations', value: '8 CFR' },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-20 px-6 relative overflow-hidden">
        {/* Hero glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[var(--neon-cyan)] opacity-20 blur-[150px] top-[-200px] left-[10%] animate-float" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[var(--neon-magenta)] opacity-15 blur-[150px] top-[-100px] right-[10%] animate-float animation-delay-3000" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#8080ff] opacity-10 blur-[120px] bottom-[20%] left-[30%] animate-float animation-delay-5000" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--bg-medium)] to-[var(--bg-light)] border border-[var(--glass-border)] mb-8 hover:border-[var(--primary)]/30 transition-colors duration-300">
              <FileText className="w-4 h-4 text-[var(--primary)]" />
              <span className="text-sm text-[var(--text-secondary)]">
                Based on Title 8 U.S. Code &amp; Immigration and Nationality Act
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="gradient-text">Your Path to</span>
              <br />
              <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">U.S. Citizenship</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed">
              Comprehensive, legally accurate documentation of every pathway to becoming
              a United States citizen. Built on the foundation of federal law.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                href="/pathways"
                className="group px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-[length:200%_auto] text-white font-semibold hover:shadow-[0_0_50px_rgba(0,240,255,0.4)] transition-all duration-500 flex items-center space-x-3 hover:bg-right"
              >
                <span>Explore Pathways</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/legal"
                className="px-10 py-4 rounded-xl border border-[var(--glass-border)] text-white font-semibold hover:bg-[var(--bg-medium)] hover:border-[var(--primary)]/30 transition-all duration-300 backdrop-blur-sm"
              >
                View Legal Foundation
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[var(--bg-deep)] via-[var(--bg-deepest)] to-[var(--bg-deep)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Citizenship Pathways</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each pathway is governed by specific sections of Title 8 of the United States Code
              and corresponding regulations in 8 CFR.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathways.map((pathway) => (
              <Link 
                key={pathway.id}
                href={pathway.href}
                className="group gradient-border p-8 hover:scale-[1.02] transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pathway.color} flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                  <pathway.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--primary)] transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  {pathway.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[var(--primary)] bg-[var(--bg-medium)] px-4 py-2 rounded-lg border border-[var(--primary)]/20">
                    {pathway.legalBasis}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[var(--glass-border)] flex items-center justify-center group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]/10 transition-all">
                    <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Foundation Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel p-10 md:p-14 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--neon-cyan)] opacity-5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--neon-magenta)] opacity-5 blur-[100px] rounded-full" />
            
            <div className="grid md:grid-cols-2 gap-14 items-center relative">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="gradient-text">Built on Legal Accuracy</span>
                </h2>
                <p className="text-[var(--text-secondary)] mb-8 text-lg leading-relaxed">
                  Every piece of information on this platform is directly sourced from and 
                  cross-referenced with federal law. Our primary sources include:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow">
                      <Scale className="w-5 h-5 text-[var(--bg-deepest)]" />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-lg">Immigration and Nationality Act (INA)</span>
                      <p className="text-[var(--text-secondary)] mt-1">
                        The primary federal immigration statute of the United States
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-dark)] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-shadow">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-lg">Title 8 U.S. Code</span>
                      <p className="text-[var(--text-secondary)] mt-1">
                        Aliens and Nationality - Sections 1101-1537
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--success)] to-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-shadow">
                      <FileText className="w-5 h-5 text-[var(--bg-deepest)]" />
                    </div>
                    <div>
                      <span className="font-semibold text-white text-lg">8 CFR (Code of Federal Regulations)</span>
                      <p className="text-[var(--text-secondary)] mt-1">
                        DHS and USCIS implementation regulations
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[var(--bg-medium)] to-[var(--bg-deep)] rounded-2xl p-8 font-mono text-sm border border-[var(--glass-border)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent" />
                <div className="relative">
                  <div className="text-[var(--text-muted)] mb-6 flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-4">// Primary Legal Foundation</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-[var(--secondary)]">const</span>{' '}
                      <span className="text-[var(--primary)]">INA</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-[var(--accent)]">chapter</span>:{' '}
                      <span className="text-green-400">&quot;12&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[var(--accent)]">subchapter</span>:{' '}
                      <span className="text-green-400">&quot;III - Nationality&quot;</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[var(--accent)]">sections</span>: [
                    </div>
                    <div className="pl-8 text-green-400 space-y-1">
                      <div>&quot;§1401 - Birth&quot;,</div>
                      <div>&quot;§1427 - Requirements&quot;,</div>
                      <div>&quot;§1430 - Marriage&quot;,</div>
                      <div>&quot;§1439 - Military&quot;,</div>
                      <div>&quot;§1431 - Derivative&quot;</div>
                    </div>
                    <div className="pl-4">]</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[var(--bg-deepest)] via-[var(--bg-deep)] to-[var(--bg-deepest)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Interactive Tools</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Free tools to help you understand, prepare, and navigate your citizenship journey.
              All information written in plain English for easy translation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/eligibility" className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">✓</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300">Eligibility Wizard</h3>
              <p className="text-sm text-[var(--text-secondary)]">Answer questions to find which pathway fits your situation</p>
            </Link>

            <Link href="/civics" className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300">Civics Test Practice</h3>
              <p className="text-sm text-[var(--text-secondary)]">All 128 official questions with study mode and practice tests</p>
            </Link>

            <Link href="/documents" className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300">Document Checklist</h3>
              <p className="text-sm text-[var(--text-secondary)]">Know exactly what documents you need for your pathway</p>
            </Link>

            <Link href="/costs" className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300">Cost Calculator</h3>
              <p className="text-sm text-[var(--text-secondary)]">Calculate fees and check if you qualify for a fee waiver</p>
            </Link>

            <Link href="/processing" className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300">Processing Times</h3>
              <p className="text-sm text-[var(--text-secondary)]">Current wait times and what to expect at each step</p>
            </Link>

            <Link href="/why-so-long" className="glass-panel p-6 hover:border-orange-500/30 transition-all group border-orange-500/20">
              <div className="text-3xl mb-4">⏳</div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2 group-hover:text-orange-300">Why So Long?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Plain English explanation of delays and how to speed up your case</p>
            </Link>

            <Link href="/flowchart" className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300">Visual Flowchart</h3>
              <p className="text-sm text-[var(--text-secondary)]">Interactive map of the naturalization process</p>
            </Link>

            <Link href="/bottlenecks" className="glass-panel p-6 hover:border-cyan-500/30 transition-all group">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300">Bottleneck Analysis</h3>
              <p className="text-sm text-[var(--text-secondary)]">System-level issues and what is being done about them</p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <p className="text-[var(--text-muted)] text-sm">
              🌐 All tools are free and available in 100+ languages via translation
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[var(--bg-deep)] to-[var(--bg-deepest)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Begin Your Journey?</span>
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Explore our comprehensive documentation of citizenship pathways, 
            requirements, and timelines—all backed by authoritative legal sources.
          </p>
          <Link 
            href="/pathways"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <span>Start Exploring</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold gradient-text">CitizenApproved</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Legally accurate citizenship pathway information based on federal law.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Pathways</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><Link href="/pathways/naturalization" className="hover:text-white">Naturalization</Link></li>
                <li><Link href="/pathways/birthright" className="hover:text-white">Citizenship at Birth</Link></li>
                <li><Link href="/pathways/marriage" className="hover:text-white">Marriage</Link></li>
                <li><Link href="/pathways/military" className="hover:text-white">Military Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal Sources</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><a href="https://uscode.house.gov/browse/prelim@title8&edition=prelim" target="_blank" rel="noopener noreferrer" className="hover:text-white">U.S. Code (Official)</a></li>
                <li><a href="https://www.ecfr.gov/current/title-8" target="_blank" rel="noopener noreferrer" className="hover:text-white">8 CFR (eCFR)</a></li>
                <li><a href="https://www.uscis.gov/policy-manual" target="_blank" rel="noopener noreferrer" className="hover:text-white">USCIS Policy Manual</a></li>
                <li><Link href="/sources" className="hover:text-white">All Sources →</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><Link href="/resources/timeline" className="hover:text-white">Timeline Calculator</Link></li>
                <li><Link href="/resources/checklist" className="hover:text-white">Requirements Checklist</Link></li>
                <li><Link href="/resources/forms" className="hover:text-white">Forms Guide</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[var(--glass-border)] text-center text-sm text-[var(--text-muted)]">
            <p className="mb-2">
              ⚠️ <strong>Legal Disclaimer:</strong> This website provides general information based on federal law.
              It is not legal advice. Consult a licensed immigration attorney for your specific situation.
            </p>
            <p className="mb-2">
              © {new Date().getFullYear()} CitizenApproved. Information sourced from official government sources including{' '}
              <a href="https://uscode.house.gov/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]">
                U.S. Code
              </a>,{' '}
              <a href="https://www.ecfr.gov/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]">
                eCFR
              </a>,{' '}
              <a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]">
                USCIS
              </a>, and{' '}
              <a href="https://www.law.cornell.edu/uscode/text/8" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)]">
                Cornell LII
              </a>.
            </p>
            <p>
              <Link href="/sources" className="text-[var(--primary)] hover:text-cyan-300">
                View all legal sources and authority hierarchy →
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
