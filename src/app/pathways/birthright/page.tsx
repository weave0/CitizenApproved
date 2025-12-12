import { 
  Star, ChevronRight, CheckCircle, AlertTriangle, 
  FileText, Scale, BookOpen, Globe, Flag, Baby
} from 'lucide-react'
import Link from 'next/link'
import { CITIZENSHIP_AT_BIRTH, USCIS_FORMS } from '@/lib/legal/citizenship-law'

export default function BirthrightPage() {
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
            <span className="text-yellow-400">Citizenship at Birth</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-12">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
              <Star className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Citizenship at Birth</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl">
                Automatic U.S. citizenship acquired at the moment of birth, either through 
                birth on U.S. soil (jus soli) or through birth abroad to U.S. citizen parents (jus sanguinis).
              </p>
            </div>
          </div>

          {/* Legal Citations */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="font-mono text-sm bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg">
              {CITIZENSHIP_AT_BIRTH.statute}
            </span>
            <span className="font-mono text-sm bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg">
              {CITIZENSHIP_AT_BIRTH.inaSection}
            </span>
            <span className="font-mono text-sm bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg">
              14th Amendment
            </span>
          </div>
        </div>
      </section>

      {/* Two Types */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Jus Soli */}
            <div className="gradient-border p-8">
              <div className="flex items-center mb-6">
                <Flag className="w-8 h-8 text-yellow-400 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Jus Soli</h2>
                  <p className="text-gray-400">&quot;Right of the Soil&quot;</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Citizenship acquired by being born within U.S. territory, regardless of 
                the nationality or citizenship status of the parents.
              </p>
              <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                <p className="text-sm text-yellow-400 font-semibold mb-2">Constitutional Basis</p>
                <p className="text-gray-400 text-sm italic">
                  &quot;All persons born or naturalized in the United States, and subject to the 
                  jurisdiction thereof, are citizens of the United States...&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">— 14th Amendment, Section 1</p>
              </div>
            </div>

            {/* Jus Sanguinis */}
            <div className="gradient-border p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-cyan-400 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Jus Sanguinis</h2>
                  <p className="text-gray-400">&quot;Right of Blood&quot;</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Citizenship acquired at birth through one or both parents being U.S. citizens, 
                even when the birth occurs outside the United States.
              </p>
              <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-sm text-cyan-400 font-semibold mb-2">Statutory Basis</p>
                <p className="text-gray-400 text-sm">
                  Various provisions under 8 U.S.C. § 1401 with specific physical presence 
                  requirements for the U.S. citizen parent(s).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories from § 1401 */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-yellow-400" />
            Categories Under 8 U.S.C. § 1401
          </h2>

          <div className="space-y-6">
            {CITIZENSHIP_AT_BIRTH.categories.map((category) => (
              <div key={category.subsection} className="gradient-border p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <span className="font-mono text-sm bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded mr-3">
                      § 1401{category.subsection}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  {category.description}
                </p>
                {category.requirements && category.requirements.length > 0 && (
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {category.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 text-yellow-400 shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Presence Requirements */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-cyan-400" />
            Physical Presence Requirements for Abroad Births
          </h2>

          <div className="glass-panel p-6 mb-8">
            <p className="text-gray-400 mb-4">
              When a child is born abroad to a U.S. citizen parent, that parent must typically 
              demonstrate they were physically present in the United States for a specific period 
              before the child&apos;s birth. These requirements vary based on when the child was born 
              and whether one or both parents are U.S. citizens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Two Citizen Parents */}
            <div className="gradient-border p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Baby className="w-5 h-5 mr-2 text-yellow-400" />
                Two U.S. Citizen Parents
              </h3>
              <p className="text-gray-400 mb-4">
                At least one parent must have had a residence in the United States or its 
                outlying possessions prior to the birth.
              </p>
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <p className="text-green-400 text-sm font-semibold">
                  ✓ Minimal requirement - just needs to have established residence
                </p>
              </div>
            </div>

            {/* One Citizen Parent */}
            <div className="gradient-border p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Baby className="w-5 h-5 mr-2 text-cyan-400" />
                One U.S. Citizen Parent
              </h3>
              <p className="text-gray-400 mb-4">
                The U.S. citizen parent must have been physically present in the United States 
                for 5 years, at least 2 of which were after age 14.
              </p>
              <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                <p className="text-cyan-400 text-sm font-semibold">
                  Requires documented physical presence periods
                </p>
              </div>
            </div>
          </div>

          {/* Special Cases */}
          <div className="mt-8 glass-panel p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
              Historical Note
            </h3>
            <p className="text-gray-400">
              Physical presence requirements have changed over time. The applicable requirements 
              depend on the date of birth. Former versions of the law may apply to individuals 
              born before certain dates. This is particularly relevant for children born abroad 
              before 1986, when different requirements were in effect.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-purple-400" />
            Documentation & Certificates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form N-600 */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">{USCIS_FORMS.N600.title}</h3>
              <p className="text-gray-400 mb-4">{USCIS_FORMS.N600.description}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Filing Fee</span>
                  <span className="text-white font-semibold">${USCIS_FORMS.N600.filingFee}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Used for:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• U.S. citizens born abroad</li>
                    <li>• Derivative citizenship claims</li>
                    <li>• Certificate of Citizenship issuance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consular Report of Birth Abroad */}
            <div className="gradient-border p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Consular Report of Birth Abroad</h3>
              <p className="text-gray-400 mb-4">
                The FS-240 (Consular Report of Birth Abroad) is issued by U.S. embassies and 
                consulates to document that a child born abroad acquired U.S. citizenship at birth.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Form Number</span>
                  <span className="text-white font-semibold">FS-240</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Serves as:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Proof of U.S. citizenship</li>
                    <li>• Equivalent to a U.S. birth certificate</li>
                    <li>• Basis for U.S. passport application</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Text */}
      <section className="py-16 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Scale className="w-6 h-6 mr-3 text-cyan-400" />
            Primary Statutory Text
          </h2>

          <div className="glass-panel p-6 font-mono text-sm">
            <div className="text-yellow-400 mb-4">{CITIZENSHIP_AT_BIRTH.title}</div>
            <div className="text-gray-400 whitespace-pre-wrap leading-relaxed">
              {CITIZENSHIP_AT_BIRTH.openingText}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <a 
                href="https://www.law.cornell.edu/uscode/text/8/1401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View full statute on Cornell Law →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p className="mb-2">
            Information based on Title 8 U.S.C. and the 14th Amendment. This is educational material, not legal advice.
          </p>
          <p>
            © {new Date().getFullYear()} CitizenApproved. Consult a licensed immigration attorney for your specific situation.
          </p>
        </div>
      </footer>
    </main>
  )
}
