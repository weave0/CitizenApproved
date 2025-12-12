import { 
  BookOpen, ChevronRight, Clock, CheckCircle, AlertTriangle, 
  FileText, Scale, Users, Baby, Calendar, Globe
} from 'lucide-react'
import Link from 'next/link'
import { DERIVATIVE_CITIZENSHIP, USCIS_FORMS } from '@/lib/legal/citizenship-law'

export default function DerivativePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">CitizenApproved</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/pathways" className="text-gray-400 hover:text-white transition-colors">
                Pathways
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
                Legal Basis
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/pathways" className="hover:text-white transition-colors">Pathways</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-purple-400">Derivative Citizenship</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shrink-0">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Derivative Citizenship</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Automatic acquisition of U.S. citizenship by children through their parents, 
                without the need to apply for naturalization. Citizenship &quot;derives&quot; from the parent.
              </p>
            </div>
          </div>

          {/* Legal Citations */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-mono text-sm bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg">
              {DERIVATIVE_CITIZENSHIP.automatic.statute}
            </span>
            <span className="font-mono text-sm bg-violet-500/20 text-violet-400 px-4 py-2 rounded-lg">
              {DERIVATIVE_CITIZENSHIP.abroad.statute}
            </span>
            <span className="font-mono text-sm bg-pink-500/20 text-pink-400 px-4 py-2 rounded-lg">
              INA §§ 320-322
            </span>
          </div>
        </div>
      </section>

      {/* Key Concept */}
      <section className="pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-2xl p-8 border border-purple-500/20">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-2">Automatic</div>
                <div className="text-gray-400">No Application Required</div>
              </div>
              <div className="md:border-l md:border-white/10 md:pl-8">
                <p className="text-gray-300">
                  Unlike naturalization, derivative citizenship occurs automatically by operation of law 
                  when all statutory conditions are met. The child becomes a citizen at that moment, 
                  regardless of whether documentation is obtained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Main Categories */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Users className="w-6 h-6 mr-3 text-purple-400" />
            Two Primary Categories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Automatic - § 1431 */}
            <div className="gradient-border p-8">
              <div className="flex items-center mb-6">
                <Baby className="w-8 h-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{DERIVATIVE_CITIZENSHIP.automatic.title}</h3>
                  <p className="text-sm font-mono text-purple-400">{DERIVATIVE_CITIZENSHIP.automatic.statute}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                For children residing in the United States as lawful permanent residents 
                when their parent naturalizes (or when admitted as LPR with citizen parent).
              </p>

              <h4 className="text-sm font-semibold text-gray-300 flex items-center mb-4">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                All Conditions Must Be Met
              </h4>
              <ul className="space-y-3">
                {DERIVATIVE_CITIZENSHIP.automatic.conditions.map((condition, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 text-purple-400 shrink-0 mt-0.5" />
                    {condition}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  <span className="text-purple-400 font-semibold">Key Date:</span> Applies to children 
                  who were under 18 on February 27, 2001 (effective date of Child Citizenship Act of 2000).
                </p>
              </div>
            </div>

            {/* Abroad - § 1433 */}
            <div className="gradient-border p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-violet-400 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{DERIVATIVE_CITIZENSHIP.abroad.title}</h3>
                  <p className="text-sm font-mono text-violet-400">{DERIVATIVE_CITIZENSHIP.abroad.statute}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                For children residing abroad who are brought to the U.S. specifically 
                for naturalization proceedings.
              </p>

              <h4 className="text-sm font-semibold text-gray-300 flex items-center mb-4">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Requirements
              </h4>
              <ul className="space-y-3">
                {DERIVATIVE_CITIZENSHIP.abroad.requirements.map((req, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start">
                    <ChevronRight className="w-4 h-4 mr-2 text-violet-400 shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  <span className="text-violet-400 font-semibold">Note:</span> This category requires 
                  an application (N-600K) unlike the automatic provision under § 1431.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adopted Children */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Users className="w-6 h-6 mr-3 text-pink-400" />
            Adopted Children
          </h2>

          <div className="glass-panel p-8 mb-8">
            <p className="text-gray-400 mb-6">
              Adopted children may derive citizenship if the adoption satisfies specific legal 
              requirements under the Immigration and Nationality Act. The rules vary based on 
              the type of adoption and when it occurred.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-500/10 rounded-lg p-6 border border-pink-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Full and Final Adoption</h3>
                <p className="text-gray-400 text-sm">
                  Adoptions that are full and final under the law of the adopting parent&apos;s residence 
                  generally qualify. The child must be in the legal custody of the adopting parent.
                </p>
              </div>

              <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">Hague Convention Adoptions</h3>
                <p className="text-gray-400 text-sm">
                  Children adopted under the Hague Adoption Convention (from Hague countries after 
                  April 1, 2008) have specific provisions under INA § 101(b)(1)(G).
                </p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-6 border-l-4 border-yellow-500">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Important Note on Adoption</h3>
                <p className="text-gray-400">
                  Not all international adoptions automatically confer citizenship. The specific 
                  immigration classification under which the child entered (IR-2, IR-3, IR-4, IH-3, IH-4) 
                  and whether the adoption was finalized before or after entry can affect derivative 
                  citizenship eligibility. Consult an immigration attorney for adoption-specific guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Former Law */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Calendar className="w-6 h-6 mr-3 text-cyan-400" />
            Former Laws & Historical Provisions
          </h2>

          <div className="gradient-border p-8">
            <p className="text-gray-400 mb-6">
              Derivative citizenship laws have changed significantly over time. The applicable law 
              depends on when the child was born and when the parent naturalized. Former provisions 
              under 8 U.S.C. § 1432 (repealed) may still apply to certain individuals.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">Before 10/5/1978</h4>
                <p className="text-sm text-gray-400">
                  Different requirements; both parents generally needed to naturalize or one 
                  surviving parent.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-cyan-400 font-semibold mb-2">10/5/1978 - 2/26/2001</h4>
                <p className="text-sm text-gray-400">
                  Former § 1432 applied; required LPR status and residence in U.S. before age 18.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">After 2/27/2001</h4>
                <p className="text-sm text-gray-400">
                  Current law under Child Citizenship Act of 2000 (§ 1431) applies.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
              <p className="text-sm text-gray-400">
                <span className="text-cyan-400 font-semibold">Retroactivity:</span> The Child Citizenship 
                Act of 2000 applies to children who were under 18 on February 27, 2001 and met all 
                conditions as of that date. It does not grant citizenship retroactively to those who 
                were 18 or older on that date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-green-400" />
            Documentation & Evidence
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* N-600 */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{USCIS_FORMS.N600.title}</h3>
              <p className="text-gray-400 mb-4">
                Application for Certificate of Citizenship for individuals who derived or 
                acquired citizenship through parents.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Filing Fee</span>
                  <span className="text-white font-semibold">${USCIS_FORMS.N600.filingFee}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Used when:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Child is already in the U.S.</li>
                    <li>• Conditions for automatic citizenship met</li>
                    <li>• Seeking Certificate of Citizenship</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* N-600K */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{USCIS_FORMS.N600K.title}</h3>
              <p className="text-gray-400 mb-4">
                Application for children residing outside the United States to obtain 
                citizenship through qualifying parent.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Filing Fee</span>
                  <span className="text-white font-semibold">${USCIS_FORMS.N600K.filingFee}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Used when:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Child resides abroad</li>
                    <li>• Under § 1433 provisions</li>
                    <li>• Requires interview outside U.S.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Evidence Section */}
          <div className="mt-8 glass-panel p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Evidence Typically Required</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Child&apos;s Documents</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Birth certificate</li>
                  <li>• Passport (if any)</li>
                  <li>• Green card</li>
                  <li>• Photos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Parent&apos;s Documents</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Naturalization certificate</li>
                  <li>• Proof of citizenship</li>
                  <li>• Marriage certificate</li>
                  <li>• Custody documents</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Additional (If Applicable)</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Adoption decree</li>
                  <li>• Divorce decree</li>
                  <li>• Death certificate</li>
                  <li>• Custody order</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Text */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
            Primary Statutory Text
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 font-mono text-sm">
              <div className="text-purple-400 mb-4">{DERIVATIVE_CITIZENSHIP.automatic.title}</div>
              <div className="text-gray-400 whitespace-pre-wrap leading-relaxed text-xs">
                {DERIVATIVE_CITIZENSHIP.automatic.statutoryText}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <a 
                  href="https://www.law.cornell.edu/uscode/text/8/1431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                >
                  View full § 1431 on Cornell Law →
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 font-mono text-sm">
              <div className="text-violet-400 mb-4">{DERIVATIVE_CITIZENSHIP.abroad.title}</div>
              <div className="text-gray-400 whitespace-pre-wrap leading-relaxed text-xs">
                {DERIVATIVE_CITIZENSHIP.abroad.statutoryText}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <a 
                  href="https://www.law.cornell.edu/uscode/text/8/1433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                >
                  View full § 1433 on Cornell Law →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p className="mb-2">
            Information based on Title 8 U.S.C. and 8 CFR. This is educational material, not legal advice.
          </p>
          <p>
            © {new Date().getFullYear()} CitizenApproved. Consult a licensed immigration attorney for your specific situation.
          </p>
        </div>
      </footer>
    </main>
  )
}
