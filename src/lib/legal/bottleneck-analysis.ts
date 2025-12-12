/**
 * Bottleneck Analysis Model
 * 
 * Identifies pain points, delays, and areas for improvement in the
 * citizenship process. Analyzes where technology could help.
 * 
 * Based on:
 * - USCIS Processing Statistics
 * - GAO Reports on Immigration Processing
 * - Academic Research on Immigration Backlogs
 * - User Experience Studies
 * 
 * Last Updated: December 2025
 */

export type BottleneckCategory = 
  | 'application_prep'
  | 'filing'
  | 'biometrics'
  | 'background_check'
  | 'interview'
  | 'decision'
  | 'oath'
  | 'systemic'

export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low'
export type ImprovementType = 'technology' | 'policy' | 'resources' | 'process'

export interface Bottleneck {
  id: string
  name: string
  category: BottleneckCategory
  severity: SeverityLevel
  description: string
  impact: string
  causes: string[]
  affectedPopulation: string
  averageDelay: string
  statistics?: {
    metric: string
    value: string | number
    source: string
  }[]
  potentialSolutions: Solution[]
  realWorldExamples: string[]
}

export interface Solution {
  id: string
  name: string
  type: ImprovementType
  description: string
  feasibility: 'high' | 'medium' | 'low'
  estimatedImpact: string
  implementationChallenges: string[]
  existingExamples?: string[]
}

export interface TechOpportunity {
  id: string
  name: string
  description: string
  targetedBottlenecks: string[]
  implementation: string
  benefits: string[]
  risks: string[]
  currentStatus: 'implemented' | 'in_progress' | 'proposed' | 'conceptual'
}

// ═══════════════════════════════════════════════════════════════════════════════
// BOTTLENECK DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const BOTTLENECKS: Bottleneck[] = [
  {
    id: 'app_complexity',
    name: 'Application Complexity',
    category: 'application_prep',
    severity: 'high',
    description: 'N-400 is 20 pages with 100+ questions requiring detailed historical information spanning 5+ years',
    impact: 'Increases errors, rejections, delays; discourages eligible applicants',
    causes: [
      'Legal requirements mandate comprehensive disclosure',
      'Form design not optimized for user experience',
      'Questions require information not readily available',
      'Multiple overlapping questions create confusion',
      'Address history format inflexible'
    ],
    affectedPopulation: 'All naturalization applicants (~1M/year)',
    averageDelay: '1-4 weeks of preparation',
    statistics: [
      { metric: 'Application rejection rate (incomplete)', value: '10-15%', source: 'USCIS Data' },
      { metric: 'RFE rate (missing info)', value: '20-25%', source: 'USCIS FY2023' }
    ],
    potentialSolutions: [
      {
        id: 'smart_form',
        name: 'Intelligent Form System',
        type: 'technology',
        description: 'Dynamic form that shows only relevant questions based on answers',
        feasibility: 'high',
        estimatedImpact: '30% reduction in errors',
        implementationChallenges: ['Legacy system integration', 'Testing across scenarios'],
        existingExamples: ['TurboTax adaptive questioning', 'UK immigration online forms']
      },
      {
        id: 'document_scanner',
        name: 'Document Auto-Fill',
        type: 'technology',
        description: 'OCR scanning of passport, green card to auto-populate fields',
        feasibility: 'high',
        estimatedImpact: '20% reduction in prep time',
        implementationChallenges: ['Accuracy validation', 'Document format variations'],
        existingExamples: ['Mobile check deposit', 'Global Entry kiosks']
      }
    ],
    realWorldExamples: [
      'Applicant confused by "trips outside US" - does a 2-hour border crossing count?',
      'Name variations across documents causing rejection',
      'Difficulty reconstructing 5-year address history after multiple moves'
    ]
  },
  {
    id: 'filing_errors',
    name: 'Filing Errors & Rejections',
    category: 'filing',
    severity: 'medium',
    description: 'Applications rejected for technical errors require complete refiling',
    impact: 'Adds 2-6 months to timeline; additional fees if payment issues',
    causes: [
      'Signature in wrong color ink',
      'Incorrect fee amount',
      'Wrong form edition used',
      'Photos not meeting specifications',
      'Missing required initial evidence'
    ],
    affectedPopulation: '10-15% of all applicants',
    averageDelay: '2-3 months',
    statistics: [
      { metric: 'Initial rejection rate', value: '12%', source: 'USCIS FY2023' },
      { metric: 'Average time to refile', value: '45 days', source: 'Estimated' }
    ],
    potentialSolutions: [
      {
        id: 'real_time_validation',
        name: 'Real-Time Validation',
        type: 'technology',
        description: 'Immediate validation of all fields before submission',
        feasibility: 'high',
        estimatedImpact: '90% reduction in rejections',
        implementationChallenges: ['Requires all-electronic filing'],
        existingExamples: ['E-filing in courts', 'Online visa applications']
      }
    ],
    realWorldExamples: [
      'Application rejected for using blue ink instead of black',
      'Fee increased between form download and filing - check returned',
      'Form edition outdated by 2 days at time of receipt'
    ]
  },
  {
    id: 'biometrics_scheduling',
    name: 'Biometrics Scheduling Delays',
    category: 'biometrics',
    severity: 'medium',
    description: 'Limited ASC capacity creates scheduling bottlenecks',
    impact: 'Delays background check initiation; cascading timeline impact',
    causes: [
      'Limited number of Application Support Centers',
      'Geographic concentration of applicants',
      'Walk-in availability inconsistent',
      'Appointment no-shows not efficiently reallocated',
      'COVID-19 backlog effects persisting'
    ],
    affectedPopulation: 'All applicants requiring biometrics',
    averageDelay: '2-8 weeks',
    statistics: [
      { metric: 'Average wait for appointment', value: '4 weeks', source: 'USCIS' },
      { metric: 'No-show rate', value: '15%', source: 'Estimated' }
    ],
    potentialSolutions: [
      {
        id: 'mobile_biometrics',
        name: 'Mobile Biometrics Collection',
        type: 'technology',
        description: 'Mobile units or partner locations (post offices, DMVs) for fingerprinting',
        feasibility: 'medium',
        estimatedImpact: '50% reduction in wait times',
        implementationChallenges: ['Security requirements', 'Equipment standardization', 'Partnership agreements'],
        existingExamples: ['TSA PreCheck at Staples', 'Mobile DMV services']
      },
      {
        id: 'biometric_reuse',
        name: 'Biometric Reuse',
        type: 'policy',
        description: 'Allow reuse of biometrics from previous immigration applications',
        feasibility: 'high',
        estimatedImpact: '20% reduction in appointments needed',
        implementationChallenges: ['Data freshness concerns', 'Inter-agency sharing'],
        existingExamples: ['Global Entry renewal uses previous biometrics']
      }
    ],
    realWorldExamples: [
      'Rural applicant must travel 200 miles to nearest ASC',
      'Appointment scheduled 6 weeks out, applicant cannot reschedule',
      'Walk-in attempt rejected due to capacity'
    ]
  },
  {
    id: 'fbi_name_check',
    name: 'FBI Name Check Delays',
    category: 'background_check',
    severity: 'critical',
    description: 'FBI name checks for common names or names similar to watchlist entries cause extreme delays',
    impact: 'Cases stuck for months to years; no applicant recourse',
    causes: [
      'Manual review required for name matches',
      'Common names trigger multiple hits',
      'Transliteration variations from non-Latin scripts',
      'Limited FBI resources dedicated to immigration checks',
      'No statutory deadline for completion'
    ],
    affectedPopulation: '5-10% of applicants (higher for certain name patterns)',
    averageDelay: '6-24+ months for affected cases',
    statistics: [
      { metric: 'Cases pending >6 months due to background', value: '8%', source: 'GAO Report' },
      { metric: 'Average name check time (standard)', value: '72 hours', source: 'FBI' },
      { metric: 'Average name check time (requires review)', value: '6+ months', source: 'AILA Survey' }
    ],
    potentialSolutions: [
      {
        id: 'ai_name_matching',
        name: 'AI-Enhanced Name Matching',
        type: 'technology',
        description: 'Machine learning to better distinguish between name matches',
        feasibility: 'medium',
        estimatedImpact: '60% reduction in false positives',
        implementationChallenges: ['Accuracy requirements for security', 'Bias concerns', 'Validation complexity'],
        existingExamples: ['TSA Secure Flight program improvements']
      },
      {
        id: 'statutory_deadline',
        name: 'Statutory Deadline for Checks',
        type: 'policy',
        description: 'Legislate maximum timeframe for background check completion',
        feasibility: 'low',
        estimatedImpact: 'Would force resource allocation',
        implementationChallenges: ['Congressional action required', 'Security concerns'],
        existingExamples: ['N-400 interview must occur within certain timeframe after filing']
      }
    ],
    realWorldExamples: [
      'Applicant named "Mohammed Ahmed" waited 18 months for name check',
      'Vietnamese applicant with common name variation stuck 2 years',
      'Name similar to person on watch list - 14 month delay despite no connection'
    ]
  },
  {
    id: 'interview_scheduling',
    name: 'Interview Scheduling Backlog',
    category: 'interview',
    severity: 'high',
    description: 'Insufficient interview slots relative to application volume',
    impact: 'Cases sit ready for interview for months',
    causes: [
      'Officer availability limited',
      'Some offices dramatically under-resourced vs. demand',
      'No evening/weekend interview availability',
      'Interpreter scheduling complications',
      'Rescheduling inefficiencies'
    ],
    affectedPopulation: 'All applicants',
    averageDelay: '2-6 months post background check',
    statistics: [
      { metric: 'Average wait for interview (national)', value: '3.5 months', source: 'USCIS' },
      { metric: 'Longest field office wait', value: '10+ months', source: 'Processing Times' },
      { metric: 'Shortest field office wait', value: '5 weeks', source: 'Processing Times' }
    ],
    potentialSolutions: [
      {
        id: 'video_interviews',
        name: 'Video Interview Option',
        type: 'technology',
        description: 'Allow remote video interviews for straightforward cases',
        feasibility: 'medium',
        estimatedImpact: '40% increase in interview capacity',
        implementationChallenges: ['Identity verification', 'Document review', 'Civics test administration'],
        existingExamples: ['Immigration interviews in some countries', 'Court video hearings']
      },
      {
        id: 'extended_hours',
        name: 'Extended Interview Hours',
        type: 'resources',
        description: 'Evening and weekend interview availability',
        feasibility: 'high',
        estimatedImpact: '30% increase in capacity',
        implementationChallenges: ['Staff scheduling', 'Union agreements', 'Building access'],
        existingExamples: ['Some field offices piloted Saturday interviews']
      }
    ],
    realWorldExamples: [
      'Miami field office: 10 month wait for interview',
      'Seattle: 5 week wait (same form, same time period)',
      'Applicant received interview notice for date already passed'
    ]
  },
  {
    id: 'civics_test_failure',
    name: 'Civics/English Test Failures',
    category: 'interview',
    severity: 'medium',
    description: 'Applicants who fail tests must reinterview, adding months',
    impact: 'Second interview required; some ultimately denied',
    causes: [
      'Limited study resources',
      'Test anxiety',
      'Lack of preparation guidance',
      'Language barriers for elderly applicants',
      'Misconceptions about test format'
    ],
    affectedPopulation: '10-15% of interviewees',
    averageDelay: '2-4 months for retest',
    statistics: [
      { metric: 'First-time pass rate (civics)', value: '91%', source: 'USCIS' },
      { metric: 'First-time pass rate (English)', value: '88%', source: 'USCIS' },
      { metric: 'Pass rate after 2nd attempt', value: '96%', source: 'USCIS' }
    ],
    potentialSolutions: [
      {
        id: 'study_app',
        name: 'Official Study Application',
        type: 'technology',
        description: 'USCIS-developed comprehensive study app with practice tests',
        feasibility: 'high',
        estimatedImpact: '5% improvement in first-time pass rate',
        implementationChallenges: ['Development resources', 'Multilingual support'],
        existingExamples: ['Current USCIS practice materials are limited']
      },
      {
        id: 'community_prep',
        name: 'Community-Based Preparation',
        type: 'resources',
        description: 'Funded citizenship preparation classes in libraries, community centers',
        feasibility: 'high',
        estimatedImpact: '10% improvement in pass rates',
        implementationChallenges: ['Funding allocation', 'Geographic coverage'],
        existingExamples: ['Library-based citizenship classes exist but underfunded']
      }
    ],
    realWorldExamples: [
      'Elderly applicant failed due to nervousness, passed easily on second attempt',
      'Applicant studied wrong set of questions (pre-2020 version)',
      'Test anxiety caused by unfamiliar interview environment'
    ]
  },
  {
    id: 'oath_ceremony_backlog',
    name: 'Oath Ceremony Scheduling',
    category: 'oath',
    severity: 'low',
    description: 'Approved applicants wait weeks to months for oath ceremony',
    impact: 'Cannot vote, obtain passport, or exercise citizenship rights',
    causes: [
      'Limited ceremony capacity',
      'Judicial vs. administrative oath variations',
      'Geographic constraints',
      'Large group ceremonies require coordination'
    ],
    affectedPopulation: 'All approved applicants',
    averageDelay: '1-8 weeks post-approval',
    statistics: [
      { metric: 'Same-day oath availability', value: '15% of offices', source: 'USCIS' },
      { metric: 'Average wait for ceremony', value: '4 weeks', source: 'USCIS' }
    ],
    potentialSolutions: [
      {
        id: 'same_day_oath',
        name: 'Universal Same-Day Oath',
        type: 'process',
        description: 'Offer administrative oath immediately after passing interview',
        feasibility: 'high',
        estimatedImpact: 'Eliminate oath wait entirely',
        implementationChallenges: ['Judicial oath preference by some', 'Certificate preparation'],
        existingExamples: ['Some field offices already offer this']
      },
      {
        id: 'virtual_ceremony',
        name: 'Virtual Oath Ceremonies',
        type: 'technology',
        description: 'Allow video oath ceremonies with electronic certificate',
        feasibility: 'medium',
        estimatedImpact: '100% elimination of ceremony scheduling issues',
        implementationChallenges: ['Solemnity concerns', 'Certificate delivery'],
        existingExamples: ['COVID-era virtual ceremonies were successful']
      }
    ],
    realWorldExamples: [
      'Approved applicant missed voter registration deadline waiting for ceremony',
      'Ceremony postponed due to judge availability',
      'Large naturalization ceremony cancelled, thousands rescheduled'
    ]
  },
  {
    id: 'systemic_underfunding',
    name: 'Systemic Underfunding',
    category: 'systemic',
    severity: 'critical',
    description: 'USCIS fee-funded model creates boom-bust cycles and chronic understaffing',
    impact: 'Processing times fluctuate dramatically; service quality inconsistent',
    causes: [
      'Self-funded through fees, not appropriations',
      'Application volume unpredictable',
      'Cannot easily adjust staffing to demand',
      'Fee increases face political resistance',
      'COVID-19 devastated fee revenue'
    ],
    affectedPopulation: 'All applicants',
    averageDelay: 'Varies by funding cycle',
    statistics: [
      { metric: 'USCIS staff reduction (2020)', value: '13%', source: 'USCIS' },
      { metric: 'Backlog increase (2020-2022)', value: '87%', source: 'GAO' },
      { metric: 'Fee increase (2024)', value: '35%', source: 'USCIS Final Rule' }
    ],
    potentialSolutions: [
      {
        id: 'appropriations_funding',
        name: 'Congressional Appropriations',
        type: 'policy',
        description: 'Provide baseline funding through congressional appropriations',
        feasibility: 'low',
        estimatedImpact: 'Stable, predictable operations',
        implementationChallenges: ['Congressional action required', 'Budget politics'],
        existingExamples: ['Most government agencies receive appropriations']
      },
      {
        id: 'premium_processing',
        name: 'Expanded Premium Processing',
        type: 'policy',
        description: 'Offer premium processing for N-400 at additional fee',
        feasibility: 'high',
        estimatedImpact: 'Additional revenue to fund standard processing',
        implementationChallenges: ['Equity concerns', 'Two-tier system perception'],
        existingExamples: ['Premium processing exists for employment-based petitions']
      }
    ],
    realWorldExamples: [
      'Processing times doubled during COVID due to office closures',
      'FY2020 furlough notice sent to 70% of workforce (later averted)',
      'Dramatic variations in processing times by fiscal year'
    ]
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// TECHNOLOGY OPPORTUNITIES
// ═══════════════════════════════════════════════════════════════════════════════

export const TECH_OPPORTUNITIES: TechOpportunity[] = [
  {
    id: 'unified_digital_platform',
    name: 'Unified Digital Immigration Platform',
    description: 'End-to-end digital platform replacing paper forms, enabling real-time tracking, and providing intelligent guidance',
    targetedBottlenecks: ['app_complexity', 'filing_errors', 'systemic_underfunding'],
    implementation: 'Cloud-based platform with mobile support, AI-assisted form completion, document upload, status tracking',
    benefits: [
      'Eliminate paper processing delays',
      'Reduce errors through validation',
      'Enable 24/7 self-service',
      'Reduce USCIS administrative burden',
      'Improve applicant experience'
    ],
    risks: [
      'Digital divide may disadvantage some populations',
      'Security and privacy requirements complex',
      'Legacy system migration challenges',
      'High initial investment required'
    ],
    currentStatus: 'in_progress'
  },
  {
    id: 'ai_adjudication_assist',
    name: 'AI-Assisted Adjudication',
    description: 'Machine learning tools to assist officers in reviewing applications, flagging issues, and suggesting decisions',
    targetedBottlenecks: ['interview_scheduling', 'fbi_name_check'],
    implementation: 'NLP analysis of applications, pattern recognition for fraud detection, decision support dashboards',
    benefits: [
      'Faster case review',
      'More consistent decisions',
      'Flag complex cases for human review',
      'Reduce officer workload'
    ],
    risks: [
      'Algorithmic bias concerns',
      'Accountability for AI-influenced decisions',
      'Public trust issues',
      'Requires extensive validation'
    ],
    currentStatus: 'conceptual'
  },
  {
    id: 'blockchain_identity',
    name: 'Blockchain-Based Identity Verification',
    description: 'Immutable identity records enabling faster verification and reducing document fraud',
    targetedBottlenecks: ['biometrics_scheduling', 'fbi_name_check'],
    implementation: 'Distributed ledger for identity attributes, cryptographic verification, cross-agency sharing',
    benefits: [
      'Tamper-proof identity records',
      'Instant verification',
      'Reduce duplicate biometrics collection',
      'Enable trusted identity ecosystem'
    ],
    risks: [
      'Technology maturity questions',
      'Interoperability challenges',
      'Privacy and government surveillance concerns',
      'Implementation complexity'
    ],
    currentStatus: 'conceptual'
  },
  {
    id: 'chatbot_assistance',
    name: 'Intelligent Virtual Assistant',
    description: 'AI chatbot providing 24/7 guidance on naturalization process, requirements, and case status',
    targetedBottlenecks: ['app_complexity', 'civics_test_failure'],
    implementation: 'Conversational AI trained on immigration law, case status integration, multilingual support',
    benefits: [
      'Reduce USCIS Contact Center load',
      'Immediate answers to common questions',
      'Personalized guidance',
      'Available in multiple languages'
    ],
    risks: [
      'Accuracy critical for legal information',
      'Cannot handle complex cases',
      'May frustrate users seeking human help',
      'Liability for incorrect information'
    ],
    currentStatus: 'in_progress'
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function getBottlenecksByCategory(category: BottleneckCategory): Bottleneck[] {
  return BOTTLENECKS.filter(b => b.category === category)
}

export function getBottlenecksBySeverity(severity: SeverityLevel): Bottleneck[] {
  return BOTTLENECKS.filter(b => b.severity === severity)
}

export function getCriticalBottlenecks(): Bottleneck[] {
  return getBottlenecksBySeverity('critical')
}

export function getSolutionsByType(type: ImprovementType): Solution[] {
  return BOTTLENECKS.flatMap(b => b.potentialSolutions.filter(s => s.type === type))
}

export function getTechOpportunitiesForBottleneck(bottleneckId: string): TechOpportunity[] {
  return TECH_OPPORTUNITIES.filter(t => t.targetedBottlenecks.includes(bottleneckId))
}

export const CATEGORY_LABELS: Record<BottleneckCategory, string> = {
  application_prep: 'Application Preparation',
  filing: 'Filing & Receipt',
  biometrics: 'Biometrics',
  background_check: 'Background Check',
  interview: 'Interview',
  decision: 'Decision',
  oath: 'Oath Ceremony',
  systemic: 'Systemic Issues'
}

export const SEVERITY_COLORS: Record<SeverityLevel, string> = {
  critical: '#EF4444',
  high: '#F97316',
  medium: '#EAB308',
  low: '#22C55E'
}
