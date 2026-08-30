import Link from 'next/link'
import { ArrowRight, BookOpen, CheckCircle2, Globe2, Scale, ShieldCheck, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Project standard · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About CitizenApproved</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">CitizenApproved is a free educational project for understanding U.S. citizenship and naturalization law. It is designed to make primary sources easier to find, legal categories easier to distinguish, and changing policy easier to track.</p>
        </div>
      </section>

      <section className="pb-16 px-6"><div className="max-w-5xl mx-auto glass-panel p-8"><h2 className="text-2xl font-bold mb-4">The mission</h2><p className="text-gray-300 leading-relaxed mb-4">A person should be able to learn what rule applies today, where that rule comes from, what facts matter, what has changed, and what remains uncertain without first having to decode hundreds of pages of statutes, regulations, forms and policy guidance.</p><p className="text-gray-400">That does not mean reducing citizenship law to a simplistic eligibility score. Where the law depends on dates, historical statutes, custody, criminal history, travel, immigration status or other individualized facts, CitizenApproved explains the issue and points to the controlling sources rather than pretending to adjudicate the case.</p></div></section>

      <section className="py-16 px-6 bg-white/[0.02]"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="glass-panel p-7"><Scale className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Authority before rhetoric</h2><p className="text-gray-400">Current constitutional, statutory, regulatory and binding judicial authority is identified before proposals, advocacy or political argument.</p></div>
        <div className="glass-panel p-7"><ShieldCheck className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Primary-source verification</h2><p className="text-gray-400">Volatile facts such as fees, filing rules, testing requirements and agency practices carry verification dates and links to the government or court source.</p></div>
        <div className="glass-panel p-7"><Globe2 className="w-7 h-7 text-violet-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Translation-friendly writing</h2><p className="text-gray-400">Pages favor plain, literal English and defined legal terms so browser and assistive translation tools have a cleaner source text. We do not claim that an automated translation is legally authoritative.</p></div>
        <div className="glass-panel p-7"><BookOpen className="w-7 h-7 text-blue-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Education, not advocacy</h2><p className="text-gray-400">The goal is to explain what a policy does, why proponents support it, what credible criticisms exist, and which authority currently governs—not to recruit the reader to a political position.</p></div>
      </div></section>

      <section className="py-16 px-6"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6"><div className="glass-panel p-7"><CheckCircle2 className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-xl font-semibold mb-4">What this project is</h2><ul className="space-y-3 text-gray-300"><li>An educational guide to major U.S. citizenship and naturalization frameworks.</li><li>A current-policy ledger for rules and practices that change.</li><li>A bridge to statutes, regulations, court decisions and official government materials.</li><li>A public resource intended to be understandable without specialist training.</li></ul></div><div className="glass-panel p-7 border border-yellow-400/20"><TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" /><h2 className="text-xl font-semibold mb-4">What this project is not</h2><ul className="space-y-3 text-gray-300"><li>A law firm or government agency.</li><li>Legal advice or representation.</li><li>A guarantee that any person is eligible for a benefit or already a citizen.</li><li>A substitute for the current USCIS form instructions or a court order in an individual case.</li></ul></div></div></section>

      <section className="pb-20 px-6"><div className="max-w-5xl mx-auto glass-panel p-8"><h2 className="text-2xl font-bold mb-4">When individualized legal help matters</h2><p className="text-gray-300 mb-5">Criminal history, immigration violations, long absences, old acquisition or derivative-citizenship rules, disputed parentage, adoption and custody, prior removal proceedings, possible false claims to citizenship, denaturalization questions and other high-stakes facts can require individualized legal analysis.</p><div className="flex flex-wrap gap-5 text-sm"><a href="https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/find-legal-services" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS: Find legal services <ArrowRight className="inline w-4 h-4" /></a><Link href="/sources" className="text-cyan-300">Research methodology <ArrowRight className="inline w-4 h-4" /></Link><Link href="/updates" className="text-cyan-300">Current-policy ledger <ArrowRight className="inline w-4 h-4" /></Link></div></div></section>
    </main>
  )
}
