'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  DOCUMENT_CHECKLISTS,
  CATEGORY_LABELS,
  getRequiredDocuments,
  getConditionalDocuments,
  calculateTotalCost,
  type PathwayType,
  type Document,
  type DocumentCategory
} from '@/lib/legal/document-checklist'

type CheckedState = Record<string, boolean>

export default function DocumentChecklistPage() {
  const [selectedPathway, setSelectedPathway] = useState<PathwayType | null>(null)
  const [checkedItems, setCheckedItems] = useState<CheckedState>({})
  const [showConditional, setShowConditional] = useState(true)
  const [expandedCategories, setExpandedCategories] = useState<Set<DocumentCategory>>(new Set())

  const pathwayOptions: { value: PathwayType; label: string }[] = [
    { value: 'naturalization_standard', label: '🗽 Standard Naturalization (5 years)' },
    { value: 'naturalization_spouse', label: '💑 Spouse of U.S. Citizen (3 years)' },
    { value: 'naturalization_military_peacetime', label: '🎖️ Military - Peacetime' },
    { value: 'naturalization_military_wartime', label: '⚔️ Military - Wartime' },
    { value: 'birthright_jus_soli', label: '🇺🇸 Born in U.S.' },
    { value: 'birthright_jus_sanguinis', label: '🌍 Born Abroad to U.S. Parent' },
    { value: 'derivative_automatic', label: '👨‍👩‍👧 Derivative Citizenship (CCA)' },
    { value: 'certificate_of_citizenship', label: '📜 Certificate of Citizenship' }
  ]

  const checklist = selectedPathway ? DOCUMENT_CHECKLISTS[selectedPathway] : null
  const requiredDocs = selectedPathway ? getRequiredDocuments(selectedPathway) : []
  const conditionalDocs = selectedPathway ? getConditionalDocuments(selectedPathway) : []
  const totalCost = selectedPathway ? calculateTotalCost(selectedPathway) : 0

  // Group documents by category
  const documentsByCategory = useMemo(() => {
    if (!checklist) return new Map<DocumentCategory, Document[]>()
    
    const grouped = new Map<DocumentCategory, Document[]>()
    const allDocs = showConditional 
      ? checklist.documents 
      : checklist.documents.filter(d => d.priority !== 'conditional')
    
    allDocs.forEach(doc => {
      const existing = grouped.get(doc.category) || []
      existing.push(doc)
      grouped.set(doc.category, existing)
    })
    
    return grouped
  }, [checklist, showConditional])

  const toggleCheck = (docId: string) => {
    setCheckedItems(prev => ({ ...prev, [docId]: !prev[docId] }))
  }

  const toggleCategory = (category: DocumentCategory) => {
    setExpandedCategories(prev => {
      const next = new Set(prev)
      if (next.has(category)) {
        next.delete(category)
      } else {
        next.add(category)
      }
      return next
    })
  }

  const expandAll = () => {
    setExpandedCategories(new Set(documentsByCategory.keys()))
  }

  const collapseAll = () => {
    setExpandedCategories(new Set())
  }

  const checkedCount = Object.values(checkedItems).filter(Boolean).length
  const totalDocs = checklist?.documents.filter(d => 
    d.priority !== 'conditional' || showConditional
  ).length || 0
  const progress = totalDocs > 0 ? (checkedCount / totalDocs) * 100 : 0

  const resetChecklist = () => {
    setCheckedItems({})
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="cyber-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 via-transparent to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-cyan-900/30 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Document Checklist
            </span>
          </Link>
          <div className="flex gap-4">
            <Link 
              href="/eligibility"
              className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Eligibility Wizard
            </Link>
            <Link 
              href="/civics"
              className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Civics Test
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-cyan-400">Document</span>{' '}
            <span className="text-white">Checklist Generator</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get a comprehensive, pathway-specific checklist of all documents you&apos;ll need. 
            Track your progress and never miss a required document.
          </p>
        </div>

        {/* Pathway Selection */}
        <div className="glass-panel p-6 mb-8">
          <label htmlFor="pathway-select" className="block text-cyan-400 font-semibold mb-3 text-lg">
            Select Your Citizenship Pathway
          </label>
          <select
            id="pathway-select"
            title="Select Your Citizenship Pathway"
            value={selectedPathway || ''}
            onChange={(e) => {
              setSelectedPathway(e.target.value as PathwayType || null)
              setCheckedItems({})
              setExpandedCategories(new Set())
            }}
            className="w-full bg-gray-900/80 border border-cyan-900/50 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-lg"
          >
            <option value="">-- Choose a pathway --</option>
            {pathwayOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {checklist && (
          <>
            {/* Overview Panel */}
            <div className="glass-panel p-6 mb-8">
              <div className="flex flex-wrap justify-between items-start gap-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{checklist.pathwayName}</h2>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-gray-400">
                      <span className="text-cyan-400 font-semibold">Form:</span> {checklist.form}
                    </span>
                    <span className="text-gray-400">
                      <span className="text-yellow-400 font-semibold">Est. Prep Time:</span> {checklist.estimatedPrepTime}
                    </span>
                    <span className="text-gray-400">
                      <span className="text-green-400 font-semibold">Min. Filing Cost:</span> ${totalCost.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                {/* Progress */}
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <div className="text-right mb-2">
                    <span className="text-2xl font-bold text-cyan-400">{checkedCount}</span>
                    <span className="text-gray-400">/{totalDocs} collected</span>
                  </div>
                  <div className="w-full sm:w-64 h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Special Instructions */}
            {checklist.specialInstructions && checklist.specialInstructions.length > 0 && (
              <div className="glass-panel p-6 mb-8 border-l-4 border-yellow-500">
                <h3 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                  <span>⚠️</span> Important Instructions
                </h3>
                <ul className="space-y-2">
                  {checklist.specialInstructions.map((instruction, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-yellow-400">•</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Controls */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <div className="flex gap-3">
                <button
                  onClick={expandAll}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm"
                >
                  Collapse All
                </button>
                <button
                  onClick={resetChecklist}
                  className="px-4 py-2 bg-red-900/50 hover:bg-red-800/50 text-red-400 rounded-lg transition-colors text-sm"
                >
                  Reset Progress
                </button>
              </div>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showConditional}
                  onChange={(e) => setShowConditional(e.target.checked)}
                  className="w-4 h-4 rounded border-cyan-500 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-gray-400 text-sm">Show conditional documents</span>
              </label>
            </div>

            {/* Document Categories */}
            <div className="space-y-4">
              {Array.from(documentsByCategory.entries()).map(([category, docs]) => (
                <div key={category} className="glass-panel overflow-hidden">
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{getCategoryIcon(category)}</span>
                      <h3 className="text-lg font-semibold text-white">
                        {CATEGORY_LABELS[category]}
                      </h3>
                      <span className="text-sm text-gray-500">
                        ({docs.filter(d => checkedItems[d.id]).length}/{docs.length})
                      </span>
                    </div>
                    <span className={`text-cyan-400 transition-transform ${expandedCategories.has(category) ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>

                  {/* Documents List */}
                  {expandedCategories.has(category) && (
                    <div className="border-t border-cyan-900/30">
                      {docs.map(doc => (
                        <DocumentItem
                          key={doc.id}
                          document={doc}
                          isChecked={checkedItems[doc.id] || false}
                          onToggle={() => toggleCheck(doc.id)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400">{requiredDocs.length}</div>
                <div className="text-gray-400">Required Documents</div>
              </div>
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400">{conditionalDocs.length}</div>
                <div className="text-gray-400">Conditional Documents</div>
              </div>
              <div className="glass-panel p-6 text-center">
                <div className="text-3xl font-bold text-green-400">${totalCost.toLocaleString()}</div>
                <div className="text-gray-400">Minimum Filing Cost</div>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="mt-8 glass-panel p-6 bg-gray-900/50 border border-gray-800">
              <p className="text-gray-500 text-sm">
                <strong className="text-gray-400">Disclaimer:</strong> This checklist is provided for informational 
                purposes only and does not constitute legal advice. Requirements may change, and individual cases 
                may have unique requirements. Always verify with official USCIS resources and consider consulting 
                an immigration attorney for your specific situation.
              </p>
            </div>
          </>
        )}

        {/* Empty State */}
        {!selectedPathway && (
          <div className="glass-panel p-12 text-center">
            <div className="text-6xl mb-4">📑</div>
            <h3 className="text-xl font-semibold text-white mb-2">Select a Pathway to Begin</h3>
            <p className="text-gray-400">
              Choose your citizenship pathway above to generate a customized document checklist.
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

// Helper component for individual document items
function DocumentItem({ 
  document, 
  isChecked, 
  onToggle 
}: { 
  document: Document
  isChecked: boolean
  onToggle: () => void 
}) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className={`border-b border-cyan-900/20 last:border-b-0 ${isChecked ? 'bg-cyan-900/10' : ''}`}>
      <div className="px-6 py-4 flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
            isChecked 
              ? 'bg-cyan-500 border-cyan-500 text-black' 
              : 'border-gray-600 hover:border-cyan-500'
          }`}
        >
          {isChecked && <span className="text-sm">✓</span>}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className={`font-semibold ${isChecked ? 'text-gray-400 line-through' : 'text-white'}`}>
                {document.name}
                {document.priority === 'conditional' && (
                  <span className="ml-2 text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400">
                    Conditional
                  </span>
                )}
              </h4>
              <p className="text-gray-400 text-sm mt-1">{document.description}</p>
            </div>

            {/* Cost badge */}
            {document.cost !== undefined && (
              <span className={`flex-shrink-0 text-sm font-semibold ${document.cost === 0 ? 'text-green-400' : 'text-gray-400'}`}>
                {document.cost === 0 ? 'FREE' : `$${document.cost}`}
              </span>
            )}
          </div>

          {/* Expand/collapse details */}
          {(document.tips?.length || document.alternatives?.length || document.conditions?.length || document.whereToObtain) && (
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-cyan-400 text-sm mt-2 hover:text-cyan-300"
            >
              {showDetails ? '▼ Hide details' : '▶ Show details'}
            </button>
          )}

          {/* Details panel */}
          {showDetails && (
            <div className="mt-3 p-4 bg-black/30 rounded-lg space-y-3 text-sm">
              {document.conditions && document.conditions.length > 0 && (
                <div>
                  <span className="text-yellow-400 font-semibold">When needed: </span>
                  <span className="text-gray-300">{document.conditions.join('; ')}</span>
                </div>
              )}
              
              {document.alternatives && document.alternatives.length > 0 && (
                <div>
                  <span className="text-cyan-400 font-semibold">Alternatives: </span>
                  <span className="text-gray-300">{document.alternatives.join(' • ')}</span>
                </div>
              )}
              
              {document.whereToObtain && (
                <div>
                  <span className="text-green-400 font-semibold">Where to obtain: </span>
                  <span className="text-gray-300">{document.whereToObtain}</span>
                </div>
              )}
              
              {document.estimatedTime && (
                <div>
                  <span className="text-purple-400 font-semibold">Est. time: </span>
                  <span className="text-gray-300">{document.estimatedTime}</span>
                </div>
              )}
              
              {document.tips && document.tips.length > 0 && (
                <div>
                  <span className="text-blue-400 font-semibold">Tips:</span>
                  <ul className="mt-1 ml-4 space-y-1">
                    {document.tips.map((tip, i) => (
                      <li key={i} className="text-gray-300">• {tip}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {document.legalBasis && (
                <div className="text-gray-500 text-xs">
                  Legal basis: {document.legalBasis}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function getCategoryIcon(category: DocumentCategory): string {
  const icons: Record<DocumentCategory, string> = {
    forms: '📝',
    identity: '🪪',
    immigration_status: '🛂',
    residence: '🏠',
    physical_presence: '✈️',
    good_moral_character: '⚖️',
    marriage: '💍',
    military: '🎖️',
    citizenship_evidence: '📜',
    financial: '💰'
  }
  return icons[category] || '📄'
}
