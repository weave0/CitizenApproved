import { 
  Shield, BookOpen, Users, Scale, Award, ChevronRight, 
  Star, Clock, CheckCircle, AlertTriangle, FileText, ExternalLink 
} from 'lucide-react'
import Link from 'next/link'

const pathways = [
  {
    id: 'birthright',
    title: 'Citizenship at Birth',
    icon: Star,
    description: 'Automatic citizenship for those born in the U.S. or to U.S. citizen parents abroad',
    legalBasis: '8 U.S.C. § 1401',
    inaSection: 'INA § 301',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-500/10',
    href: '/pathways/birthright',
    keyPoints: [
      'Birth in the United States (14th Amendment)',
      'Birth abroad to two U.S. citizen parents',
      'Birth abroad to one U.S. citizen parent (with physical presence requirements)',
      'Foundlings discovered in U.S. under age 5'
    ],
    timeline: 'Automatic at birth',
    fee: 'N/A (N-600 for certificate: $1,170)'
  },
  {
    id: 'naturalization',
    title: 'Naturalization (5-Year Path)',
    icon: Award,
    description: 'Standard pathway for lawful permanent residents to become U.S. citizens',
    legalBasis: '8 U.S.C. § 1427',
    inaSection: 'INA § 316',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    href: '/pathways/naturalization',
    keyPoints: [
      '5 years continuous residence as LPR',
      '30 months physical presence in U.S.',
      '3 months residence in filing state/district',
      'Good moral character throughout',
      'Pass English and civics tests',
      'Take Oath of Allegiance'
    ],
    timeline: '5+ years',
    fee: '$710 + $85 biometrics'
  },
  {
    id: 'marriage',
    title: 'Marriage to U.S. Citizen (3-Year Path)',
    icon: Users,
    description: 'Expedited naturalization for spouses of U.S. citizens living in marital union',
    legalBasis: '8 U.S.C. § 1430',
    inaSection: 'INA § 319',
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-500/10',
    href: '/pathways/marriage',
    keyPoints: [
      '3 years continuous residence as LPR',
      '18 months physical presence',
      'Living in marital union for 3 years',
      'Spouse must be U.S. citizen for entire 3 years',
      'Good moral character for 3-year period'
    ],
    timeline: '3+ years',
    fee: '$710 + $85 biometrics'
  },
  {
    id: 'military',
    title: 'Military Service',
    icon: Shield,
    description: 'Special naturalization provisions for members of the U.S. Armed Forces',
    legalBasis: '8 U.S.C. § 1439-1440',
    inaSection: 'INA §§ 328-329',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/10',
    href: '/pathways/military',
    keyPoints: [
      'Peacetime: 1 year honorable service',
      'Wartime: Any qualifying service during hostilities',
      'No residence requirements if filed during/within 6 months of service',
      'No filing fees',
      'Expedited processing available'
    ],
    timeline: '1 year (peacetime) / Immediate (wartime)',
    fee: 'No fee'
  },
  {
    id: 'derivative',
    title: 'Derivative Citizenship',
    icon: BookOpen,
    description: 'Automatic citizenship for children of U.S. citizens under specific conditions',
    legalBasis: '8 U.S.C. §§ 1431-1433',
    inaSection: 'INA §§ 320-322',
    color: 'from-purple-400 to-violet-500',
    bgColor: 'bg-purple-500/10',
    href: '/pathways/derivative',
    keyPoints: [
      'At least one parent is U.S. citizen',
      'Child under 18 years of age',
      'Child is lawful permanent resident',
      'Child residing in custody of citizen parent',
      'Includes biological and adopted children'
    ],
    timeline: 'Automatic when conditions met',
    fee: 'N/A (N-600 for certificate: $1,170)'
  },
]

export default function PathwaysPage() {
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
              <Link href="/pathways" className="text-white font-medium">
                Pathways
              </Link>
              <Link href="/legal" className="text-gray-400 hover:text-white transition-colors">
                Legal Basis
              </Link>
              <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Pathways to U.S. Citizenship</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive documentation of every legal pathway to becoming a United States citizen,
              each grounded in specific sections of federal law.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="glass-panel p-4 text-center">
              <div className="text-2xl font-bold gradient-text">5</div>
              <div className="text-sm text-gray-400">Primary Pathways</div>
            </div>
            <div className="glass-panel p-4 text-center">
              <div className="text-2xl font-bold gradient-text">Title 8</div>
              <div className="text-sm text-gray-400">U.S. Code</div>
            </div>
            <div className="glass-panel p-4 text-center">
              <div className="text-2xl font-bold gradient-text">§1401-1459</div>
              <div className="text-sm text-gray-400">Statutory Sections</div>
            </div>
            <div className="glass-panel p-4 text-center">
              <div className="text-2xl font-bold gradient-text">8 CFR</div>
              <div className="text-sm text-gray-400">Regulations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {pathways.map((pathway) => (
              <div 
                key={pathway.id}
                className="gradient-border overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Icon and Title */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pathway.color} flex items-center justify-center`}>
                        <pathway.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-2">
                            {pathway.title}
                          </h2>
                          <p className="text-gray-400">
                            {pathway.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs font-mono bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded">
                            {pathway.legalBasis}
                          </span>
                          <span className="text-xs font-mono bg-purple-500/20 text-purple-400 px-3 py-1 rounded">
                            {pathway.inaSection}
                          </span>
                        </div>
                      </div>

                      {/* Key Points */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                            Key Requirements
                          </h3>
                          <ul className="space-y-2">
                            {pathway.keyPoints.map((point, idx) => (
                              <li key={idx} className="text-sm text-gray-400 flex items-start">
                                <ChevronRight className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div className={`${pathway.bgColor} rounded-lg p-4`}>
                            <div className="flex items-center text-sm mb-2">
                              <Clock className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="text-gray-300">Timeline</span>
                            </div>
                            <div className="text-white font-semibold">{pathway.timeline}</div>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <div className="flex items-center text-sm mb-2">
                              <FileText className="w-4 h-4 mr-2 text-gray-400" />
                              <span className="text-gray-300">Filing Fee</span>
                            </div>
                            <div className="text-white font-semibold">{pathway.fee}</div>
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                          href={pathway.href}
                          className={`inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r ${pathway.color} text-white font-semibold hover:shadow-lg transition-all duration-300`}
                        >
                          <span>View Full Details</span>
                          <ChevronRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link 
                          href={`/legal/${pathway.id}`}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 text-gray-300 font-medium hover:bg-white/5 transition-all duration-300"
                        >
                          <Scale className="w-4 h-4 mr-2" />
                          <span>Legal Foundation</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel p-6 md:p-8 border-l-4 border-yellow-500">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Important Legal Notice</h3>
                <p className="text-gray-400 mb-4">
                  The information provided on this website is for educational purposes only and is based on 
                  federal statutes (Title 8 U.S.C.) and regulations (8 CFR). Immigration law is complex and 
                  subject to change. This information does not constitute legal advice.
                </p>
                <p className="text-gray-400">
                  <strong className="text-white">Always consult with a licensed immigration attorney</strong> for 
                  advice specific to your individual situation. USCIS policies and processing times may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="pb-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto py-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Official Government Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="https://www.uscis.gov/citizenship" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-6 hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">USCIS Citizenship</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-sm text-gray-400">
                Official U.S. Citizenship and Immigration Services portal for citizenship information.
              </p>
            </a>
            <a 
              href="https://www.law.cornell.edu/uscode/text/8/chapter-12/subchapter-III" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-6 hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Title 8 U.S.C.</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-sm text-gray-400">
                Cornell Law School&apos;s Legal Information Institute - Full text of immigration statutes.
              </p>
            </a>
            <a 
              href="https://www.law.cornell.edu/cfr/text/8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-panel p-6 hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">8 CFR Regulations</h3>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-sm text-gray-400">
                Code of Federal Regulations implementing immigration and nationality law.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} CitizenApproved. Information sourced from public law.
            Not legal advice. Consult an attorney for your specific situation.
          </p>
        </div>
      </footer>
    </main>
  )
}
