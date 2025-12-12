'use client'

import Link from 'next/link'
import { 
  FileText, Clock, DollarSign, CheckSquare, BookOpen, 
  HelpCircle, MapPin, AlertTriangle, ChevronRight, ExternalLink,
  Scale, Users, Shield
} from 'lucide-react'

const tools = [
  {
    title: 'Eligibility Wizard',
    description: 'Answer questions to discover which citizenship pathway fits your situation',
    icon: HelpCircle,
    href: '/eligibility',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    title: 'Cost Calculator',
    description: 'Calculate total fees and check if you qualify for a fee waiver',
    icon: DollarSign,
    href: '/costs',
    color: 'from-green-400 to-emerald-500'
  },
  {
    title: 'Document Checklist',
    description: 'Know exactly what documents you need for your specific pathway',
    icon: CheckSquare,
    href: '/documents',
    color: 'from-purple-400 to-violet-500'
  },
  {
    title: 'Processing Times',
    description: 'Current wait times by field office and what to expect at each step',
    icon: Clock,
    href: '/processing',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Civics Test Practice',
    description: 'All 128 official questions with study mode and practice tests',
    icon: BookOpen,
    href: '/civics',
    color: 'from-pink-400 to-rose-500'
  },
  {
    title: 'Visual Flowchart',
    description: 'Interactive map of the entire naturalization process',
    icon: MapPin,
    href: '/flowchart',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'Why So Long?',
    description: 'Plain English explanation of delays and how to speed up your case',
    icon: AlertTriangle,
    href: '/why-so-long',
    color: 'from-orange-400 to-red-500'
  },
  {
    title: 'Bottleneck Analysis',
    description: 'System-level issues and what is being done to fix them',
    icon: FileText,
    href: '/bottlenecks',
    color: 'from-teal-400 to-cyan-500'
  }
]

const pathways = [
  {
    title: 'Naturalization',
    description: 'Standard pathway for permanent residents',
    icon: Scale,
    href: '/pathways/naturalization',
    legalBasis: '8 U.S.C. § 1427'
  },
  {
    title: 'Citizenship at Birth',
    description: 'Born in the U.S. or to U.S. citizen parents',
    icon: Users,
    href: '/pathways/birthright',
    legalBasis: '8 U.S.C. § 1401'
  },
  {
    title: 'Marriage to U.S. Citizen',
    description: 'Expedited pathway through marriage',
    icon: Users,
    href: '/pathways/marriage',
    legalBasis: '8 U.S.C. § 1430'
  },
  {
    title: 'Military Service',
    description: 'Naturalization through armed forces service',
    icon: Shield,
    href: '/pathways/military',
    legalBasis: '8 U.S.C. § 1439-1440'
  },
  {
    title: 'Derivative Citizenship',
    description: 'Automatic citizenship for qualifying children',
    icon: BookOpen,
    href: '/pathways/derivative',
    legalBasis: '8 U.S.C. § 1431-1433'
  }
]

const externalResources = [
  {
    title: 'USCIS Official Website',
    description: 'U.S. Citizenship and Immigration Services',
    url: 'https://www.uscis.gov/',
    category: 'Government'
  },
  {
    title: 'USCIS Case Status',
    description: 'Check the status of your case online',
    url: 'https://egov.uscis.gov/casestatus/landing.do',
    category: 'Government'
  },
  {
    title: 'USCIS Processing Times',
    description: 'Official processing time estimates',
    url: 'https://egov.uscis.gov/processing-times/',
    category: 'Government'
  },
  {
    title: 'USCIS Policy Manual',
    description: 'Official policy guidance on citizenship',
    url: 'https://www.uscis.gov/policy-manual/volume-12',
    category: 'Government'
  },
  {
    title: 'Find a USCIS Office',
    description: 'Locate your local USCIS field office',
    url: 'https://www.uscis.gov/about-us/find-a-uscis-office',
    category: 'Government'
  },
  {
    title: 'Fee Waiver (Form I-912)',
    description: 'Request exemption from USCIS fees',
    url: 'https://www.uscis.gov/i-912',
    category: 'Forms'
  },
  {
    title: 'Form N-400',
    description: 'Application for Naturalization',
    url: 'https://www.uscis.gov/n-400',
    category: 'Forms'
  },
  {
    title: 'Civics Test Study Materials',
    description: 'Official USCIS civics test resources',
    url: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test',
    category: 'Study'
  }
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Resources
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Free tools and resources to help with your citizenship journey
          </p>
        </div>

        {/* Notice */}
        <div className="mb-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
          <h3 className="text-cyan-400 font-semibold mb-2">🌐 Free for Everyone</h3>
          <p className="text-gray-300 text-sm">
            All tools on this site are free and available in 100+ languages via your browser&apos;s translation feature. 
            We believe access to citizenship information should not be a privilege.
          </p>
        </div>

        {/* Interactive Tools */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Interactive Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <Link 
                key={tool.title}
                href={tool.href}
                className="glass-panel p-5 hover:border-cyan-500/30 transition-all group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-3`}>
                  <tool.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Pathways Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Citizenship Pathways</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pathways.map((pathway) => (
              <Link 
                key={pathway.title}
                href={pathway.href}
                className="glass-panel p-4 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-400">{pathway.title}</h3>
                  <p className="text-sm text-gray-500">{pathway.description}</p>
                  <span className="text-xs font-mono text-cyan-400/70">{pathway.legalBasis}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* External Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Official Government Resources</h2>
          <div className="glass-panel overflow-hidden">
            <div className="divide-y divide-gray-800">
              {externalResources.map((resource) => (
                <a 
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 hover:bg-gray-800/30 transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white group-hover:text-cyan-400">{resource.title}</h3>
                      <span className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded">{resource.category}</span>
                    </div>
                    <p className="text-sm text-gray-500">{resource.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Sources CTA */}
        <div className="glass-panel p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Need Legal Sources?</h3>
          <p className="text-gray-400 mb-4">
            View our comprehensive list of legal authorities, from the U.S. Code to case law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/legal"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all"
            >
              <span>Legal Basis</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/sources"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              <span>All Sources</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
          <p className="text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> This website provides general information about U.S. citizenship pathways. 
            It is not legal advice. For advice about your specific situation, consult a licensed immigration attorney.
          </p>
        </div>
      </div>
    </main>
  )
}
