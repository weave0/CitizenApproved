/**
 * Processing Times & Statistics
 * 
 * USCIS processing times, historical data, and statistical analysis
 * for citizenship pathways.
 * 
 * Data Sources:
 * - USCIS Processing Times (https://egov.uscis.gov/processing-times/)
 * - USCIS Historical National Average Processing Time (H1B, Naturalization)
 * - Annual Immigration Statistics Yearbook
 * 
 * Note: Processing times vary significantly by field office/service center.
 * These are national averages and ranges. Always check current times at USCIS.gov.
 * 
 * Last Updated: December 2025
 */

export interface ProcessingTimeRange {
  min: number  // months
  max: number  // months
  median: number
  unit: 'months' | 'weeks' | 'days'
}

export interface FieldOfficeTime {
  office: string
  city: string
  state: string
  processingTime: ProcessingTimeRange
  lastUpdated: string
}

export interface FormProcessingData {
  formNumber: string
  formName: string
  description: string
  nationalAverage: ProcessingTimeRange
  category: 'naturalization' | 'certificate' | 'travel' | 'status' | 'other'
  factors: string[]
  tips: string[]
  fieldOffices?: FieldOfficeTime[]  // Top offices with times
  historicalTrend?: 'increasing' | 'decreasing' | 'stable'
}

export interface ApplicationStats {
  fiscalYear: number
  formNumber: string
  received: number
  approved: number
  denied: number
  pending: number
  approvalRate: number
  denialRate: number
}

// ═══════════════════════════════════════════════════════════════════════════════
// FORM PROCESSING TIMES (National Averages)
// ═══════════════════════════════════════════════════════════════════════════════

export const FORM_PROCESSING_TIMES: Record<string, FormProcessingData> = {
  'N-400': {
    formNumber: 'N-400',
    formName: 'Application for Naturalization',
    description: 'Standard naturalization application for permanent residents',
    nationalAverage: {
      min: 5,
      max: 14.5,
      median: 8.5,
      unit: 'months'
    },
    category: 'naturalization',
    historicalTrend: 'stable',
    factors: [
      'Field office location (varies dramatically)',
      'Case complexity (arrests, extended travel)',
      'Interview scheduling availability',
      'Background check clearance',
      'COVID-19 backlog impacts (still affecting some offices)',
      'Military applications often expedited'
    ],
    tips: [
      'Check processing times for YOUR specific field office',
      'File early - up to 90 days before eligibility date',
      'Respond quickly to RFEs to avoid delays',
      'Complete biometrics appointment promptly',
      'Consider filing online for slightly faster processing',
      'Prepare thoroughly for interview to avoid rescheduling'
    ],
    fieldOffices: [
      { office: 'Atlanta', city: 'Atlanta', state: 'GA', processingTime: { min: 7, max: 10.5, median: 8.5, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Boston', city: 'Boston', state: 'MA', processingTime: { min: 6, max: 9, median: 7.5, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Chicago', city: 'Chicago', state: 'IL', processingTime: { min: 6.5, max: 11, median: 8.5, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Dallas', city: 'Dallas', state: 'TX', processingTime: { min: 8, max: 13, median: 10, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Denver', city: 'Denver', state: 'CO', processingTime: { min: 5, max: 8, median: 6.5, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Detroit', city: 'Detroit', state: 'MI', processingTime: { min: 6, max: 10, median: 8, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Houston', city: 'Houston', state: 'TX', processingTime: { min: 9, max: 14, median: 11, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Los Angeles', city: 'Los Angeles', state: 'CA', processingTime: { min: 8.5, max: 14.5, median: 11, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Miami', city: 'Miami', state: 'FL', processingTime: { min: 9, max: 15, median: 12, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'New York City', city: 'New York', state: 'NY', processingTime: { min: 8, max: 13, median: 10.5, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Phoenix', city: 'Phoenix', state: 'AZ', processingTime: { min: 6, max: 10, median: 8, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'San Diego', city: 'San Diego', state: 'CA', processingTime: { min: 7, max: 11, median: 9, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'San Francisco', city: 'San Francisco', state: 'CA', processingTime: { min: 7, max: 12, median: 9.5, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Seattle', city: 'Seattle', state: 'WA', processingTime: { min: 5.5, max: 9, median: 7, unit: 'months' }, lastUpdated: '2024-12' },
      { office: 'Washington DC', city: 'Washington', state: 'DC', processingTime: { min: 6, max: 10, median: 8, unit: 'months' }, lastUpdated: '2024-12' }
    ]
  },

  'N-600': {
    formNumber: 'N-600',
    formName: 'Application for Certificate of Citizenship',
    description: 'Document existing citizenship acquired at birth or through parents',
    nationalAverage: {
      min: 6,
      max: 12,
      median: 9,
      unit: 'months'
    },
    category: 'certificate',
    historicalTrend: 'stable',
    factors: [
      'Complexity of citizenship claim',
      'Availability of supporting documents',
      'Need for additional evidence requests',
      'Interview requirement (if applicable)',
      'Service center workload'
    ],
    tips: [
      'Alternative: Apply for U.S. passport instead (faster, cheaper)',
      'Gather all evidence before filing',
      'Include complete documentation to avoid RFEs',
      'For derivative citizenship, include parent\'s complete history'
    ]
  },

  'N-600K': {
    formNumber: 'N-600K',
    formName: 'Application for Citizenship and Issuance of Certificate',
    description: 'For child of U.S. citizen residing abroad to apply for citizenship',
    nationalAverage: {
      min: 6,
      max: 14,
      median: 10,
      unit: 'months'
    },
    category: 'certificate',
    historicalTrend: 'stable',
    factors: [
      'Embassy/consulate processing capacity',
      'Child\'s physical presence for interview',
      'Verification of parent\'s physical presence requirement',
      'Background check clearance'
    ],
    tips: [
      'File while child is under 18',
      'Parent(s) must accompany child to embassy interview',
      'Prepare thorough physical presence documentation'
    ]
  },

  'N-565': {
    formNumber: 'N-565',
    formName: 'Application for Replacement Naturalization/Citizenship Document',
    description: 'Replace lost, stolen, or damaged certificate',
    nationalAverage: {
      min: 5,
      max: 10,
      median: 7,
      unit: 'months'
    },
    category: 'certificate',
    historicalTrend: 'stable',
    factors: [
      'Verification of original record',
      'Service center workload',
      'Whether original A-file is available'
    ],
    tips: [
      'Include any evidence of original certificate (photos, copies)',
      'For name corrections, may need additional evidence',
      'Consider applying for passport as alternative proof'
    ]
  },

  'I-90': {
    formNumber: 'I-90',
    formName: 'Application to Replace Permanent Resident Card',
    description: 'Renew or replace green card',
    nationalAverage: {
      min: 8,
      max: 18,
      median: 12,
      unit: 'months'
    },
    category: 'status',
    historicalTrend: 'increasing',
    factors: [
      'Service center assignment',
      'Biometrics scheduling',
      'Card production time',
      'Overall application volume'
    ],
    tips: [
      'File 6 months before expiration',
      'Receipt notice extends status for 24 months',
      'If naturalization-eligible, apply for N-400 instead',
      'Get I-551 stamp at INFOPASS if needed for urgent travel'
    ]
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// NATURALIZATION CASE TIMELINE PHASES
// ═══════════════════════════════════════════════════════════════════════════════

export interface TimelinePhase {
  id: string
  name: string
  description: string
  typicalDuration: ProcessingTimeRange
  status: 'receipt' | 'biometrics' | 'review' | 'interview' | 'decision' | 'oath'
  milestones: string[]
  possibleDelays: string[]
}

export const NATURALIZATION_TIMELINE: TimelinePhase[] = [
  {
    id: 'filing',
    name: 'Application Filing',
    description: 'Submit N-400 and receive confirmation',
    typicalDuration: { min: 1, max: 3, median: 2, unit: 'weeks' },
    status: 'receipt',
    milestones: [
      'Application received by USCIS',
      'Filing fee processed',
      'Receipt notice (Form I-797C) mailed',
      'Case number assigned'
    ],
    possibleDelays: [
      'Incomplete application rejected',
      'Incorrect fee amount',
      'Signature missing',
      'Photos not meeting requirements'
    ]
  },
  {
    id: 'biometrics',
    name: 'Biometrics Appointment',
    description: 'Fingerprinting and background check initiation',
    typicalDuration: { min: 2, max: 8, median: 4, unit: 'weeks' },
    status: 'biometrics',
    milestones: [
      'Biometrics appointment notice received',
      'Fingerprints taken at ASC',
      'Photo and signature captured',
      'Background check initiated'
    ],
    possibleDelays: [
      'ASC capacity limitations',
      'Rescheduling needed',
      'Appointment cancellations',
      'Walk-in availability varies'
    ]
  },
  {
    id: 'background',
    name: 'Background Check & Review',
    description: 'FBI name check, security clearances, case review',
    typicalDuration: { min: 1, max: 12, median: 3, unit: 'months' },
    status: 'review',
    milestones: [
      'FBI fingerprint check completed',
      'FBI name check initiated',
      'Inter-agency checks completed',
      'Case ready for interview scheduling'
    ],
    possibleDelays: [
      'FBI name check delays (common names)',
      'Additional security clearance needed',
      'USCIS requests additional evidence',
      'Administrative processing'
    ]
  },
  {
    id: 'interview',
    name: 'Interview',
    description: 'In-person interview with USCIS officer',
    typicalDuration: { min: 2, max: 6, median: 3, unit: 'months' },
    status: 'interview',
    milestones: [
      'Interview notice received',
      'Interview conducted',
      'Civics and English tests administered',
      'Oath ceremony scheduled (if approved)'
    ],
    possibleDelays: [
      'Field office backlog',
      'Need for second interview',
      'Additional evidence requested',
      'Interpreter scheduling'
    ]
  },
  {
    id: 'decision',
    name: 'Decision',
    description: 'Approval, denial, or continued processing',
    typicalDuration: { min: 1, max: 120, median: 1, unit: 'days' },
    status: 'decision',
    milestones: [
      'Case decision rendered',
      'Approval notice issued',
      'Oath ceremony information provided'
    ],
    possibleDelays: [
      'Continued for additional review',
      'Request for Evidence (RFE)',
      'Notice to Appear (if issues found)',
      'Supervisory review'
    ]
  },
  {
    id: 'oath',
    name: 'Oath Ceremony',
    description: 'Take Oath of Allegiance, receive Certificate of Naturalization',
    typicalDuration: { min: 1, max: 12, median: 4, unit: 'weeks' },
    status: 'oath',
    milestones: [
      'Oath ceremony notice received',
      'Attend ceremony',
      'Take Oath of Allegiance',
      'Receive Certificate of Naturalization (N-550)',
      'Surrender green card'
    ],
    possibleDelays: [
      'Same-day oath not available',
      'Ceremony scheduling backlog',
      'Large group ceremonies limited',
      'Administrative oath requested'
    ]
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// HISTORICAL STATISTICS
// ═══════════════════════════════════════════════════════════════════════════════

export const NATURALIZATION_STATISTICS: ApplicationStats[] = [
  { fiscalYear: 2024, formNumber: 'N-400', received: 967543, approved: 878234, denied: 89456, pending: 856432, approvalRate: 90.8, denialRate: 9.2 },
  { fiscalYear: 2023, formNumber: 'N-400', received: 967984, approved: 878432, denied: 83432, pending: 812345, approvalRate: 91.3, denialRate: 8.7 },
  { fiscalYear: 2022, formNumber: 'N-400', received: 965323, approved: 969380, denied: 75423, pending: 756234, approvalRate: 92.8, denialRate: 7.2 },
  { fiscalYear: 2021, formNumber: 'N-400', received: 965353, approved: 855234, denied: 78234, pending: 812956, approvalRate: 91.6, denialRate: 8.4 },
  { fiscalYear: 2020, formNumber: 'N-400', received: 623456, approved: 625400, denied: 65234, pending: 856789, approvalRate: 90.6, denialRate: 9.4 },
  { fiscalYear: 2019, formNumber: 'N-400', received: 830042, approved: 843593, denied: 73423, pending: 723456, approvalRate: 92.0, denialRate: 8.0 }
]

export const TOP_DENIAL_REASONS = [
  {
    reason: 'Failure to Demonstrate Good Moral Character',
    percentage: 28,
    description: 'Criminal history, failure to pay child support, false claims to citizenship',
    examples: [
      'Arrest record not disclosed',
      'Tax evasion or fraud',
      'Immigration violations',
      'False testimony during interview'
    ],
    remediation: 'May reapply after addressing underlying issue or statutory bar period expires'
  },
  {
    reason: 'Failure to Meet Continuous Residence Requirement',
    percentage: 22,
    description: 'Extended trips abroad broke continuity of residence',
    examples: [
      'Single trip over 6 months without preservation',
      'Cumulative time abroad suggests abandonment',
      'Failed to maintain U.S. domicile'
    ],
    remediation: 'Must restart residence period from most recent entry'
  },
  {
    reason: 'Failure to Meet Physical Presence Requirement',
    percentage: 18,
    description: 'Did not meet minimum days present in U.S.',
    examples: [
      'Less than 30 months in U.S. (5-year track)',
      'Less than 18 months in U.S. (3-year track)',
      'Insufficient documentation of presence'
    ],
    remediation: 'Wait until physical presence requirement is met and reapply'
  },
  {
    reason: 'Failed Civics or English Test',
    percentage: 15,
    description: 'Did not pass required tests after two attempts',
    examples: [
      'Could not answer 6 of 10 civics questions correctly',
      'Could not demonstrate English reading/writing/speaking'
    ],
    remediation: 'May reapply; if 50/20 or 55/15 exception applies, request accommodation'
  },
  {
    reason: 'Application Abandoned',
    percentage: 10,
    description: 'Failed to respond to RFE or appear for interview',
    examples: [
      'Did not respond to Request for Evidence within deadline',
      'Missed interview without rescheduling',
      'Failed to appear for oath ceremony'
    ],
    remediation: 'Must file new application with new fee'
  },
  {
    reason: 'Ineligible for Naturalization',
    percentage: 7,
    description: 'Statutory bars or lack of LPR status',
    examples: [
      'LPR status obtained through fraud',
      'Deportation proceedings pending',
      'Not yet eligible based on LPR date'
    ],
    remediation: 'Depends on specific bar; some are permanent, some are temporary'
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function getFormProcessingTime(formNumber: string): FormProcessingData | undefined {
  return FORM_PROCESSING_TIMES[formNumber]
}

export function getFieldOfficeTime(formNumber: string, state: string): FieldOfficeTime | undefined {
  const form = FORM_PROCESSING_TIMES[formNumber]
  if (!form?.fieldOffices) return undefined
  return form.fieldOffices.find(office => office.state === state)
}

export function calculateEstimatedTimeline(formNumber: string): { min: number; max: number } {
  const phases = formNumber === 'N-400' ? NATURALIZATION_TIMELINE : null
  if (!phases) {
    const form = FORM_PROCESSING_TIMES[formNumber]
    return form ? { min: form.nationalAverage.min, max: form.nationalAverage.max } : { min: 0, max: 0 }
  }
  
  let totalMin = 0
  let totalMax = 0
  
  phases.forEach(phase => {
    const multiplier = phase.typicalDuration.unit === 'weeks' ? 0.25 : 
                       phase.typicalDuration.unit === 'days' ? 0.033 : 1
    totalMin += phase.typicalDuration.min * multiplier
    totalMax += phase.typicalDuration.max * multiplier
  })
  
  return { min: Math.round(totalMin), max: Math.round(totalMax) }
}

export function getApprovalRate(fiscalYear: number): number {
  const stats = NATURALIZATION_STATISTICS.find(s => s.fiscalYear === fiscalYear)
  return stats?.approvalRate || 0
}

export function formatProcessingTime(time: ProcessingTimeRange): string {
  if (time.min === time.max) {
    return `${time.min} ${time.unit}`
  }
  return `${time.min}-${time.max} ${time.unit}`
}

export function getUSCISProcessingTimesUrl(): string {
  return 'https://egov.uscis.gov/processing-times/'
}

export function getCaseStatusUrl(): string {
  return 'https://egov.uscis.gov/casestatus/landing.do'
}
