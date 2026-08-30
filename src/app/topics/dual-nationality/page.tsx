import Link from 'next/link'
import { ArrowRight, Globe2, IdCard, Scale, ShieldAlert, TriangleAlert } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'

const acts = [
  'Naturalizing in a foreign state on one’s own application after age 18.',
  'Taking an oath or other formal declaration of allegiance to a foreign state after age 18.',
  'Serving in specified circumstances in the armed forces of a foreign state.',
  'Accepting specified foreign-government employment.',
  'Formally renouncing U.S. nationality before a U.S. diplomatic or consular officer abroad.',
  'Formally renouncing in the United States under the narrow wartime provision.',
  'Certain treason-related conduct after conviction under the statute.',
]

export default function DualNationalityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Nationality status · reviewed {formatReviewDate()}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Dual nationality does not automatically cancel U.S. citizenship</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">The United States recognizes that a person may hold more than one nationality. Under modern U.S. law, performing a potentially expatriating act is not enough by itself: loss of U.S. nationality requires voluntariness and an intention to relinquish U.S. nationality.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <Globe2 className="w-7 h-7 text-cyan-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">You can be a U.S. citizen and another country&apos;s national</h2>
            <p className="text-gray-300 mb-4">The Department of State expressly explains that a person may be a dual or multiple national through birth, parentage, or naturalization. Whether another country permits or recognizes multiple nationality is a question of that country&apos;s law.</p>
            <p className="text-gray-400">Dual nationals can have obligations in both countries, including tax, military-service, registration or travel requirements under the relevant laws.</p>
          </div>
          <div className="glass-panel p-8">
            <IdCard className="w-7 h-7 text-green-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">U.S. passport rule</h2>
            <p className="text-gray-300 mb-4">The State Department states that U.S. citizens, including dual nationals, must enter and depart the United States using a U.S. passport. A U.S. citizen is not eligible for a U.S. visa or ESTA using another nationality.</p>
            <a href="https://travel.state.gov/en/international-travel/planning/personal-needs/dual-nationality.html" target="_blank" rel="noreferrer" className="text-cyan-300">State Department dual-nationality guidance <ArrowRight className="inline w-4 h-4" /></a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6"><Scale className="w-7 h-7 text-violet-400" /><h2 className="text-3xl font-bold">Potentially expatriating acts under 8 U.S.C. § 1481</h2></div>
          <p className="text-gray-300 max-w-4xl mb-7">The statute lists acts that can support a loss-of-nationality determination when the statutory conditions are met. State administers INA 349(a)(1)–(5); DHS administers (a)(6)–(7).</p>
          <div className="grid md:grid-cols-2 gap-4">{acts.map((act, index) => <div key={act} className="glass-panel p-5 flex gap-4"><span className="text-cyan-300 font-mono">{index + 1}</span><p className="text-gray-300">{act}</p></div>)}</div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <ShieldAlert className="w-7 h-7 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Intent matters</h2>
            <p className="text-gray-300 mb-4">The State Department summarizes the Supreme Court rule from <em>Afroyim v. Rusk</em> and <em>Vance v. Terrazas</em>: U.S. nationality cannot be lost without voluntary relinquishment. Foreign naturalization, a foreign oath, or another listed act therefore requires an intent analysis rather than an automatic-loss assumption.</p>
            <a href="https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship.html" target="_blank" rel="noreferrer" className="text-cyan-300">State Department citizenship law and policy <ArrowRight className="inline w-4 h-4" /></a>
          </div>
          <div className="glass-panel p-8 border border-red-400/20">
            <TriangleAlert className="w-7 h-7 text-red-300 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Renunciation is a serious legal act</h2>
            <p className="text-gray-300 mb-4">Formal renunciation abroad under INA 349(a)(5) requires an in-person process before a U.S. diplomatic or consular officer. State currently describes a process including review of loss-of-nationality information, two interviews with at least one in person, required forms, and the prescribed oath.</p>
            <p className="text-gray-400">A Certificate of Loss of Nationality, once approved, is a final administrative determination subject only to the available review routes. Renunciation can create statelessness and does not automatically erase tax, military, criminal or financial obligations.</p>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-5 text-sm">
          <a href="https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section1481" target="_blank" rel="noreferrer" className="text-cyan-300">8 U.S.C. § 1481 <ArrowRight className="inline w-4 h-4" /></a>
          <a href="https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/Relinquishing-US-Nationality.html" target="_blank" rel="noreferrer" className="text-cyan-300">State: relinquishing nationality <ArrowRight className="inline w-4 h-4" /></a>
          <Link href="/topics/proof" className="text-cyan-300">Proof of citizenship <ArrowRight className="inline w-4 h-4" /></Link>
        </div>
      </section>
    </main>
  )
}
