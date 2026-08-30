import Link from 'next/link'
import { AlertTriangle, ArrowRight, Baby, BadgeCheck, Globe2, HeartHandshake, Medal, Route } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const routes = [
  {
    icon: Baby,
    title: 'Born in the United States',
    question: 'Were you born in the United States and subject to its jurisdiction?',
    detail: 'Start with the Fourteenth Amendment and 8 U.S.C. § 1401. After Trump v. Barbara (June 30, 2026), birth in the United States to parents unlawfully or temporarily present remains citizenship at birth under the Court’s holding, subject to the recognized jurisdiction exception such as children of certain diplomats.',
    href: '/pathways/birthright',
  },
  {
    icon: Globe2,
    title: 'Born abroad to a U.S. citizen parent',
    question: 'Could you have acquired citizenship at birth through a parent?',
    detail: 'The answer depends on the statute in effect on your date of birth, the parents’ citizenship and marital status, and the U.S. citizen parent’s residence or physical presence before the birth.',
    href: '/pathways/birthright',
  },
  {
    icon: BadgeCheck,
    title: 'Citizenship through a parent after birth',
    question: 'Did a parent become or already hold U.S. citizenship before you turned 18?',
    detail: 'Modern INA 320 cases can produce automatic citizenship when all statutory conditions are met. Older cases may be governed by former law. Children residing abroad may instead use INA 322 and Form N-600K.',
    href: '/pathways/derivative',
  },
  {
    icon: HeartHandshake,
    title: 'Lawful permanent resident married to a U.S. citizen',
    question: 'Have you been an LPR and living in marital union with the same U.S. citizen spouse for the required period?',
    detail: 'INA 319(a) can reduce the ordinary five-year residence period to three years, but it adds spouse-citizenship and marital-union requirements and generally requires the marriage to continue through naturalization.',
    href: '/pathways/marriage',
  },
  {
    icon: Medal,
    title: 'Current or former U.S. service member',
    question: 'Do you have qualifying honorable U.S. military service?',
    detail: 'Check both INA 328 and INA 329. They are different routes: one-year honorable service under INA 328 versus qualifying service during designated hostilities under INA 329.',
    href: '/pathways/military',
  },
  {
    icon: Route,
    title: 'Lawful permanent resident',
    question: 'Have you held LPR status long enough for ordinary naturalization?',
    detail: 'INA 316 is the standard five-year route, generally requiring five years of continuous residence, 30 months of physical presence, state/district residence, good moral character, English/civics unless excepted, attachment, and the oath.',
    href: '/pathways/naturalization',
  },
]

export default function EligibilityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Pathway triage · verified {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Which citizenship law should you investigate first?</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">A yes/no wizard can produce false certainty because U.S. citizenship law depends on dates, status, custody, travel, parentage and historical statutes. CitizenApproved now uses this page as a triage map: identify the likely legal route, then verify the actual elements on the pathway page and primary sources.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {routes.map(route => {
            const Icon = route.icon
            return (
              <Link key={route.title} href={route.href} className="glass-panel p-7 group hover:border-cyan-400/30 transition-colors">
                <Icon className="w-7 h-7 text-cyan-400 mb-4" />
                <h2 className="text-xl font-semibold mb-2">{route.title}</h2>
                <p className="text-white/80 font-medium mb-3">{route.question}</p>
                <p className="text-gray-400 mb-5">{route.detail}</p>
                <span className="text-cyan-300">Open the pathway <ArrowRight className="inline w-4 h-4" /></span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8 border border-yellow-400/20">
            <AlertTriangle className="w-7 h-7 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Cases that should not be reduced to a generic wizard</h2>
            <ul className="space-y-3 text-gray-300">
              <li>Long absences from the United States or possible abandonment of residence.</li>
              <li>Arrests, convictions, probation, immigration violations or possible false claims to citizenship.</li>
              <li>Older derivative/acquisition cases governed by repealed nationality statutes.</li>
              <li>Adoption, legitimation, disputed parentage or complex custody histories.</li>
              <li>Prior removal proceedings, rescission, denaturalization issues or uncertainty about LPR status.</li>
            </ul>
          </div>
          <div className="glass-panel p-8">
            <h2 className="text-2xl font-bold mb-4">What this tool can tell you</h2>
            <p className="text-gray-300 mb-4">It can identify the statutes and USCIS material most likely to answer your question. It cannot determine eligibility from a handful of clicks, and CitizenApproved will not label someone “eligible” when important facts have not been tested against the law.</p>
            <div className="space-y-3 text-sm">
              <Link href="/documents" className="block text-cyan-300">Evidence guide <ArrowRight className="inline w-4 h-4" /></Link>
              <Link href="/costs" className="block text-cyan-300">Current filing fees <ArrowRight className="inline w-4 h-4" /></Link>
              <Link href="/civics" className="block text-cyan-300">Current civics-test rules <ArrowRight className="inline w-4 h-4" /></Link>
              <Link href="/updates" className="block text-cyan-300">Current-policy ledger <ArrowRight className="inline w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
