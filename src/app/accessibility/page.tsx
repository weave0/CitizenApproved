import { Accessibility, ArrowRight, ExternalLink, Globe2, Keyboard, Languages, Printer, ShieldCheck, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { formatReviewDate } from '@/lib/policy/current-policy'
import { LAST_RESOURCE_REVIEW } from '@/lib/resources/official-resources'

const accessFeatures = [
  ['Keyboard access', 'A global skip link bypasses persistent navigation, interactive controls receive visible keyboard focus, and site navigation uses native links and buttons.', Keyboard],
  ['Reduced motion', 'If your operating system requests reduced motion, decorative animation and movement are suppressed automatically.', Accessibility],
  ['Zoom and reflow', 'Content is designed to wrap on narrow screens and at high zoom instead of depending on fixed-width legal tables or tiny text.', Smartphone],
  ['Print and offline reading', 'A print stylesheet removes decorative backgrounds and navigation so guides can be printed, saved as PDF, or shared in classrooms and clinics.', Printer],
] as const

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-28 md:pt-36 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-cyan-300 mb-5">Global access guide · reviewed {formatReviewDate(LAST_RESOURCE_REVIEW)}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Citizenship information should work for more than one kind of reader.</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-4xl leading-relaxed">CitizenApproved is being built for screen-reader users, keyboard users, people who enlarge text, readers using translation tools, people on small screens or limited connections, and families or educators who need a clean printed copy.</p>
        </div>
      </section>

      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5">
          {accessFeatures.map(([title, description, Icon]) => (
            <article key={title} className="glass-panel p-7">
              <Icon className="w-7 h-7 text-cyan-400 mb-4" aria-hidden="true" />
              <h2 className="text-xl font-semibold mb-3">{title}</h2>
              <p className="text-gray-300">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="glass-panel p-8">
            <Languages className="w-7 h-7 text-violet-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">Language access: use translation, but know what is authoritative</h2>
            <p className="text-gray-300 mb-4">CitizenApproved uses short sentences, defined terms, explicit dates, and less idiomatic language so browser and assistive translation tools have a better chance of preserving meaning. We do not claim that an automatic translation is legally authoritative.</p>
            <p className="text-gray-400 mb-5">For filing, use the current USCIS form page and instructions. When USCIS or another government agency publishes an official translated resource, prefer that version for language support.</p>
            <div className="space-y-3">
              <a href="https://www.uscis.gov/tools/multilingual-resource-center" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">USCIS Multilingual Resource Center <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
              <a href="https://www.usa.gov/es/naturalizacion-ciudadania-estados-unidos" target="_blank" rel="noreferrer" className="block text-cyan-300 underline underline-offset-4">USAGov en Español: naturalización y ciudadanía <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
            </div>
          </div>

          <div className="glass-panel p-8">
            <ShieldCheck className="w-7 h-7 text-green-400 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-4">Accessibility standard</h2>
            <p className="text-gray-300 mb-4">The engineering target is WCAG 2.2 Level AA. W3C recommends using WCAG 2.2 when developing or updating accessibility policies. We treat this as a continuing test target, not a blanket claim that every historical page has already passed every success criterion.</p>
            <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">Web Content Accessibility Guidelines 2.2 <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <Globe2 className="w-7 h-7 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-bold mb-3">What “global” means here</h2>
              <p className="text-gray-400 max-w-4xl">The subject is U.S. citizenship law, but the audience can be anywhere. A reader abroad may need the Department of State rather than USCIS; a child-citizenship question may depend on law from decades ago; a translated explanation may still require an English-language filing form; and a person in immigration proceedings may need DOJ/EOIR resources rather than a citizenship form.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="glass-panel p-6"><h3 className="font-semibold mb-2">Agency routing</h3><p className="text-sm text-gray-400">We explain when USCIS, State, DOJ/EOIR, Congress, a regulator, or a court is the relevant source.</p></div>
            <div className="glass-panel p-6"><h3 className="font-semibold mb-2">Dates over assumptions</h3><p className="text-sm text-gray-400">Historical citizenship questions are tied to the law in force when the relevant event happened.</p></div>
            <div className="glass-panel p-6"><h3 className="font-semibold mb-2">Plain definitions</h3><p className="text-sm text-gray-400">A glossary separates terms that are often translated or used as if they were interchangeable.</p></div>
            <div className="glass-panel p-6"><h3 className="font-semibold mb-2">Official exit ramps</h3><p className="text-sm text-gray-400">Every consequential workflow should end with the official source or authorized-help path, not a sales funnel.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">USCIS disability access</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="glass-panel p-7">
              <h3 className="text-xl font-semibold mb-3">Appointment accommodation</h3>
              <p className="text-gray-300 mb-4">USCIS provides a separate accommodation process for scheduled appointments such as interviews, biometrics, and oath ceremonies. Examples can include sign-language interpretation or other changes that allow a person with a disability to participate.</p>
              <a href="https://egov.uscis.gov/e-request/accom" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">Request a USCIS disability accommodation <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
            </div>
            <div className="glass-panel p-7">
              <h3 className="text-xl font-semibold mb-3">Medical exception to English/civics requirements</h3>
              <p className="text-gray-300 mb-4">Form N-648 is different from an accommodation request. It is the medical-certification route for a qualifying disability or impairment that prevents an applicant from meeting specified English and/or civics requirements.</p>
              <a href="https://www.uscis.gov/n-648" target="_blank" rel="noreferrer" className="text-cyan-300 underline underline-offset-4">USCIS Form N-648 <ExternalLink className="inline w-4 h-4" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6 pt-16">
        <div className="max-w-6xl mx-auto glass-panel p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-4">If something blocks access, that is a product defect.</h2>
          <p className="text-gray-300 mb-5">We do not want accessibility to depend on a special “accessible version” of the site. The primary pages should work with assistive technology, translation tools, keyboard navigation, high zoom, reduced motion, mobile screens, and print.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/help" className="px-5 py-3 rounded-lg border border-cyan-400/20 text-cyan-300">Official help directory <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
            <Link href="/glossary" className="px-5 py-3 rounded-lg border border-white/10 text-white">Plain-language glossary <ArrowRight className="inline w-4 h-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
