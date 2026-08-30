import Link from 'next/link'
import { ArrowRight, BadgeCheck, FileBadge2, Globe2, IdCard, Landmark, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CITIZENSHIP_FORM_FEES, formatReviewDate } from '@/lib/policy/current-policy'

const evidence = [
  ['U.S. birth certificate', 'Common primary evidence for a person born in a U.S. jurisdiction whose birth established citizenship, subject to the applicable citizenship law and record requirements.'],
  ['Valid, unexpired U.S. passport', 'A passport is a travel document and evidence of U.S. citizenship. USCIS policy treats a valid, unexpired passport as evidence when adjudicating a citizenship claim.'],
  ['Consular Report of Birth Abroad (FS-240)', 'Department of State documentation that a person born abroad acquired U.S. citizenship at birth. A CRBA does not expire.'],
  ['Certificate of Citizenship', 'USCIS evidence of citizenship acquired or derived through a parent. Form N-600 is generally the application for this certificate.'],
  ['Certificate of Naturalization', 'Evidence issued after a person naturalizes. Form N-565, not N-600, is generally used to replace or correct a naturalization or citizenship document.'],
] as const

export default function ProofPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Evidence of status · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">How do you prove U.S. citizenship?</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Citizenship is a legal status; a document is evidence of that status. Which document is available depends on how citizenship was obtained, where the person was born, and which agency has jurisdiction over the requested document.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {evidence.map(([title, text]) => (
            <article key={title} className="glass-panel p-7">
              <BadgeCheck className="w-7 h-7 text-green-400 mb-4" />
              <h2 className="text-xl font-semibold mb-3">{title}</h2>
              <p className="text-gray-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          <div className="glass-panel p-7">
            <Globe2 className="w-7 h-7 text-cyan-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Passport</h2>
            <p className="text-gray-400 mb-4">The Department of State adjudicates passport applications. A passport can prove citizenship and permits international travel, but it expires and must be renewed.</p>
            <a href="https://travel.state.gov/content/travel/en/passports.html" target="_blank" rel="noreferrer" className="text-cyan-300">State Department passports <ArrowRight className="inline w-4 h-4" /></a>
          </div>
          <div className="glass-panel p-7">
            <FileBadge2 className="w-7 h-7 text-violet-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Certificate of Citizenship</h2>
            <p className="text-gray-400 mb-4">Form N-600 documents a citizenship claim that already arose under the law. It is not an application to become a citizen through ordinary adult naturalization.</p>
            <div className="text-sm text-gray-500 mb-3">General fee: ${CITIZENSHIP_FORM_FEES.N600.online.toLocaleString()} online · ${CITIZENSHIP_FORM_FEES.N600.paper.toLocaleString()} paper; $0 and waiver categories may apply.</div>
            <a href="https://www.uscis.gov/n-600" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS Form N-600 <ArrowRight className="inline w-4 h-4" /></a>
          </div>
          <div className="glass-panel p-7">
            <IdCard className="w-7 h-7 text-pink-400 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Replacement certificate</h2>
            <p className="text-gray-400 mb-4">Form N-565 is used for specified replacement, correction and special-certificate requests involving naturalization or citizenship documents.</p>
            <a href="https://www.uscis.gov/n-565" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS Form N-565 <ArrowRight className="inline w-4 h-4" /></a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <Landmark className="w-7 h-7 text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Passport, CRBA and certificate can interact</h2>
            <p className="text-gray-300 mb-4">USCIS policy states that a valid, unexpired U.S. passport or CRBA may be submitted as evidence in an N-600 case. USCIS still examines whether the underlying citizenship was acquired properly. If USCIS finds evidence that a passport or CRBA was issued illegally, fraudulently or erroneously, only the Department of State has authority to revoke the passport or cancel the CRBA.</p>
            <a href="https://www.uscis.gov/policy-manual/volume-12-part-h-chapter-4" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS Policy Manual <ArrowRight className="inline w-4 h-4" /></a>
          </div>
          <div className="glass-panel p-8 border border-yellow-400/20">
            <TriangleAlert className="w-7 h-7 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">An expired document is a different evidentiary question</h2>
            <p className="text-gray-300">USCIS policy distinguishes a valid, unexpired passport from an expired one and notes that a passport is no longer conclusive evidence after expiration. Do not assume that an old passport, photocopy, Social Security record or voter registration independently proves a contested citizenship claim.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-5 text-sm">
          <Link href="/pathways/derivative" className="text-cyan-300">Citizenship through a parent <ArrowRight className="inline w-4 h-4" /></Link>
          <Link href="/documents" className="text-cyan-300">Evidence guide <ArrowRight className="inline w-4 h-4" /></Link>
          <a href="https://travel.state.gov/content/travel/en/international-travel/while-abroad/birth-abroad.html" target="_blank" rel="noreferrer" className="text-cyan-300">Consular Report of Birth Abroad <ArrowRight className="inline w-4 h-4" /></a>
        </div>
      </section>
    </main>
  )
}
