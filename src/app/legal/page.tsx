import Link from 'next/link'
import { ArrowRight, BookOpen, ExternalLink, Gavel, Landmark, Scale } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const sections = [
  ['8 U.S.C. § 1101', 'Definitions', 'Core INA definitions used throughout immigration and nationality law.'],
  ['8 U.S.C. § 1401', 'Nationals and citizens of United States at birth', 'Citizenship at birth in the United States and several acquisition-at-birth categories.'],
  ['8 U.S.C. § 1409', 'Children born out of wedlock', 'Additional rules for certain citizenship-at-birth claims based on parentage and date of birth.'],
  ['8 U.S.C. § 1421', 'Naturalization authority', 'Authority and jurisdiction for naturalization.'],
  ['8 U.S.C. § 1423', 'English and civics requirements', 'Statutory basis for language and knowledge requirements and exceptions.'],
  ['8 U.S.C. § 1427', 'Requirements of naturalization', 'The ordinary five-year naturalization framework.'],
  ['8 U.S.C. § 1429', 'Prerequisite to naturalization', 'Lawful admission, burden and interaction with removal proceedings.'],
  ['8 U.S.C. § 1430', 'Married persons and other special categories', 'Includes the three-year spouse route and other provisions in INA 319.'],
  ['8 U.S.C. § 1431', 'Automatic citizenship for qualifying children', 'Modern INA 320 rule for children born outside the United States who satisfy the statutory conditions.'],
  ['8 U.S.C. § 1433', 'Children regularly residing outside the United States', 'INA 322 application-based citizenship process for qualifying children abroad.'],
  ['8 U.S.C. §§ 1439–1440', 'Military naturalization', 'INA 328 and INA 329 military-service routes.'],
  ['8 U.S.C. § 1448', 'Oath of Allegiance', 'Statutory oath and permitted modifications.'],
  ['8 U.S.C. § 1451', 'Revocation of naturalization', 'Federal-court denaturalization authority and specified grounds.'],
] as const

const layers = [
  [Landmark, 'Constitution', 'Article I gives Congress naturalization power; the Fourteenth Amendment contains the Citizenship Clause.'],
  [BookOpen, 'Statutes', 'Congress enacted the Immigration and Nationality Act and related nationality laws, largely codified in Title 8 of the U.S. Code.'],
  [Gavel, 'Judicial interpretation', 'Courts determine what the Constitution, statutes and regulations mean in cases before them. The scope of binding precedent depends on the court.'],
  [Scale, 'Regulations and agency administration', 'DHS regulations in Title 8 C.F.R. implement the statutes; USCIS forms, instructions and policy explain current agency administration.'],
] as const

export default function LegalPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Legal foundation · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Where U.S. citizenship law comes from</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">Citizenship questions can involve constitutional text, statutes enacted at different times, regulations, judicial decisions and current USCIS administration. The controlling authority can depend on the date and facts of the claim.</p>
        </div>
      </section>

      <section className="pb-16 px-6"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">{layers.map(([Icon, title, text]) => <div key={title} className="glass-panel p-7"><Icon className="w-7 h-7 text-cyan-400 mb-4" /><h2 className="text-xl font-semibold mb-3">{title}</h2><p className="text-gray-400">{text}</p></div>)}</div></section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-7">Key nationality and naturalization statutes</h2>
          <div className="space-y-3">{sections.map(([code, title, text]) => {
            const section = code.match(/§+\s*(\d+)/)?.[1]
            const href = section ? `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section${section}` : 'https://uscode.house.gov/browse/prelim@title8&edition=prelim'
            return <a key={code} href={href} target="_blank" rel="noreferrer" className="glass-panel p-5 grid md:grid-cols-[190px_1fr] gap-4 block"><div className="font-mono text-cyan-300">{code}</div><div><h3 className="font-semibold mb-1">{title}</h3><p className="text-sm text-gray-400">{text}</p></div></a>
          })}</div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8"><h2 className="text-2xl font-bold mb-4">Current regulations</h2><p className="text-gray-300 mb-5">The electronic Code of Federal Regulations is the current editorial compilation of federal regulations. For citizenship and naturalization, relevant provisions appear throughout Title 8, including Parts 312, 316, 319, 320, 322, 328, 329, 335 and 337.</p><a href="https://www.ecfr.gov/current/title-8" target="_blank" rel="noreferrer" className="text-cyan-300">Open Title 8 eCFR <ExternalLink className="inline w-4 h-4" /></a></div>
          <div className="glass-panel p-8"><h2 className="text-2xl font-bold mb-4">Current USCIS administration</h2><p className="text-gray-300 mb-5">Volume 12 of the USCIS Policy Manual covers citizenship and naturalization. Forms and instructions establish filing mechanics and evidence expectations; the current G-1055 supplies fees. Those administrative materials should be read consistently with controlling law.</p><a href="https://www.uscis.gov/policy-manual/volume-12" target="_blank" rel="noreferrer" className="text-cyan-300">USCIS Policy Manual, Volume 12 <ExternalLink className="inline w-4 h-4" /></a></div>
        </div>
      </section>

      <section className="pb-20 px-6"><div className="max-w-6xl mx-auto glass-panel p-8"><h2 className="text-2xl font-bold mb-4">Authority is not one simple ladder</h2><p className="text-gray-300 mb-5">A Supreme Court holding interpreting the Constitution is not subordinate to an agency policy manual. A circuit precedent may bind within that circuit. A valid regulation has legal force but cannot override the statute that authorizes it. For a fuller explanation of how CitizenApproved weighs sources, use the methodology page.</p><Link href="/sources" className="text-cyan-300">Source methodology <ArrowRight className="inline w-4 h-4" /></Link></div></section>
    </main>
  )
}
