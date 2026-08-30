import Link from 'next/link'
import { ArrowRight, Award, Baby, BookOpen, HeartHandshake, Medal, Route } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { CITIZENSHIP_FORM_FEES, N400_FEES, formatReviewDate } from '@/lib/policy/current-policy'

const pathways = [
  {
    icon: Baby,
    title: 'Citizenship at birth',
    law: '14th Amendment · 8 U.S.C. §§ 1401–1409',
    description: 'Birth in the United States and citizenship acquired at birth abroad through U.S.-citizen parentage. Historical birth dates can change the transmission rule.',
    detail: 'Citizenship can arise automatically at birth. A later passport, CRBA or certificate is evidence of the status; it is not the event that creates citizenship.',
    href: '/pathways/birthright',
    fee: 'No citizenship-creation fee; document fees depend on the evidence requested.',
  },
  {
    icon: Award,
    title: 'Standard naturalization',
    law: 'INA 316 · 8 U.S.C. § 1427',
    description: 'The ordinary naturalization framework for qualifying lawful permanent residents, generally using a five-year statutory period.',
    detail: 'Residence, physical presence, good moral character, English/civics unless excepted, attachment and the oath each have their own rules.',
    href: '/pathways/naturalization',
    fee: `$${N400_FEES.online} online · $${N400_FEES.paper} paper; reduced, waiver and $0 military categories are separate.`,
  },
  {
    icon: HeartHandshake,
    title: 'Naturalization through marriage',
    law: 'INA 319(a) · 8 U.S.C. § 1430',
    description: 'A three-year statutory period for qualifying lawful permanent residents married to U.S. citizens.',
    detail: 'The route adds spouse-citizenship and marital-union requirements; marriage itself does not confer citizenship.',
    href: '/pathways/marriage',
    fee: `$${N400_FEES.online} online · $${N400_FEES.paper} paper for the general N-400 filing category.`,
  },
  {
    icon: Medal,
    title: 'Military naturalization',
    law: 'INA 328–329 · 8 U.S.C. §§ 1439–1440',
    description: 'Separate statutory routes for qualifying honorable U.S. military service, including service during designated hostilities.',
    detail: 'INA 328 and INA 329 are not interchangeable; service length, reserve status, admission and timing rules differ.',
    href: '/pathways/military',
    fee: '$0 Form N-400 for qualifying INA 328/329 military applicants under the current fee schedule.',
  },
  {
    icon: BookOpen,
    title: 'Citizenship through a parent after birth',
    law: 'INA 320–322 · 8 U.S.C. §§ 1431–1433',
    description: 'Automatic citizenship under INA 320 for qualifying children and an application-based INA 322 process for qualifying children residing abroad.',
    detail: 'Custody, residence, immigration status, age and historical effective dates can be decisive. Older claims may be governed by repealed law.',
    href: '/pathways/derivative',
    fee: `General N-600/N-600K fee: $${CITIZENSHIP_FORM_FEES.N600.online.toLocaleString()} online · $${CITIZENSHIP_FORM_FEES.N600.paper.toLocaleString()} paper; $0 and waiver categories may apply.`,
  },
] as const

export default function PathwaysPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Citizenship frameworks · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Start with the source of citizenship</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">These are the major frameworks CitizenApproved uses to route research. They are not a claim that U.S. nationality law contains only five possible statutory situations; historical and special provisions can require a deeper analysis.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-5">
          {pathways.map((pathway) => {
            const Icon = pathway.icon
            return (
              <article key={pathway.title} className="glass-panel p-7 md:p-8">
                <div className="grid lg:grid-cols-[72px_1fr] gap-6">
                  <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center"><Icon className="w-7 h-7 text-cyan-300" /></div>
                  <div>
                    <div className="text-xs font-mono text-cyan-300 mb-2">{pathway.law}</div>
                    <h2 className="text-2xl font-bold mb-3">{pathway.title}</h2>
                    <p className="text-gray-300 mb-3">{pathway.description}</p>
                    <p className="text-gray-400 mb-5">{pathway.detail}</p>
                    <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4 text-sm text-gray-300 mb-5"><strong className="text-white">Current fee context:</strong> {pathway.fee}</div>
                    <Link href={pathway.href} className="text-cyan-300">Open framework <ArrowRight className="inline w-4 h-4" /></Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Link href="/eligibility" className="glass-panel p-7"><Route className="w-7 h-7 text-green-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Not sure where to start?</h2><p className="text-gray-400 mb-4">Use pathway triage to identify which statute to investigate without pretending a few clicks determine legal status.</p><span className="text-cyan-300">Pathway triage <ArrowRight className="inline w-4 h-4" /></span></Link>
          <Link href="/topics/historical-law" className="glass-panel p-7"><BookOpen className="w-7 h-7 text-violet-400 mb-4" /><h2 className="text-xl font-semibold mb-3">Older citizenship claims</h2><p className="text-gray-400 mb-4">Learn how birth dates, parental naturalization dates and statutory effective dates determine which version of nationality law applies.</p><span className="text-cyan-300">Historical-law guide <ArrowRight className="inline w-4 h-4" /></span></Link>
        </div>
      </section>
    </main>
  )
}
