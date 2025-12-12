'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CITIZENSHIP_DECISION_TREE, DecisionNode, getNode } from '@/lib/legal/decision-tree'

interface Answer {
  nodeId: string
  answer: boolean | null
}

interface PathwayResult {
  pathway: string
  title: string
  eligible: boolean
  requirements: string[]
  timeToEligibility?: string
  nextSteps: string[]
}

export default function EligibilityWizard() {
  const [currentNodeId, setCurrentNodeId] = useState<string>('entry')
  const [answers, setAnswers] = useState<Answer[]>([])
  const [history, setHistory] = useState<string[]>(['entry'])
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<PathwayResult[]>([])
  const [animateIn, setAnimateIn] = useState(true)

  const currentNode = getNode(currentNodeId)

  useEffect(() => {
    setAnimateIn(true)
    const timer = setTimeout(() => setAnimateIn(false), 300)
    return () => clearTimeout(timer)
  }, [currentNodeId])

  const handleAnswer = (answer: boolean) => {
    if (!currentNode) return

    setAnswers([...answers, { nodeId: currentNodeId, answer }])
    
    const nextNodeId = answer ? currentNode.nextOnYes : currentNode.nextOnNo
    
    if (nextNodeId) {
      const nextNode = getNode(nextNodeId)
      if (nextNode?.type === 'outcome') {
        // Reached an outcome
        calculateResults(nextNodeId)
        setShowResults(true)
      } else {
        setHistory([...history, nextNodeId])
        setCurrentNodeId(nextNodeId)
      }
    }
  }

  const handleBack = () => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1)
      const newAnswers = answers.slice(0, -1)
      setHistory(newHistory)
      setAnswers(newAnswers)
      setCurrentNodeId(newHistory[newHistory.length - 1])
      setShowResults(false)
    }
  }

  const handleReset = () => {
    setCurrentNodeId('entry')
    setAnswers([])
    setHistory(['entry'])
    setShowResults(false)
    setResults([])
  }

  const calculateResults = (outcomeNodeId: string) => {
    const outcomeNode = getNode(outcomeNodeId)
    if (!outcomeNode) return

    const pathwayResults: PathwayResult[] = []

    // Determine which pathway led to this outcome
    if (outcomeNodeId === 'outcome_citizen_by_birth') {
      pathwayResults.push({
        pathway: 'birthright',
        title: 'Citizenship by Birth',
        eligible: true,
        requirements: [
          'Obtain proof of citizenship',
          'Apply for U.S. passport or N-600'
        ],
        nextSteps: [
          'Apply for U.S. passport (recommended - faster/cheaper)',
          'Or file Form N-600 for Certificate of Citizenship',
          'Gather birth certificate and parent documents'
        ]
      })
    } else if (outcomeNodeId === 'outcome_derivative_citizen') {
      pathwayResults.push({
        pathway: 'derivative',
        title: 'Derivative Citizenship',
        eligible: true,
        requirements: [
          'Automatically acquired through parent',
          'Document the derivation chain'
        ],
        nextSteps: [
          'File Form N-600 for Certificate of Citizenship',
          'Gather parent\'s citizenship evidence',
          'Obtain birth certificate showing parentage'
        ]
      })
    } else if (outcomeNodeId === 'outcome_naturalized_citizen') {
      // Determine which naturalization track
      const usedSpousePathway = answers.some(a => 
        a.nodeId === 'naturalization_pathway_selection' && a.answer === true
      )
      const usedMilitaryPathway = answers.some(a => 
        a.nodeId === 'military_check' && a.answer === true
      )

      if (usedMilitaryPathway) {
        pathwayResults.push({
          pathway: 'military',
          title: 'Military Naturalization',
          eligible: true,
          requirements: [
            'Honorable service certification (N-426)',
            'Good moral character',
            'English & civics knowledge',
            'Attachment to Constitution'
          ],
          timeToEligibility: 'Eligible now (expedited processing)',
          nextSteps: [
            'Obtain N-426 certification from military',
            'File Form N-400 (fee waived)',
            'Attend biometrics appointment',
            'Pass interview and oath ceremony'
          ]
        })
      } else if (usedSpousePathway) {
        pathwayResults.push({
          pathway: 'spouse',
          title: 'Spouse of U.S. Citizen (3-Year Track)',
          eligible: true,
          requirements: [
            '3 years as LPR',
            '18 months physical presence',
            'Living in marital union with citizen spouse',
            'Good moral character',
            'English & civics knowledge'
          ],
          timeToEligibility: 'After 3 years as LPR',
          nextSteps: [
            'Calculate your eligibility date',
            'Prepare travel and marriage documentation',
            'File N-400 up to 90 days early',
            'Study for civics test'
          ]
        })
      } else {
        pathwayResults.push({
          pathway: 'standard',
          title: 'Standard Naturalization (5-Year Track)',
          eligible: true,
          requirements: [
            '5 years as LPR',
            '30 months physical presence',
            '3 months state residence',
            'Good moral character',
            'English & civics knowledge',
            'Attachment to Constitution'
          ],
          timeToEligibility: 'After 5 years as LPR',
          nextSteps: [
            'Calculate your eligibility date',
            'Document travel history',
            'File N-400 up to 90 days early',
            'Study for civics test (128 questions)'
          ]
        })
      }
    } else if (outcomeNodeId === 'outcome_need_green_card') {
      pathwayResults.push({
        pathway: 'pre-requisite',
        title: 'Green Card Required',
        eligible: false,
        requirements: [
          'Obtain Lawful Permanent Resident status first'
        ],
        nextSteps: [
          'Explore family-based immigration',
          'Explore employment-based immigration',
          'Consider Diversity Visa Lottery',
          'Consult immigration attorney'
        ]
      })
    }

    setResults(pathwayResults)
  }

  const renderNode = () => {
    if (!currentNode) return null

    if (currentNode.type === 'entry') {
      return (
        <div className="space-y-6">
          <p className="text-lg text-gray-300">
            This wizard will help determine which U.S. citizenship pathway may apply to your situation.
            Answer each question honestly to get the most accurate guidance.
          </p>
          <div className="glass-panel p-4 border-l-4 border-yellow-500">
            <p className="text-sm text-yellow-200">
              <strong>Disclaimer:</strong> This tool provides general information only and does not constitute legal advice.
              Immigration law is complex and individual circumstances vary. Consult a qualified immigration attorney
              for advice specific to your situation.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentNodeId('check_already_citizen')
              setHistory([...history, 'check_already_citizen'])
            }}
            className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg
                       hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-[1.02]
                       shadow-lg shadow-cyan-500/25"
          >
            Begin Eligibility Assessment →
          </button>
        </div>
      )
    }

    if (currentNode.type === 'decision') {
      return (
        <div className="space-y-6">
          <div className="text-lg text-gray-300 mb-6">
            <p className="font-semibold text-white mb-2">{currentNode.question}</p>
            {currentNode.description && (
              <p className="text-sm text-gray-400">{currentNode.description}</p>
            )}
          </div>
          
          {currentNode.metadata?.tips && (
            <div className="glass-panel p-4 border-l-4 border-cyan-500 mb-4">
              <p className="text-sm font-semibold text-cyan-400 mb-2">Helpful Information:</p>
              <ul className="text-sm text-gray-300 space-y-1">
                {currentNode.metadata.tips.map((tip, i) => (
                  <li key={i}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAnswer(true)}
              className="px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-lg
                         hover:from-green-500 hover:to-green-400 transition-all duration-300 transform hover:scale-[1.02]
                         shadow-lg shadow-green-500/25"
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(false)}
              className="px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg
                         hover:from-red-500 hover:to-red-400 transition-all duration-300 transform hover:scale-[1.02]
                         shadow-lg shadow-red-500/25"
            >
              No
            </button>
          </div>

          {/* Legal Citation */}
          <div className="text-xs text-gray-500 mt-4 p-3 bg-black/30 rounded">
            <strong>Legal Basis:</strong> {currentNode.legalBasis.statute}
            {currentNode.legalBasis.inaSection && ` (${currentNode.legalBasis.inaSection})`}
            {currentNode.legalBasis.cfr && ` | ${currentNode.legalBasis.cfr}`}
          </div>
        </div>
      )
    }

    if (currentNode.type === 'requirement' || currentNode.type === 'pathway') {
      // For requirement/pathway nodes, show info then auto-progress
      return (
        <div className="space-y-6">
          <div className="glass-panel p-6">
            <h3 className="text-xl font-bold text-white mb-4">{currentNode.title}</h3>
            <p className="text-gray-300 mb-4">{currentNode.description}</p>
            
            {currentNode.requirements && currentNode.requirements.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Requirements:</h4>
                <ul className="space-y-2">
                  {currentNode.requirements.map((req, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">◆</span>
                      <span><strong>{req.name}:</strong> {req.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentNode.processingInfo && (
              <div className="bg-black/30 p-4 rounded mt-4">
                <h4 className="font-semibold text-magenta-400 mb-2">Processing Information:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-gray-500">Form:</span> <span className="text-white">{currentNode.processingInfo.form}</span></div>
                  <div><span className="text-gray-500">Fee:</span> <span className="text-white">${currentNode.processingInfo.filingFee}</span></div>
                  <div className="col-span-2"><span className="text-gray-500">Estimated Time:</span> <span className="text-white">{currentNode.processingInfo.estimatedProcessingTime}</span></div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (currentNode.nextNodes && currentNode.nextNodes.length > 0) {
                const nextId = currentNode.nextNodes[0]
                const nextNode = getNode(nextId)
                if (nextNode?.type === 'outcome') {
                  calculateResults(nextId)
                  setShowResults(true)
                } else {
                  setHistory([...history, nextId])
                  setCurrentNodeId(nextId)
                }
              }
            }}
            className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-bold rounded-lg
                       hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300"
          >
            Continue →
          </button>
        </div>
      )
    }

    return null
  }

  const renderResults = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-block p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-magenta-500/20 mb-4">
          <svg className="w-16 h-16 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white">Assessment Complete</h2>
        <p className="text-gray-400 mt-2">Based on your answers, here are your citizenship pathway options:</p>
      </div>

      {results.map((result, index) => (
        <div
          key={index}
          className={`glass-panel p-6 border-l-4 ${result.eligible ? 'border-green-500' : 'border-yellow-500'}`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{result.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              result.eligible 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {result.eligible ? 'Potentially Eligible' : 'Pre-requisite Needed'}
            </span>
          </div>

          {result.timeToEligibility && (
            <div className="mb-4 p-3 bg-cyan-500/10 rounded">
              <span className="text-cyan-400 font-semibold">Timeline:</span>
              <span className="text-white ml-2">{result.timeToEligibility}</span>
            </div>
          )}

          <div className="mb-4">
            <h4 className="font-semibold text-gray-300 mb-2">Key Requirements:</h4>
            <ul className="space-y-1">
              {result.requirements.map((req, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="text-cyan-500">✓</span> {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-700 pt-4 mt-4">
            <h4 className="font-semibold text-magenta-400 mb-2">Recommended Next Steps:</h4>
            <ol className="space-y-1">
              {result.nextSteps.map((step, i) => (
                <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="bg-magenta-500/20 text-magenta-400 w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}

      <div className="glass-panel p-4 border-l-4 border-yellow-500">
        <p className="text-sm text-yellow-200">
          <strong>Important:</strong> This assessment provides general guidance only. Immigration law is complex
          and fact-specific. Many nuances and exceptions may apply to your situation. We strongly recommend
          consulting with a qualified immigration attorney before proceeding with any application.
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleReset}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white font-bold rounded-lg
                     hover:from-gray-500 hover:to-gray-400 transition-all duration-300"
        >
          Start Over
        </button>
        <Link
          href="/pathways"
          className="flex-1 px-6 py-4 bg-gradient-to-r from-magenta-600 to-magenta-500 text-white font-bold rounded-lg
                     hover:from-magenta-500 hover:to-magenta-400 transition-all duration-300 text-center"
        >
          Explore All Pathways
        </Link>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <div className="cyber-grid absolute inset-0 opacity-10" />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-400">
            Eligibility Wizard
          </h1>
          <p className="text-gray-400 mt-2">Interactive U.S. Citizenship Pathway Assessment</p>
        </div>

        {/* Progress Indicator */}
        {!showResults && (
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span>Progress</span>
              <span>{history.length} step{history.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-magenta-500 transition-all duration-500"
                style={{ width: `${Math.min((history.length / 8) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className={`glass-panel p-8 transition-all duration-300 ${animateIn ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {!showResults ? (
            <>
              {currentNode && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {currentNode.title}
                  </span>
                </div>
              )}
              {renderNode()}
            </>
          ) : (
            renderResults()
          )}
        </div>

        {/* Navigation */}
        {!showResults && history.length > 1 && (
          <div className="mt-4">
            <button
              onClick={handleBack}
              className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              ← Go Back
            </button>
          </div>
        )}

        {/* Legal Footer */}
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>Legal framework: Immigration and Nationality Act (8 U.S.C. Chapter 12) • Code of Federal Regulations (8 CFR)</p>
          <p className="mt-1">This tool is for informational purposes only and does not constitute legal advice.</p>
        </div>
      </div>
    </main>
  )
}
