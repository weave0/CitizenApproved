'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  SOURCE_CATEGORIES,
  ALL_SOURCES,
  TOPIC_SOURCES,
  LegalSource,
  getOfficialSourcesOnly,
  LANDMARK_CASES,
  AUTHORITY_HIERARCHY,
  VERIFICATION_TIPS
} from '@/lib/legal/sources'

type ViewMode = 'hierarchy' | 'all' | 'topics' | 'official' | 'cases'

export default function LegalSourcesPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('hierarchy')
  const [expandedSource, setExpandedSource] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Cyber Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Legal Sources & Authority
          </h1>
          <p className="text-gray-400 mt-2 text-lg">
            Understanding where U.S. citizenship law comes from
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
          <h3 className="text-cyan-400 font-semibold mb-2">📚 Why Sources Matter</h3>
          <p className="text-gray-300 text-sm">
            Not all sources are equal. The U.S. legal system has a <strong>hierarchy of authority</strong>. 
            Understanding this hierarchy helps you verify information and know which sources to trust most.
            We cite multiple sources so you can verify everything yourself.
          </p>
        </div>

        {/* View Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'hierarchy', label: 'Authority Hierarchy', icon: '📊' },
            { id: 'official', label: 'Official Sources Only', icon: '✓' },
            { id: 'cases', label: 'Landmark Cases', icon: '⚖️' },
            { id: 'topics', label: 'By Topic', icon: '🏷️' },
            { id: 'all', label: 'All Sources', icon: '📋' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setViewMode(tab.id as ViewMode)}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === tab.id
                  ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400'
                  : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {viewMode === 'hierarchy' && (
          <HierarchyView 
            categories={SOURCE_CATEGORIES}
            expanded={expandedSource}
            setExpanded={setExpandedSource}
          />
        )}

        {viewMode === 'official' && (
          <OfficialSourcesView sources={getOfficialSourcesOnly()} />
        )}

        {viewMode === 'cases' && (
          <CaseLawView />
        )}

        {viewMode === 'topics' && (
          <TopicSourcesView topics={TOPIC_SOURCES} />
        )}

        {viewMode === 'all' && (
          <AllSourcesView 
            sources={ALL_SOURCES}
            expanded={expandedSource}
            setExpanded={setExpandedSource}
          />
        )}

        {/* Understanding Legal Citations */}
        <div className="mt-8 glass-panel rounded-xl p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Understanding Legal Citations</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <code className="text-cyan-400">8 U.S.C. § 1427</code>
              <p className="text-gray-400 mt-1">
                Title 8 of U.S. Code, Section 1427 (Naturalization requirements)
              </p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <code className="text-cyan-400">8 C.F.R. § 316.2</code>
              <p className="text-gray-400 mt-1">
                Title 8 of Code of Federal Regulations, Section 316.2
              </p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <code className="text-cyan-400">INA § 316</code>
              <p className="text-gray-400 mt-1">
                Immigration and Nationality Act, Section 316 (same as 8 U.S.C. § 1427)
              </p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded-lg">
              <code className="text-cyan-400">Matter of Smith, 25 I&N Dec. 123</code>
              <p className="text-gray-400 mt-1">
                Board of Immigration Appeals decision in Matter of Smith
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 p-4 bg-gray-800/30 rounded-lg">
          <p className="text-gray-500 text-sm">
            <strong>Our Commitment:</strong> CitizenApproved cites multiple authoritative sources throughout 
            this website. We prioritize official government sources and clearly distinguish between 
            primary law and secondary analysis. When in doubt, we link directly to the original source 
            so you can verify information yourself.
          </p>
        </div>
      </div>
    </main>
  )
}

function HierarchyView({ 
  categories, 
  expanded, 
  setExpanded 
}: { 
  categories: typeof SOURCE_CATEGORIES
  expanded: string | null
  setExpanded: (id: string | null) => void
}) {
  return (
    <div className="space-y-6">
      {/* Visual Hierarchy */}
      <div className="glass-panel rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Hierarchy of Legal Authority</h2>
        <p className="text-gray-400 mb-6">
          Higher sources take precedence over lower sources. If a regulation conflicts with a 
          statute, the statute wins. If a policy conflicts with a regulation, the regulation wins.
        </p>
        
        <div className="space-y-3">
          {[
            { level: 1, name: 'U.S. Constitution', color: 'from-yellow-500 to-orange-500', desc: 'Supreme law of the land' },
            { level: 2, name: 'Federal Statutes (U.S. Code)', color: 'from-cyan-500 to-blue-500', desc: 'Laws passed by Congress' },
            { level: 3, name: 'Federal Regulations (CFR)', color: 'from-green-500 to-emerald-500', desc: 'Rules issued by agencies' },
            { level: 4, name: 'Agency Policy & Guidance', color: 'from-purple-500 to-violet-500', desc: 'How agencies apply the rules' },
            { level: 5, name: 'Court Decisions', color: 'from-pink-500 to-rose-500', desc: 'Judicial interpretation' }
          ].map((item, index) => (
            <div 
              key={item.level}
              className="flex items-center gap-4"
              style={{ marginLeft: `${index * 20}px` }}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center font-bold text-white`}>
                {item.level}
              </div>
              <div>
                <div className="font-medium text-white">{item.name}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      {categories.map((category, catIndex) => (
        <div key={category.name} className="glass-panel rounded-xl p-6">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">{category.name}</h3>
          <p className="text-gray-400 text-sm mb-4">{category.description}</p>
          
          <div className="space-y-3">
            {category.sources.map(source => (
              <SourceCard 
                key={source.id}
                source={source}
                expanded={expanded === source.id}
                onToggle={() => setExpanded(expanded === source.id ? null : source.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function OfficialSourcesView({ sources }: { sources: LegalSource[] }) {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg mb-6">
        <h3 className="text-green-400 font-semibold mb-2">✓ Official Government Sources Only</h3>
        <p className="text-gray-300 text-sm">
          These sources are published directly by the U.S. government. They are the most authoritative 
          and should be your primary reference for verifying legal information.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {sources.map(source => (
          <a 
            key={source.id}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-xl p-5 hover:border-cyan-500/30 transition-all block"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-cyan-400">{source.name}</h4>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                Official
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-3">{source.organization}</p>
            <p className="text-sm text-gray-300 line-clamp-2">{source.description}</p>
            <div className="mt-3 text-xs text-cyan-400">Visit source ↗</div>
          </a>
        ))}
      </div>
    </div>
  )
}

function TopicSourcesView({ topics }: { topics: typeof TOPIC_SOURCES }) {
  const topicList = [
    { key: 'naturalization', name: 'Naturalization', icon: '📋', color: 'cyan' },
    { key: 'birthright', name: 'Citizenship at Birth', icon: '👶', color: 'yellow' },
    { key: 'derivative', name: 'Derivative Citizenship', icon: '👨‍👩‍👧', color: 'purple' },
    { key: 'military', name: 'Military Naturalization', icon: '🎖️', color: 'green' },
    { key: 'marriage', name: 'Marriage to U.S. Citizen', icon: '💍', color: 'pink' },
    { key: 'lossOfCitizenship', name: 'Loss of Citizenship', icon: '⚠️', color: 'red' },
    { key: 'denaturalization', name: 'Denaturalization', icon: '🚫', color: 'orange' },
    { key: 'fees', name: 'Fees & Waivers', icon: '💰', color: 'emerald' },
    { key: 'processingTimes', name: 'Processing Times', icon: '⏱️', color: 'blue' },
    { key: 'civicsTest', name: 'Civics Test', icon: '📖', color: 'violet' },
    { key: 'oathCeremony', name: 'Oath Ceremony', icon: '🏛️', color: 'amber' },
    { key: 'backlogsAndReports', name: 'Backlogs & Reports', icon: '📊', color: 'slate' }
  ]

  return (
    <div className="space-y-6">
      <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg mb-6">
        <h3 className="text-blue-400 font-semibold mb-2">🏷️ Sources Organized by Topic</h3>
        <p className="text-gray-300 text-sm">
          Quick links to the most relevant official sources for each topic area.
        </p>
      </div>

      {topicList.map(topic => {
        const links = topics[topic.key as keyof typeof topics]
        return (
          <div key={topic.key} className="glass-panel rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span>{topic.icon}</span>
              {topic.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors flex items-center justify-between"
                >
                  <span className="text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-cyan-400 text-sm">↗</span>
                </a>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function AllSourcesView({ 
  sources, 
  expanded, 
  setExpanded 
}: { 
  sources: LegalSource[]
  expanded: string | null
  setExpanded: (id: string | null) => void
}) {
  const [filterType, setFilterType] = useState<string>('all')
  
  const filteredSources = filterType === 'all' 
    ? sources 
    : sources.filter(s => s.type === filterType)

  return (
    <div className="space-y-4">
      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['all', 'primary', 'agency', 'judicial', 'research', 'secondary'].map(type => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-3 py-1 text-sm rounded-lg transition-all ${
              filterType === type
                ? 'bg-cyan-500/20 text-cyan-400'
                : 'bg-gray-800/50 text-gray-400 hover:text-white'
            }`}
          >
            {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredSources.map(source => (
          <SourceCard 
            key={source.id}
            source={source}
            expanded={expanded === source.id}
            onToggle={() => setExpanded(expanded === source.id ? null : source.id)}
            showType
          />
        ))}
      </div>
    </div>
  )
}

function SourceCard({ 
  source, 
  expanded, 
  onToggle,
  showType = false
}: { 
  source: LegalSource
  expanded: boolean
  onToggle: () => void
  showType?: boolean
}) {
  const statusColors = {
    official: 'bg-green-500/20 text-green-400',
    authenticated: 'bg-blue-500/20 text-blue-400',
    unofficial_authoritative: 'bg-yellow-500/20 text-yellow-400',
    research: 'bg-purple-500/20 text-purple-400'
  }

  return (
    <div className="bg-gray-800/30 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 text-left flex items-start justify-between hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold text-white">{source.name}</h4>
            <span className={`text-xs px-2 py-0.5 rounded ${statusColors[source.officialStatus]}`}>
              {source.officialStatus === 'unofficial_authoritative' ? 'Authoritative' : 
               source.officialStatus.charAt(0).toUpperCase() + source.officialStatus.slice(1)}
            </span>
            {showType && (
              <span className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">
                {source.type}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-400 mt-1">{source.organization}</p>
        </div>
        <div className={`text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}>
          ▼
        </div>
      </button>

      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-700/50 pt-4">
          <p className="text-gray-300 text-sm mb-4">{source.description}</p>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="text-cyan-400 font-medium mb-2">Best For</h5>
              <ul className="space-y-1">
                {source.bestFor.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            {source.limitations && source.limitations.length > 0 && (
              <div>
                <h5 className="text-yellow-400 font-medium mb-2">Limitations</h5>
                <ul className="space-y-1">
                  {source.limitations.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              <span>Citation: </span>
              <code className="text-cyan-400">{source.citationFormat}</code>
            </div>
            <a 
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Visit Source ↗
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

function CaseLawView() {
  return (
    <div className="space-y-6">
      <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg mb-6">
        <h3 className="text-purple-400 font-semibold mb-2">⚖️ Landmark Supreme Court Cases</h3>
        <p className="text-gray-300 text-sm">
          These Supreme Court decisions define the constitutional foundations of U.S. citizenship law.
          They are binding precedent that guides how all citizenship cases are decided.
        </p>
      </div>

      <div className="grid gap-4">
        {LANDMARK_CASES.map((caseItem) => (
          <div key={caseItem.citation} className="glass-panel rounded-xl p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-lg text-white">{caseItem.name}</h4>
                <code className="text-cyan-400 text-sm">{caseItem.citation}</code>
              </div>
              <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                {caseItem.court} • {caseItem.year}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div>
                <h5 className="text-sm font-medium text-yellow-400 mb-1">Holding</h5>
                <p className="text-gray-300 text-sm">{caseItem.holding}</p>
              </div>
              <div>
                <h5 className="text-sm font-medium text-green-400 mb-1">Significance</h5>
                <p className="text-gray-300 text-sm">{caseItem.significance}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {caseItem.topics.map((topic) => (
                  <span key={topic} className="text-xs bg-gray-700 text-gray-400 px-2 py-0.5 rounded">
                    {topic}
                  </span>
                ))}
              </div>
              <a
                href={caseItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                Read Full Case ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Verification Tips */}
      <div className="glass-panel rounded-xl p-6 mt-8">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">✅ Verification Tips</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {VERIFICATION_TIPS.map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-green-400 mt-0.5">•</span>
              <span className="text-gray-300">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Authority Hierarchy Reminder */}
      <div className="glass-panel rounded-xl p-6">
        <h3 className="text-lg font-semibold text-cyan-400 mb-4">📊 Remember: Authority Hierarchy</h3>
        <p className="text-gray-400 mb-4">{AUTHORITY_HIERARCHY.description}</p>
        <div className="space-y-2">
          {AUTHORITY_HIERARCHY.levels.map((level) => (
            <div key={level.level} className="flex items-center gap-3 p-2 bg-gray-800/50 rounded">
              <span className="w-6 h-6 bg-cyan-500/20 text-cyan-400 rounded flex items-center justify-center text-sm font-bold">
                {level.level}
              </span>
              <div>
                <span className="text-white font-medium">{level.name}</span>
                <span className="text-gray-400 text-sm ml-2">- {level.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
