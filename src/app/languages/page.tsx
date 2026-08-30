import Link from 'next/link'
import { ArrowRight, ExternalLink, Globe2, Languages, Scale, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'
import { LAST_RESOURCE_REVIEW } from '@/lib/resources/official-resources'
import {
  CITIZENSHIP_OUTREACH_LANGUAGES,
  USCIS_LANGUAGE_ACCESS_PLAN_URL,
  USCIS_MULTILINGUAL_CENTER_URL,
} from '@/lib/languages/citizenship-languages'

const translationRules = [
  ['Keep the controlling English legal term', 'Translate the explanation, but preserve terms such as continuous residence, physical presence, good moral character, acquisition, and derivation beside the translation.'],
  ['Keep dates and legal status visible', 'A translated page should still say whether something is current law, an effective regulation, agency policy, a court decision, a proposal, or historical law.'],
  ['End at the official source', 'CitizenApproved language pages are orientation. Filing should end at the current USCIS, State Department, DOJ/EOIR, statute, regulation, or court source.'],
  ['Do not translate answers for the reader', 'We should explain questions and terminology, not manufacture responses to forms, interviews, sworn statements, or legal declarations.'],
] as const

export default function LanguagesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Language access · reviewed {formatReviewDate(LAST_RESOURCE_REVIEW)}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Language access without legal drift.</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">U.S. citizenship law should be understandable outside specialist English. CitizenApproved is building language access carefully: plain explanations, preserved English legal terms, explicit dates and authority labels, and direct exits to official government material.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="glass-panel p-8">
            <Globe2 className="w-7 h-7 text-cyan-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">Why these languages first</h2>
            <p className="text-gray-300 mb-4">USCIS&apos;s Language Access Plan identifies a citizenship-outreach set that includes English plus 12 non-English languages. CitizenApproved uses that government-defined set to prioritize language work rather than inventing a popularity ranking.</p>
            <a href={USCIS_LANGUAGE_ACCESS_PLAN_URL} target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">USCIS Language Access Plan <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
          </div>
          <div className="glass-panel p-8">
            <ShieldCheck className="w-7 h-7 text-green-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">What we will not pretend</h2>
            <p className="text-gray-300 mb-4">A machine-translated copy of every page would look comprehensive while creating a large legal-maintenance surface. Until a language can be reviewed and maintained at the same standard as the English source material, we route readers to official multilingual government resources instead.</p>
            <a href={USCIS_MULTILINGUAL_CENTER_URL} target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">USCIS Multilingual Resource Center <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Languages className="w-7 h-7 text-violet-400 mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-bold mb-3">Citizenship language routes</h2>
              <p className="text-gray-400 max-w-4xl">Spanish has a maintained CitizenApproved orientation page because strong current USCIS and USAGov Spanish resources exist. The other priority languages currently route directly to USCIS multilingual material while we avoid publishing unreviewed legal translations.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITIZENSHIP_OUTREACH_LANGUAGES.map((language) => (
              <article key={language.code} className="glass-panel p-6" dir={language.direction}>
                <div className="text-sm text-cyan-300 mb-2" lang={language.code}>{language.nativeName}</div>
                <h3 className="text-xl font-semibold mb-2">{language.name}</h3>
                <p className="text-sm text-gray-400 mb-5">{language.citizenApprovedPath ? 'Maintained orientation plus official government links.' : 'Official USCIS multilingual resources while CitizenApproved translation remains under review.'}</p>
                {language.citizenApprovedPath ? (
                  <Link href={language.citizenApprovedPath} className="text-cyan-300 underline underline-offset-4">Open orientation <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
                ) : (
                  <a href={language.officialUrl} target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">Open official resources <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Scale className="w-7 h-7 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-bold mb-3">Translation rules for a legal-information site</h2>
              <p className="text-gray-400 max-w-4xl">The objective is comprehension without changing the legal category underneath the words.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {translationRules.map(([title, description]) => (
              <article key={title} className="glass-panel p-7">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto glass-panel p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">Need the official agency instead?</h2>
          <p className="text-gray-300 mb-5">The Official Help router identifies whether USCIS, the Department of State, DOJ/EOIR, a statute, a regulation, or a court is the right source for the question.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/help" className="px-5 py-3 rounded-lg border border-cyan-400/20 text-cyan-300">Official help directory <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
            <Link href="/glossary" className="px-5 py-3 rounded-lg border border-white/10 text-white">Plain-language glossary <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
