'use client'

import Link from 'next/link'
import { USCIS_FORMS } from '@/lib/legal/citizenship-law'
import { Navbar } from '@/components/Navbar'
import {
  FileText, ChevronRight, ExternalLink, DollarSign,
  Clock, Info, Shield, Users, BookOpen, Scale
} from 'lucide-react'

interface FormInfo {
  title: string
  formNumber: string
  use: string
  filingFee?: number
  biometricsFee?: number
  feeNote?: string
  processingTime?: string
  description?: string
  uscisUrl: string
}

const ALL_FORMS: FormInfo[] = [
  {
    title: USCIS_FORMS.N400.title,
    formNumber: USCIS_FORMS.N400.formNumber,
    use: USCIS_FORMS.N400.use,
    filingFee: USCIS_FORMS.N400.filingFee,
    biometricsFee: USCIS_FORMS.N400.biometricsFee,
    feeNote: USCIS_FORMS.N400.feeNote,
    processingTime: USCIS_FORMS.N400.processingTime,
    uscisUrl: 'https://www.uscis.gov/n-400'
  },
  {
    title: USCIS_FORMS.N600.title,
    formNumber: USCIS_FORMS.N600.formNumber,
    use: USCIS_FORMS.N600.use,
    filingFee: USCIS_FORMS.N600.filingFee,
    processingTime: USCIS_FORMS.N600.processingTime,
    description: USCIS_FORMS.N600.description,
    uscisUrl: 'https://www.uscis.gov/n-600'
  },
  {
    title: USCIS_FORMS.N600K.title,
    formNumber: USCIS_FORMS.N600K.formNumber,
    use: USCIS_FORMS.N600K.use,
    filingFee: USCIS_FORMS.N600K.filingFee,
    processingTime: USCIS_FORMS.N600K.processingTime,
    description: USCIS_FORMS.N600K.description,
    uscisUrl: 'https://www.uscis.gov/n-600k'
  },
  {
    title: USCIS_FORMS.N470.title,
    formNumber: USCIS_FORMS.N470.formNumber,
    use: USCIS_FORMS.N470.use,
    filingFee: USCIS_FORMS.N470.filingFee,
    processingTime: USCIS_FORMS.N470.processingTime,
    uscisUrl: 'https://www.uscis.gov/n-470'
  },
  {
    title: 'Medical Certification for Disability Exceptions',
    formNumber: 'N-648',
    use: 'To request waiver of English and/or civics requirement due to disability',
    filingFee: 0,
    feeNote: 'No fee (submitted with N-400)',
    uscisUrl: 'https://www.uscis.gov/n-648'
  },
  {
    title: 'Request for Fee Waiver',
    formNumber: 'I-912',
    use: 'Request exemption from USCIS filing fees based on income or hardship',
    filingFee: 0,
    feeNote: 'No fee to submit',
    uscisUrl: 'https://www.uscis.gov/i-912'
  }
]

const FORM_CATEGORIES: { title: string; icon: typeof Scale; forms: string[]; description: string }[] = [
  {
    title: 'Naturalization',
    icon: Scale,
    forms: ['N-400', 'N-470'],
    description: 'Applications for becoming a U.S. citizen through naturalization'
  },
  {
    title: 'Citizenship Proof',
    icon: Shield,
    forms: ['N-600', 'N-600K'],
    description: 'Applications to document existing citizenship (birth abroad or derivative)'
  },
  {
    title: 'Supporting Forms',
    icon: FileText,
    forms: ['N-648', 'I-912'],
    description: 'Fee waivers, disability accommodations, and other supporting documentation'
  }
]

export default function FormsGuidePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-28 pb-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/resources" className="hover:text-cyan-400 transition-colors">Resources</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-cyan-400">Forms Guide</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-green-200 to-green-400 bg-clip-text text-transparent">
                Forms Guide
              </h1>
              <p className="text-white/60">All USCIS forms related to U.S. citizenship applications</p>
            </div>
          </div>
        </div>

        {/* Quick Reference Notice */}
        <div className="mb-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
          <h3 className="text-cyan-400 font-semibold mb-2">📋 Quick Reference</h3>
          <p className="text-gray-300 text-sm">
            Most applicants only need <strong>Form N-400</strong> (naturalization) or <strong>Form N-600</strong> (proof of existing citizenship). 
            All forms are available for free download from <a href="https://www.uscis.gov/forms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">USCIS.gov</a>.
          </p>
        </div>

        {/* Forms by Category */}
        {FORM_CATEGORIES.map(category => {
          const categoryForms = ALL_FORMS.filter(f => category.forms.includes(f.formNumber))
          return (
            <section key={category.title} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-5 h-5 text-cyan-400" />
                <div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {categoryForms.map(form => (
                  <div key={form.formNumber} className="glass-panel p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap mb-2">
                          <span className="text-lg font-bold font-mono text-cyan-400">{form.formNumber}</span>
                          <h3 className="text-lg font-semibold text-white">{form.title}</h3>
                        </div>
                        <p className="text-sm text-gray-400 mb-3">{form.description || form.use}</p>

                        <div className="flex flex-wrap gap-4 text-sm">
                          {form.filingFee !== undefined && (
                            <div className="flex items-center gap-1.5">
                              <DollarSign className="w-4 h-4 text-green-400" />
                              <span className="text-gray-300">
                                {form.filingFee === 0 ? 'No fee' : `$${form.filingFee.toLocaleString()}`}
                                {form.biometricsFee ? ` + $${form.biometricsFee} biometrics` : ''}
                              </span>
                            </div>
                          )}
                          {form.processingTime && (
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-yellow-400" />
                              <span className="text-gray-300">{form.processingTime}</span>
                            </div>
                          )}
                        </div>
                        {form.feeNote && (
                          <p className="text-xs text-gray-500 mt-2 italic">{form.feeNote}</p>
                        )}
                      </div>

                      <a
                        href={form.uscisUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/10 transition-all"
                      >
                        View on USCIS
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {/* Filing Tips */}
        <div className="mb-8 glass-panel p-6">
          <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
            <Info className="w-5 h-5" /> Filing Tips
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong>Always use the latest version</strong> of each form. USCIS rejects outdated editions. Check the edition date in the bottom-left corner.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong>File online when available.</strong> N-400 can be filed online at <a href="https://myaccount.uscis.gov/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">myUSCIS</a>, which is faster and allows tracking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong>Fee waivers (I-912)</strong> are available for applicants receiving means-tested benefits or with income below 150% of the Federal Poverty Guidelines.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong>Military applicants</strong> pay no filing fee for N-400 when filing under INA § 328 or § 329.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-0.5">•</span>
              <span><strong>Keep copies</strong> of everything you submit. Send by certified mail or use online filing for delivery confirmation.</span>
            </li>
          </ul>
        </div>

        {/* Related Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/costs"
            className="flex-1 glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white group-hover:text-cyan-400">Cost Calculator</div>
              <div className="text-sm text-gray-500">Calculate total fees and waiver eligibility</div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
          </Link>
          <Link
            href="/resources/checklist"
            className="flex-1 glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div>
              <div className="font-semibold text-white group-hover:text-cyan-400">Requirements Checklist</div>
              <div className="text-sm text-gray-500">Track documents needed for your pathway</div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400" />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> Forms and fees are subject to change. Always verify current requirements on{' '}
            <a href="https://www.uscis.gov/forms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">USCIS.gov</a>.
            This is general information, not legal advice.
          </p>
        </div>
      </div>
    </main>
  )
}
