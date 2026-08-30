import Link from 'next/link'
import { ArrowRight, BarChart3, FileWarning, Laptop2, SearchCheck, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const measures = [
  [BarChart3, 'Processing performance', 'USCIS publishes live processing-time indicators and historical national medians. These are better evidence than a home-grown “severity score” because the underlying measure and time period are identifiable.', 'https://egov.uscis.gov/processing-times/'],
  [ShieldCheck, 'Program integrity', 'GAO has repeatedly evaluated USCIS fraud-risk management. In February 2026, GAO reported that USCIS was still working to implement prior recommendations for regular fraud-risk assessments, an antifraud strategy and risk-based effectiveness evaluation.', 'https://www.gao.gov/products/gao-26-108903'],
  [Laptop2, 'Digital intake', 'The Aug. 11, 2026 mandatory e-filing interim final rule gives USCIS a framework to require electronic filing for eligible benefit requests after notice, while providing an undue-hardship waiver process.', 'https://www.federalregister.gov/documents/2026/08/11/2026-16313/mandatory-electronic-filing-e-filing'],
  [SearchCheck, 'Case assistance and customer friction', 'The DHS Citizenship and Immigration Services Ombudsman reports recurring problems applicants and petitioners experience with USCIS and provides an independent source for studying operational friction.', 'https://www.dhs.gov/cisombudsman'],
] as const

export default function BottlenecksPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">System-performance research · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How to study USCIS bottlenecks without inventing a scorecard</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">The old page ranked internally defined “critical bottlenecks” and counted proposed technology solutions as if those counts were measurements. This replacement starts with evidence the public can inspect: processing data, independent oversight, agency operations and rule changes.</p>
        </div>
      </section>

      <section className="pb-16 px-6"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">{measures.map(([Icon, title, text, href]) => <a key={title} href={href} target="_blank" rel="noreferrer" className="glass-panel p-7"><Icon className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-xl font-semibold mb-3">{title}</h2><p className="text-gray-400 mb-4">{text}</p><span className="text-cyan-300 text-sm">Inspect source <ArrowRight className="inline w-4 h-4" /></span></a>)}</div></section>

      <section className="py-16 px-6 bg-white/[0.02]"><div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8"><div className="glass-panel p-8"><FileWarning className="w-7 h-7 text-yellow-400 mb-4" /><h2 className="text-2xl font-bold mb-4">Different problems require different metrics</h2><ul className="space-y-3 text-gray-300"><li><strong>Backlog:</strong> pending inventory and age distribution.</li><li><strong>Speed:</strong> completion time by form/category/office.</li><li><strong>Quality:</strong> errors, remands, rework, requests for evidence and complaint patterns.</li><li><strong>Integrity:</strong> fraud-risk controls and the burden those controls place on legitimate filings.</li><li><strong>Access:</strong> language, disability, digital access, legal-service access and customer-service barriers.</li><li><strong>Cost:</strong> filing fees, agency unit costs and applicant compliance burden.</li></ul></div><div className="glass-panel p-8"><SearchCheck className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-2xl font-bold mb-4">CitizenApproved&apos;s rule for system claims</h2><p className="text-gray-300 mb-4">A claim about USCIS performance should identify a source, measurement period and unit. A policy proposal should be labeled a proposal. An anecdote can illustrate experience but cannot establish a national rate.</p><p className="text-gray-400">That standard makes the analysis less dramatic—and much more useful.</p></div></div></section>

      <section className="py-16 px-6"><div className="max-w-6xl mx-auto glass-panel p-8"><h2 className="text-2xl font-bold mb-4">What the current evidence does show</h2><p className="text-gray-300 mb-4">USCIS processing performance has moved substantially over time, which is why static wait-time claims age quickly. At the same time, independent oversight continues to examine fraud-risk management, records, technology, customer service and other operational systems. The agency is also moving toward more electronic intake under the August 2026 rule. None of those facts proves that one technology or staffing change is the single “solution.”</p><div className="flex flex-wrap gap-5 text-sm"><Link href="/processing" className="text-cyan-300">Processing guide <ArrowRight className="inline w-4 h-4" /></Link><Link href="/sources" className="text-cyan-300">Source methodology <ArrowRight className="inline w-4 h-4" /></Link><Link href="/updates" className="text-cyan-300">Current policy ledger <ArrowRight className="inline w-4 h-4" /></Link></div></div></section>
    </main>
  )
}
