import Link from 'next/link'
import { Accessibility, ArrowRight, BookOpen, Clock3, FileSearch, Gavel, Globe2, Landmark, Scale, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const pathways = [
  ['Citizenship at Birth', 'Birth in the United States and acquisition at birth through U.S.-citizen parents.', '8 U.S.C. §§ 1401–1409', '/pathways/birthright'],
  ['Standard Naturalization', 'The ordinary five-year framework for qualifying lawful permanent residents.', 'INA 316 · 8 U.S.C. § 1427', '/pathways/naturalization'],
  ['Marriage Route', 'The three-year naturalization framework for qualifying spouses of U.S. citizens.', 'INA 319 · 8 U.S.C. § 1430', '/pathways/marriage'],
  ['Military Naturalization', 'Distinct rules for qualifying honorable service under INA 328 and INA 329.', '8 U.S.C. §§ 1439–1440', '/pathways/military'],
  ['Citizenship Through a Parent', 'Automatic INA 320 citizenship and the INA 322 process for qualifying children abroad.', '8 U.S.C. §§ 1431–1433', '/pathways/derivative'],
] as const

const principles = [
  [Scale, 'Current law first', 'The site distinguishes constitutional and statutory law, binding judicial decisions, regulations, agency policy, guidance and proposals.'],
  [ShieldCheck, 'Verified volatile facts', 'Fees, filing rules, civics-test versions and other changing facts carry a review date and link back to the controlling source.'],
  [Landmark, 'Official exit ramps', 'Consequential guidance ends with the USCIS, State, DOJ/EOIR, court, statute, regulation, or rulemaking source that actually controls the next step.'],
  [Accessibility, 'Accessible by design', 'Keyboard access, reduced motion, high zoom, screen readers, printing, and translation-friendly language are part of the primary experience—not a separate version.'],
] as const

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-300/50 bg-[#0d2024] text-cyan-100 text-sm mb-7"><BookOpen className="w-4 h-4" aria-hidden="true" />Policy and source review: {formatReviewDate()}</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-7"><span className="text-cyan-100">Understand U.S.</span><br /><span className="text-white">citizenship as it stands today.</span></h1>
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed mb-10">A free, source-first guide to citizenship law and naturalization—built to explain the rule, the date, the agency, the evidence, and the official source you should use next.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link href="/eligibility" className="px-8 py-4 rounded-xl bg-cyan-300 text-[#050508] font-semibold">Find the legal pathway <ArrowRight className="inline w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/help" className="px-8 py-4 rounded-xl border border-cyan-300/60 text-cyan-100 font-semibold">Find the official resource</Link>
            <Link href="/updates" className="px-8 py-4 rounded-xl border border-white/30 text-white font-semibold">See what changed</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6"><div className="max-w-6xl mx-auto"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">{principles.map(([Icon, title, text]) => <div key={title} className="glass-panel p-6"><Icon className="w-7 h-7 text-cyan-300 mb-4" aria-hidden="true" /><h2 className="text-lg font-semibold mb-2">{title}</h2><p className="text-sm text-gray-300">{text}</p></div>)}</div></div></section>

      <section className="py-20 px-6"><div className="max-w-6xl mx-auto"><div className="mb-10"><h2 className="text-3xl md:text-4xl font-bold mb-4">Major citizenship frameworks</h2><p className="text-gray-300 max-w-3xl">These are routing categories, not a claim that five cards can capture every historical or special nationality provision. Each page explains when dates or specialized statutes require a deeper analysis.</p></div><div className="grid md:grid-cols-2 gap-5">{pathways.map(([title, text, law, href]) => <Link key={title} href={href} className="glass-panel p-7 group"><div className="text-xs font-mono text-cyan-100 mb-3">{law}</div><h3 className="text-2xl font-semibold mb-3">{title}</h3><p className="text-gray-300 mb-5">{text}</p><span className="text-cyan-100">Open framework <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></span></Link>)}</div></div></section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8"><h2 className="text-3xl md:text-4xl font-bold mb-4">Practical guides</h2><p className="text-gray-300 max-w-3xl">Use these to understand the issue. Use the official-resource guide when you are ready to file, verify a current government instruction, find legal help, or work from outside the United States.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/documents" className="glass-panel p-6"><FileSearch className="w-7 h-7 text-violet-300 mb-4" aria-hidden="true" /><h3 className="text-lg font-semibold mb-2">Evidence</h3><p className="text-sm text-gray-300">What is baseline, what is conditional, and where the current instructions control.</p></Link>
            <Link href="/costs" className="glass-panel p-6"><Scale className="w-7 h-7 text-green-300 mb-4" aria-hidden="true" /><h3 className="text-lg font-semibold mb-2">Fees</h3><p className="text-sm text-gray-300">Current amounts, filing methods, reduced fees, waivers, exemptions and proposals.</p></Link>
            <Link href="/civics" className="glass-panel p-6"><BookOpen className="w-7 h-7 text-pink-300 mb-4" aria-hidden="true" /><h3 className="text-lg font-semibold mb-2">Civics test</h3><p className="text-sm text-gray-300">The filing-date split between the 2008 and 2025 tests with official study sources.</p></Link>
            <Link href="/processing" className="glass-panel p-6"><Clock3 className="w-7 h-7 text-yellow-300 mb-4" aria-hidden="true" /><h3 className="text-lg font-semibold mb-2">Processing</h3><p className="text-sm text-gray-300">How to use live USCIS data without mistaking an estimate for a promise.</p></Link>
            <Link href="/glossary" className="glass-panel p-6"><BookOpen className="w-7 h-7 text-cyan-300 mb-4" aria-hidden="true" /><h3 className="text-lg font-semibold mb-2">Plain-language glossary</h3><p className="text-sm text-gray-300">Definitions for terms whose legal meaning can disappear in ordinary language or translation.</p></Link>
            <Link href="/accessibility" className="glass-panel p-6"><Globe2 className="w-7 h-7 text-blue-300 mb-4" aria-hidden="true" /><h3 className="text-lg font-semibold mb-2">Language & accessibility</h3><p className="text-sm text-gray-300">Official multilingual resources, disability access, reduced motion, print, keyboard and translation guidance.</p></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="glass-panel p-8 md:p-10">
            <Landmark className="w-8 h-8 text-cyan-300 mb-5" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Go to the government source that owns the question.</h2>
            <p className="text-gray-300 mb-5">USCIS, the Department of State, DOJ/EOIR, Congress, regulators, and courts do different jobs. The official-help hub explains which one to use for filing, proof of citizenship, a case inquiry, language support, disability accommodations, legal representation, or primary-law research.</p>
            <Link href="/help" className="inline-flex items-center gap-2 text-cyan-100 underline underline-offset-4">Open official help <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
          <div className="glass-panel p-8 md:p-10">
            <Globe2 className="w-8 h-8 text-violet-300 mb-5" aria-hidden="true" />
            <h2 className="text-3xl font-bold mb-4">Global audience, U.S. legal subject.</h2>
            <p className="text-gray-300 mb-5">Readers abroad, multilingual families, educators, researchers, people using assistive technology, and applicants with limited bandwidth should be able to reach the same core information without a separate “special” version.</p>
            <Link href="/accessibility" className="inline-flex items-center gap-2 text-cyan-100 underline underline-offset-4">Language and accessibility approach <ArrowRight className="w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6"><div className="max-w-6xl mx-auto glass-panel p-8 md:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center"><div><Gavel className="w-7 h-7 text-cyan-300 mb-4" aria-hidden="true" /><h2 className="text-3xl font-bold mb-4">Verify us.</h2><p className="text-gray-300 max-w-3xl mb-4">CitizenApproved is designed so a reader can inspect the source beneath a consequential claim. The methodology explains how statutes, court decisions, regulations, agency policy and proposed rules are treated differently.</p><p className="text-sm text-gray-300">Educational information, not legal advice. CitizenApproved is not affiliated with USCIS or the U.S. government.</p></div><div className="flex flex-col gap-3"><Link href="/sources" className="px-6 py-3 rounded-lg border border-cyan-300/50 text-cyan-100">Source methodology <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link><Link href="/legal" className="px-6 py-3 rounded-lg border border-white/20 text-white">Legal foundation <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link></div></div></section>
    </main>
  )
}
