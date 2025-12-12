/**
 * U.S. Citizenship Decision Tree Model
 * 
 * A complete, objective model of all citizenship acquisition pathways,
 * decision points, requirements, bars, and outcomes.
 * 
 * Legal Foundation:
 * - Immigration and Nationality Act (INA), 8 U.S.C. Chapter 12
 * - Code of Federal Regulations, 8 CFR Parts 310-399
 * - USCIS Policy Manual Volume 12
 * 
 * Last Updated: December 2025
 */

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

export type PathwayType = 
  | 'naturalization_standard'    // INA § 316, 8 USC 1427 - 5 year track
  | 'naturalization_spouse'      // INA § 319, 8 USC 1430 - 3 year track
  | 'naturalization_military'    // INA §§ 328-329, 8 USC 1439-1440
  | 'birthright_jus_soli'        // 14th Amendment + INA § 301
  | 'birthright_jus_sanguinis'   // INA § 301(c)-(h), 8 USC 1401
  | 'derivative_automatic'       // INA § 320, 8 USC 1431
  | 'derivative_application'     // INA § 322, 8 USC 1433
  | 'special_immigrant'          // Various INA provisions
  | 'restoration'                // INA § 324, 8 USC 1435

export type NodeType = 
  | 'entry'          // Starting point
  | 'decision'       // Yes/No question
  | 'requirement'    // Must be satisfied
  | 'bar'            // Blocks pathway
  | 'exception'      // Exemption from requirement
  | 'pathway'        // Specific citizenship route
  | 'outcome'        // Final result
  | 'process'        // Administrative step
  | 'wait'           // Time-based requirement

export type BarType = 
  | 'permanent'      // Cannot be overcome
  | 'temporary'      // Expires after period
  | 'conditional'    // Can be waived/excepted

export interface LegalCitation {
  statute: string           // e.g., "8 U.S.C. § 1427"
  inaSection?: string       // e.g., "INA § 316"
  cfr?: string              // e.g., "8 CFR § 316.2"
  caselaw?: string[]        // Relevant court decisions
  policyManual?: string     // USCIS Policy Manual reference
}

export interface DecisionNode {
  id: string
  type: NodeType
  title: string
  description: string
  question?: string         // For decision nodes
  legalBasis: LegalCitation
  requirements?: Requirement[]
  bars?: Bar[]
  exceptions?: Exception[]
  nextOnYes?: string        // Next node ID if yes
  nextOnNo?: string         // Next node ID if no
  nextNodes?: string[]      // Multiple possible next nodes
  timeRequirement?: TimeRequirement
  processingInfo?: ProcessingInfo
  metadata?: {
    commonIssues?: string[]
    tips?: string[]
    warnings?: string[]
    statistics?: Statistics
  }
}

export interface Requirement {
  id: string
  name: string
  description: string
  legalBasis: LegalCitation
  verificationMethod: string
  documentsNeeded: string[]
  commonPitfalls?: string[]
  exceptions?: string[]
}

export interface Bar {
  id: string
  type: BarType
  name: string
  description: string
  legalBasis: LegalCitation
  duration?: string         // For temporary bars
  waiver?: WaiverInfo       // If waivable
  examples?: string[]
}

export interface Exception {
  id: string
  name: string
  description: string
  legalBasis: LegalCitation
  eligibilityCriteria: string[]
}

export interface WaiverInfo {
  available: boolean
  form?: string
  criteria?: string[]
  discretionary: boolean
}

export interface TimeRequirement {
  type: 'continuous_residence' | 'physical_presence' | 'state_residence' | 'waiting_period'
  duration: number          // In days
  durationUnit: 'days' | 'months' | 'years'
  startTrigger: string      // What starts the clock
  breaks?: BreakRule[]
}

export interface BreakRule {
  threshold: number
  unit: 'days' | 'months' | 'years'
  consequence: 'presumption_broken' | 'clock_reset' | 'no_effect'
  rebuttable: boolean
}

export interface ProcessingInfo {
  form: string
  filingFee: number
  biometricsFee: number
  estimatedProcessingTime: string
  serviceCenter?: string
  fieldOffice?: boolean
}

export interface Statistics {
  approvalRate?: number
  averageProcessingDays?: number
  annualApplications?: number
  commonDenialReasons?: string[]
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPLETE DECISION TREE MODEL
// ═══════════════════════════════════════════════════════════════════════════════

export const CITIZENSHIP_DECISION_TREE: Record<string, DecisionNode> = {
  
  // ─────────────────────────────────────────────────────────────────────────────
  // ENTRY POINT
  // ─────────────────────────────────────────────────────────────────────────────
  
  'entry': {
    id: 'entry',
    type: 'entry',
    title: 'U.S. Citizenship Pathways',
    description: 'Determine which path to U.S. citizenship may apply to your situation.',
    legalBasis: {
      statute: '8 U.S.C. Chapter 12, Subchapter III',
      inaSection: 'INA §§ 301-357',
      policyManual: 'USCIS Policy Manual Volume 12'
    },
    nextNodes: ['check_already_citizen', 'check_birthright', 'check_derivative', 'check_naturalization']
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // INITIAL SCREENING
  // ─────────────────────────────────────────────────────────────────────────────
  
  'check_already_citizen': {
    id: 'check_already_citizen',
    type: 'decision',
    title: 'Already a U.S. Citizen?',
    description: 'Some people are already citizens without knowing it through birth or derivation.',
    question: 'Were you born in the United States, or are both of your parents U.S. citizens?',
    legalBasis: {
      statute: '8 U.S.C. § 1401',
      inaSection: 'INA § 301',
      policyManual: 'Vol. 12, Part H'
    },
    nextOnYes: 'birthright_analysis',
    nextOnNo: 'check_permanent_resident'
  },

  'check_permanent_resident': {
    id: 'check_permanent_resident',
    type: 'decision',
    title: 'Lawful Permanent Resident Status',
    description: 'Most naturalization pathways require LPR status as a prerequisite.',
    question: 'Are you currently a Lawful Permanent Resident (green card holder)?',
    legalBasis: {
      statute: '8 U.S.C. § 1427(a)',
      inaSection: 'INA § 316(a)',
      cfr: '8 CFR § 316.2(a)(2)'
    },
    nextOnYes: 'naturalization_pathway_selection',
    nextOnNo: 'outcome_need_green_card',
    metadata: {
      commonIssues: [
        'Conditional green card holders must remove conditions first (I-751)',
        'Abandonment of LPR status through extended absence',
        'Green card expiration does not terminate LPR status'
      ],
      tips: [
        'Keep travel history records',
        'Maintain U.S. tax filings',
        'Do not remain outside U.S. for more than 6 months without re-entry permit'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // BIRTHRIGHT CITIZENSHIP BRANCH
  // ─────────────────────────────────────────────────────────────────────────────

  'birthright_analysis': {
    id: 'birthright_analysis',
    type: 'decision',
    title: 'Place of Birth',
    description: 'Citizenship at birth depends on where you were born and your parents\' citizenship.',
    question: 'Were you born within the United States (including D.C., Puerto Rico, Guam, U.S. Virgin Islands, or Northern Mariana Islands)?',
    legalBasis: {
      statute: '8 U.S.C. § 1401(a)',
      inaSection: 'INA § 301(a)',
      caselaw: ['United States v. Wong Kim Ark, 169 U.S. 649 (1898)']
    },
    nextOnYes: 'jus_soli_verification',
    nextOnNo: 'jus_sanguinis_analysis'
  },

  'jus_soli_verification': {
    id: 'jus_soli_verification',
    type: 'decision',
    title: 'Jus Soli (Right of Soil)',
    description: 'Birth in the United States generally confers citizenship, with limited exceptions.',
    question: 'Was either parent a foreign diplomat with full diplomatic immunity at the time of your birth?',
    legalBasis: {
      statute: '8 U.S.C. § 1401(a)',
      inaSection: 'INA § 301(a)',
      caselaw: ['Wong Kim Ark, 169 U.S. 649 (1898)', 'Plyler v. Doe, 457 U.S. 202 (1982)']
    },
    nextOnYes: 'diplomatic_exception',
    nextOnNo: 'outcome_citizen_by_birth',
    metadata: {
      commonIssues: [
        'Hospital records vs. home births',
        'Delayed birth registration',
        'Foundlings (unknown parentage)'
      ]
    }
  },

  'diplomatic_exception': {
    id: 'diplomatic_exception',
    type: 'bar',
    title: 'Diplomatic Immunity Exception',
    description: 'Children of diplomats with full immunity are not subject to U.S. jurisdiction and do not acquire citizenship by birth in the U.S.',
    legalBasis: {
      statute: '8 U.S.C. § 1401(a)',
      inaSection: 'INA § 301(a)',
      policyManual: 'Vol. 12, Part H, Chapter 3'
    },
    bars: [{
      id: 'diplomatic_bar',
      type: 'permanent',
      name: 'Diplomatic Immunity Bar',
      description: 'Full diplomatic immunity exempts birth from U.S. jurisdiction.',
      legalBasis: { statute: 'Vienna Convention on Diplomatic Relations' },
      examples: [
        'Children of ambassadors',
        'Children of ministers',
        'Children of other diplomatic agents with full immunity'
      ]
    }],
    nextNodes: ['jus_sanguinis_analysis']
  },

  'jus_sanguinis_analysis': {
    id: 'jus_sanguinis_analysis',
    type: 'decision',
    title: 'Jus Sanguinis (Right of Blood)',
    description: 'Citizenship can be acquired at birth abroad if one or both parents are U.S. citizens, subject to physical presence requirements.',
    question: 'Was at least one parent a U.S. citizen at the time of your birth?',
    legalBasis: {
      statute: '8 U.S.C. § 1401(c)-(h)',
      inaSection: 'INA § 301(c)-(h)',
      policyManual: 'Vol. 12, Part H, Chapter 4'
    },
    nextOnYes: 'parent_citizenship_details',
    nextOnNo: 'check_derivative'
  },

  'parent_citizenship_details': {
    id: 'parent_citizenship_details',
    type: 'decision',
    title: 'Parent Citizenship Analysis',
    description: 'The requirements depend on whether one or both parents were citizens and the date of birth.',
    question: 'Were BOTH parents U.S. citizens at the time of your birth?',
    legalBasis: {
      statute: '8 U.S.C. § 1401(c)',
      inaSection: 'INA § 301(c)'
    },
    nextOnYes: 'both_parents_citizens',
    nextOnNo: 'one_parent_citizen'
  },

  'both_parents_citizens': {
    id: 'both_parents_citizens',
    type: 'requirement',
    title: 'Both Parents Citizens',
    description: 'When both parents are citizens, only one needs to have had prior U.S. residence.',
    legalBasis: {
      statute: '8 U.S.C. § 1401(c)',
      inaSection: 'INA § 301(c)'
    },
    requirements: [{
      id: 'prior_residence',
      name: 'Prior Residence Requirement',
      description: 'At least one parent must have had a residence in the United States or its outlying possessions prior to the child\'s birth.',
      legalBasis: { statute: '8 U.S.C. § 1401(c)' },
      verificationMethod: 'Documentary evidence of residence',
      documentsNeeded: ['Tax returns', 'School records', 'Employment records', 'Lease agreements']
    }],
    nextNodes: ['outcome_citizen_by_birth']
  },

  'one_parent_citizen': {
    id: 'one_parent_citizen',
    type: 'decision',
    title: 'One Citizen Parent Analysis',
    description: 'Physical presence requirements apply when only one parent is a citizen. Requirements vary by birth date.',
    question: 'Were you born on or after November 14, 1986?',
    legalBasis: {
      statute: '8 U.S.C. § 1401(g)',
      inaSection: 'INA § 301(g)',
      policyManual: 'Vol. 12, Part H, Chapter 3'
    },
    nextOnYes: 'modern_one_parent_requirement',
    nextOnNo: 'historical_one_parent_requirement'
  },

  'modern_one_parent_requirement': {
    id: 'modern_one_parent_requirement',
    type: 'requirement',
    title: 'Modern Physical Presence Requirement',
    description: 'For births on or after November 14, 1986, the citizen parent must have been physically present in the U.S. for 5 years, with at least 2 years after age 14.',
    legalBasis: {
      statute: '8 U.S.C. § 1401(g)',
      inaSection: 'INA § 301(g)'
    },
    requirements: [{
      id: 'physical_presence_5_years',
      name: '5-Year Physical Presence',
      description: 'Citizen parent must have been physically present in U.S. for at least 5 years total.',
      legalBasis: { statute: '8 U.S.C. § 1401(g)' },
      verificationMethod: 'Travel records, employment records, school records',
      documentsNeeded: ['Passport stamps', 'Employment records', 'School transcripts', 'Tax returns'],
      exceptions: [
        'Military service abroad counts as physical presence',
        'Employment by U.S. government abroad counts',
        'Employment by certain international organizations counts'
      ]
    }, {
      id: 'physical_presence_after_14',
      name: '2 Years After Age 14',
      description: 'At least 2 of the 5 years must have been after the citizen parent reached age 14.',
      legalBasis: { statute: '8 U.S.C. § 1401(g)' },
      verificationMethod: 'Same as above, with date verification',
      documentsNeeded: ['Birth certificate of parent', 'Chronological residence evidence']
    }],
    nextNodes: ['outcome_citizen_by_birth']
  },

  'historical_one_parent_requirement': {
    id: 'historical_one_parent_requirement',
    type: 'requirement',
    title: 'Historical Physical Presence Requirements',
    description: 'Requirements varied significantly based on birth date. Complex analysis required for births before 1986.',
    legalBasis: {
      statute: 'Various amendments to INA § 301',
      policyManual: 'Vol. 12, Part H, Chapter 3'
    },
    requirements: [{
      id: 'historical_analysis',
      name: 'Date-Based Analysis Required',
      description: 'Physical presence requirements changed: 10 years/5 after 14 (pre-1952), then various amendments. Consult detailed charts.',
      legalBasis: { statute: 'Historical versions of 8 U.S.C. § 1401' },
      verificationMethod: 'Legal analysis based on exact birth date',
      documentsNeeded: ['Parent birth certificate', 'Detailed residence history'],
      commonPitfalls: [
        'Wrong law version applied',
        'Failure to consider legitimation/illegitimacy rules',
        'Gender discrimination in pre-1934 law'
      ]
    }],
    metadata: {
      warnings: [
        'Pre-1934: Citizenship only through citizen father (discriminatory, but not retroactively corrected)',
        'Retention requirements may apply for some birth dates',
        'Consult immigration attorney for complex cases'
      ]
    },
    nextNodes: ['outcome_citizen_by_birth']
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // DERIVATIVE CITIZENSHIP BRANCH
  // ─────────────────────────────────────────────────────────────────────────────

  'check_derivative': {
    id: 'check_derivative',
    type: 'decision',
    title: 'Derivative Citizenship',
    description: 'Children may derive citizenship automatically through their parents\' naturalization.',
    question: 'Did at least one of your parents naturalize while you were under 18 and a lawful permanent resident?',
    legalBasis: {
      statute: '8 U.S.C. § 1431',
      inaSection: 'INA § 320',
      policyManual: 'Vol. 12, Part H, Chapter 4'
    },
    nextOnYes: 'derivative_automatic_analysis',
    nextOnNo: 'check_naturalization'
  },

  'derivative_automatic_analysis': {
    id: 'derivative_automatic_analysis',
    type: 'requirement',
    title: 'Automatic Derivative Citizenship (CCA)',
    description: 'Under the Child Citizenship Act of 2000, children may automatically become citizens.',
    legalBasis: {
      statute: '8 U.S.C. § 1431',
      inaSection: 'INA § 320',
      cfr: '8 CFR § 320.1'
    },
    requirements: [
      {
        id: 'child_under_18',
        name: 'Under 18 Years Old',
        description: 'Child must be under 18 when all conditions are met.',
        legalBasis: { statute: '8 U.S.C. § 1431(a)' },
        verificationMethod: 'Birth certificate',
        documentsNeeded: ['Birth certificate']
      },
      {
        id: 'child_lpr',
        name: 'Lawful Permanent Resident',
        description: 'Child must be a lawful permanent resident.',
        legalBasis: { statute: '8 U.S.C. § 1431(a)' },
        verificationMethod: 'Green card or I-551 stamp',
        documentsNeeded: ['Green card', 'Passport with I-551 stamp']
      },
      {
        id: 'residing_custody',
        name: 'Residing in U.S. in Legal/Physical Custody',
        description: 'Child must be residing in the U.S. in the legal and physical custody of the citizen parent.',
        legalBasis: { statute: '8 U.S.C. § 1431(a)' },
        verificationMethod: 'Custody documentation, residence evidence',
        documentsNeeded: ['Custody order if applicable', 'School records', 'Medical records']
      },
      {
        id: 'parent_citizen',
        name: 'At Least One Parent is U.S. Citizen',
        description: 'At least one parent must be a U.S. citizen by birth or naturalization.',
        legalBasis: { statute: '8 U.S.C. § 1431(a)' },
        verificationMethod: 'Naturalization certificate or birth certificate',
        documentsNeeded: ['Naturalization certificate', 'U.S. birth certificate', 'Passport']
      }
    ],
    nextNodes: ['outcome_derivative_citizen']
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // NATURALIZATION PATHWAYS
  // ─────────────────────────────────────────────────────────────────────────────

  'check_naturalization': {
    id: 'check_naturalization',
    type: 'entry',
    title: 'Naturalization Pathways',
    description: 'Select the naturalization pathway that may apply to your situation.',
    legalBasis: {
      statute: '8 U.S.C. §§ 1427-1458',
      inaSection: 'INA §§ 316-347',
      policyManual: 'Vol. 12, Parts A-G'
    },
    nextNodes: ['naturalization_pathway_selection']
  },

  'naturalization_pathway_selection': {
    id: 'naturalization_pathway_selection',
    type: 'decision',
    title: 'Pathway Selection',
    description: 'Different pathways have different residency and eligibility requirements.',
    question: 'Are you married to a U.S. citizen and living in marital union with that spouse?',
    legalBasis: {
      statute: '8 U.S.C. § 1430',
      inaSection: 'INA § 319'
    },
    nextOnYes: 'spouse_pathway_eligibility',
    nextOnNo: 'military_check'
  },

  'military_check': {
    id: 'military_check',
    type: 'decision',
    title: 'Military Service',
    description: 'Special naturalization provisions exist for members and veterans of the U.S. Armed Forces.',
    question: 'Are you currently serving or have you served honorably in the U.S. Armed Forces?',
    legalBasis: {
      statute: '8 U.S.C. §§ 1439-1440',
      inaSection: 'INA §§ 328-329'
    },
    nextOnYes: 'military_pathway_analysis',
    nextOnNo: 'standard_naturalization_pathway'
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // STANDARD NATURALIZATION (5-YEAR TRACK)
  // ─────────────────────────────────────────────────────────────────────────────

  'standard_naturalization_pathway': {
    id: 'standard_naturalization_pathway',
    type: 'pathway',
    title: 'Standard Naturalization (5-Year Track)',
    description: 'The general naturalization pathway for lawful permanent residents.',
    legalBasis: {
      statute: '8 U.S.C. § 1427',
      inaSection: 'INA § 316',
      cfr: '8 CFR Part 316',
      policyManual: 'Vol. 12, Part D'
    },
    requirements: [
      {
        id: 'age_18',
        name: 'Age Requirement',
        description: 'Must be at least 18 years old at time of filing.',
        legalBasis: { statute: '8 U.S.C. § 1445(b)', cfr: '8 CFR § 316.2(a)(1)' },
        verificationMethod: 'Birth certificate or passport',
        documentsNeeded: ['Birth certificate', 'Passport']
      },
      {
        id: 'lpr_status',
        name: 'LPR Status',
        description: 'Must be a lawful permanent resident.',
        legalBasis: { statute: '8 U.S.C. § 1427(a)', cfr: '8 CFR § 316.2(a)(2)' },
        verificationMethod: 'Green card',
        documentsNeeded: ['Green card (I-551)', 'Passport with I-551 stamp']
      }
    ],
    timeRequirement: {
      type: 'continuous_residence',
      duration: 5,
      durationUnit: 'years',
      startTrigger: 'Date of admission as LPR',
      breaks: [
        {
          threshold: 6,
          unit: 'months',
          consequence: 'presumption_broken',
          rebuttable: true
        },
        {
          threshold: 1,
          unit: 'years',
          consequence: 'clock_reset',
          rebuttable: false
        }
      ]
    },
    processingInfo: {
      form: 'N-400',
      filingFee: 710,
      biometricsFee: 0, // Included in filing fee as of 2024
      estimatedProcessingTime: '8-14 months',
      fieldOffice: true
    },
    nextNodes: ['continuous_residence_check']
  },

  'continuous_residence_check': {
    id: 'continuous_residence_check',
    type: 'requirement',
    title: 'Continuous Residence (5 Years)',
    description: 'Must have resided continuously in the U.S. for at least 5 years immediately preceding the date of filing.',
    legalBasis: {
      statute: '8 U.S.C. § 1427(a)(1)',
      inaSection: 'INA § 316(a)(1)',
      cfr: '8 CFR § 316.5'
    },
    requirements: [{
      id: 'continuous_5_years',
      name: '5 Years Continuous Residence',
      description: 'Continuous residence for 5 years as LPR before filing.',
      legalBasis: { statute: '8 U.S.C. § 1427(a)(1)' },
      verificationMethod: 'Tax returns, employment records, travel history',
      documentsNeeded: ['Tax returns (5 years)', 'Travel records', 'Employment records'],
      commonPitfalls: [
        'Trips over 6 months create presumption of break',
        'Trips over 1 year automatically break continuity',
        'Must maintain domicile in U.S.'
      ]
    }],
    nextNodes: ['physical_presence_check']
  },

  'physical_presence_check': {
    id: 'physical_presence_check',
    type: 'requirement',
    title: 'Physical Presence (30 Months)',
    description: 'Must have been physically present in the U.S. for at least 30 months of the 5 years.',
    legalBasis: {
      statute: '8 U.S.C. § 1427(a)(1)',
      inaSection: 'INA § 316(a)(1)',
      cfr: '8 CFR § 316.5(a)(1)'
    },
    requirements: [{
      id: 'physical_30_months',
      name: '30 Months Physical Presence',
      description: 'Actually present in U.S. for at least 30 months (912.5 days) of the 5-year period.',
      legalBasis: { statute: '8 U.S.C. § 1427(a)(1)' },
      verificationMethod: 'Travel records, passport stamps',
      documentsNeeded: ['Passport(s) covering entire period', 'Travel itineraries', 'Boarding passes'],
      commonPitfalls: [
        'Days of departure and arrival both count',
        'Must calculate precisely - use USCIS calculator',
        'Keep detailed travel log'
      ]
    }],
    nextNodes: ['state_residence_check']
  },

  'state_residence_check': {
    id: 'state_residence_check',
    type: 'requirement',
    title: 'State/District Residence (3 Months)',
    description: 'Must have resided in the state or USCIS district for at least 3 months before filing.',
    legalBasis: {
      statute: '8 U.S.C. § 1427(a)(1)',
      inaSection: 'INA § 316(a)(1)',
      cfr: '8 CFR § 316.5(b)'
    },
    requirements: [{
      id: 'state_3_months',
      name: '3 Months State Residence',
      description: 'Must reside in the state/district where filing for at least 3 months.',
      legalBasis: { statute: '8 U.S.C. § 1427(a)(1)' },
      verificationMethod: 'Utility bills, lease, driver\'s license',
      documentsNeeded: ['Lease or mortgage', 'Utility bills', 'State ID/driver\'s license']
    }],
    nextNodes: ['good_moral_character_check']
  },

  'good_moral_character_check': {
    id: 'good_moral_character_check',
    type: 'requirement',
    title: 'Good Moral Character',
    description: 'Must demonstrate good moral character during the statutory period.',
    legalBasis: {
      statute: '8 U.S.C. § 1101(f)',
      inaSection: 'INA § 101(f)',
      cfr: '8 CFR § 316.10',
      policyManual: 'Vol. 12, Part F'
    },
    requirements: [{
      id: 'gmc_statutory',
      name: 'No Statutory Bars',
      description: 'Must not have committed acts that are automatic bars to good moral character.',
      legalBasis: { statute: '8 U.S.C. § 1101(f)' },
      verificationMethod: 'Background check, self-disclosure',
      documentsNeeded: ['Court records if any', 'Police clearances if required']
    }],
    bars: [
      {
        id: 'murder',
        type: 'permanent',
        name: 'Murder',
        description: 'Conviction of murder at any time permanently bars GMC finding.',
        legalBasis: { statute: '8 U.S.C. § 1101(f)(8)' }
      },
      {
        id: 'aggravated_felony',
        type: 'permanent',
        name: 'Aggravated Felony',
        description: 'Conviction of an aggravated felony on or after November 29, 1990.',
        legalBasis: { statute: '8 U.S.C. § 1101(f)(8)' }
      },
      {
        id: 'persecution',
        type: 'permanent',
        name: 'Persecution',
        description: 'Persecution of others on account of race, religion, national origin, membership in a particular social group, or political opinion.',
        legalBasis: { statute: '8 U.S.C. § 1101(f)(9)' }
      }
    ],
    nextNodes: ['english_civics_requirement']
  },

  'english_civics_requirement': {
    id: 'english_civics_requirement',
    type: 'requirement',
    title: 'English & Civics Requirements',
    description: 'Must demonstrate ability to read, write, and speak English and knowledge of U.S. history and government.',
    legalBasis: {
      statute: '8 U.S.C. § 1423',
      inaSection: 'INA § 312',
      cfr: '8 CFR Part 312',
      policyManual: 'Vol. 12, Part E'
    },
    requirements: [
      {
        id: 'english_test',
        name: 'English Language Ability',
        description: 'Demonstrate ability to read, write, and speak words in ordinary usage in the English language.',
        legalBasis: { statute: '8 U.S.C. § 1423(a)(1)', cfr: '8 CFR § 312.1' },
        verificationMethod: 'USCIS interview examination',
        documentsNeeded: ['None - tested at interview'],
        exceptions: [
          'Age 50+ with 20 years as LPR (50/20 exemption)',
          'Age 55+ with 15 years as LPR (55/15 exemption)',
          'Physical or developmental disability (N-648 waiver)'
        ]
      },
      {
        id: 'civics_test',
        name: 'Civics Knowledge',
        description: 'Demonstrate knowledge of fundamentals of U.S. history and government.',
        legalBasis: { statute: '8 U.S.C. § 1423(a)(2)', cfr: '8 CFR § 312.2' },
        verificationMethod: 'USCIS civics test (128 questions, 10 asked, 6 correct to pass)',
        documentsNeeded: ['None - tested at interview'],
        exceptions: [
          'Age 65+ with 20 years as LPR (65/20 exemption - simplified test)',
          'Physical or developmental disability (N-648 waiver)'
        ]
      }
    ],
    nextNodes: ['attachment_constitution']
  },

  'attachment_constitution': {
    id: 'attachment_constitution',
    type: 'requirement',
    title: 'Attachment to Constitution',
    description: 'Must be attached to the principles of the Constitution and well disposed to the good order and happiness of the United States.',
    legalBasis: {
      statute: '8 U.S.C. § 1427(a)(3)',
      inaSection: 'INA § 316(a)(3)',
      cfr: '8 CFR § 316.11'
    },
    requirements: [{
      id: 'attachment',
      name: 'Constitutional Attachment',
      description: 'Must support the Constitution and be favorably disposed toward the United States.',
      legalBasis: { statute: '8 U.S.C. § 1427(a)(3)' },
      verificationMethod: 'Interview questions and oath',
      documentsNeeded: ['None']
    }],
    bars: [
      {
        id: 'communist_party',
        type: 'temporary',
        name: 'Communist/Totalitarian Party Membership',
        description: 'Membership in Communist Party or other totalitarian party within 10 years.',
        legalBasis: { statute: '8 U.S.C. § 1424' },
        duration: '10 years after termination of membership',
        waiver: {
          available: true,
          criteria: ['Membership was involuntary', 'Under 16 years of age', 'Required by law'],
          discretionary: true
        }
      }
    ],
    nextNodes: ['oath_requirement']
  },

  'oath_requirement': {
    id: 'oath_requirement',
    type: 'requirement',
    title: 'Oath of Allegiance',
    description: 'Must be willing to take the full Oath of Allegiance to the United States.',
    legalBasis: {
      statute: '8 U.S.C. § 1448',
      inaSection: 'INA § 337',
      cfr: '8 CFR § 337.1'
    },
    requirements: [{
      id: 'oath_willingness',
      name: 'Oath of Allegiance',
      description: 'Must take oath renouncing foreign allegiances, supporting the Constitution, and bearing arms or performing noncombatant service if required by law.',
      legalBasis: { statute: '8 U.S.C. § 1448(a)' },
      verificationMethod: 'Naturalization ceremony',
      documentsNeeded: ['Interview approval (N-652)'],
      exceptions: [
        'Modified oath for religious objectors to bearing arms',
        'Waiver of oath for those unable to understand due to disability'
      ]
    }],
    nextNodes: ['outcome_naturalized_citizen']
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // SPOUSE PATHWAY (3-YEAR TRACK)
  // ─────────────────────────────────────────────────────────────────────────────

  'spouse_pathway_eligibility': {
    id: 'spouse_pathway_eligibility',
    type: 'pathway',
    title: 'Spouse of U.S. Citizen (3-Year Track)',
    description: 'Reduced residency requirement for spouses of U.S. citizens living in marital union.',
    legalBasis: {
      statute: '8 U.S.C. § 1430(a)',
      inaSection: 'INA § 319(a)',
      cfr: '8 CFR Part 319',
      policyManual: 'Vol. 12, Part G, Chapter 2'
    },
    requirements: [
      {
        id: 'married_3_years',
        name: 'Married 3 Years',
        description: 'Must have been married to U.S. citizen spouse for at least 3 years.',
        legalBasis: { statute: '8 U.S.C. § 1430(a)' },
        verificationMethod: 'Marriage certificate and spouse\'s citizenship evidence',
        documentsNeeded: ['Marriage certificate', 'Spouse\'s birth certificate or naturalization certificate']
      },
      {
        id: 'marital_union',
        name: 'Living in Marital Union',
        description: 'Must be living in marital union with citizen spouse for entire 3-year period.',
        legalBasis: { statute: '8 U.S.C. § 1430(a)' },
        verificationMethod: 'Joint documents, residence evidence',
        documentsNeeded: ['Joint bank accounts', 'Joint lease/mortgage', 'Joint tax returns', 'Joint utility bills'],
        commonPitfalls: [
          'Separation breaks marital union',
          'Divorce proceedings may disqualify',
          'Legal separation disqualifies'
        ]
      },
      {
        id: 'spouse_citizen_3_years',
        name: 'Spouse Citizen for 3 Years',
        description: 'Citizen spouse must have been a citizen for entire 3-year period.',
        legalBasis: { statute: '8 U.S.C. § 1430(a)' },
        verificationMethod: 'Naturalization certificate date or birth certificate',
        documentsNeeded: ['Spouse\'s citizenship evidence with dates']
      }
    ],
    timeRequirement: {
      type: 'continuous_residence',
      duration: 3,
      durationUnit: 'years',
      startTrigger: 'Date of admission as LPR',
      breaks: [
        {
          threshold: 6,
          unit: 'months',
          consequence: 'presumption_broken',
          rebuttable: true
        },
        {
          threshold: 1,
          unit: 'years',
          consequence: 'clock_reset',
          rebuttable: false
        }
      ]
    },
    processingInfo: {
      form: 'N-400',
      filingFee: 710,
      biometricsFee: 0,
      estimatedProcessingTime: '8-14 months',
      fieldOffice: true
    },
    nextNodes: ['spouse_physical_presence_check']
  },

  'spouse_physical_presence_check': {
    id: 'spouse_physical_presence_check',
    type: 'requirement',
    title: 'Physical Presence (18 Months)',
    description: 'Must have been physically present for at least 18 months of the 3-year period.',
    legalBasis: {
      statute: '8 U.S.C. § 1430(a)',
      inaSection: 'INA § 319(a)'
    },
    requirements: [{
      id: 'physical_18_months',
      name: '18 Months Physical Presence',
      description: 'Must be physically present in U.S. for at least 18 months (547.5 days) of the 3-year period.',
      legalBasis: { statute: '8 U.S.C. § 1430(a)' },
      verificationMethod: 'Travel records, passport stamps',
      documentsNeeded: ['Passport(s)', 'Travel records']
    }],
    nextNodes: ['good_moral_character_check']
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // MILITARY PATHWAY
  // ─────────────────────────────────────────────────────────────────────────────

  'military_pathway_analysis': {
    id: 'military_pathway_analysis',
    type: 'decision',
    title: 'Military Service Analysis',
    description: 'Different provisions apply based on period and type of service.',
    question: 'Is your service during a designated period of military hostilities?',
    legalBasis: {
      statute: '8 U.S.C. §§ 1439-1440',
      inaSection: 'INA §§ 328-329',
      policyManual: 'Vol. 12, Part I'
    },
    nextOnYes: 'wartime_military_pathway',
    nextOnNo: 'peacetime_military_pathway',
    metadata: {
      tips: [
        'Designated periods: WWII, Korea, Vietnam, Persian Gulf, and ongoing (9/11 to present)',
        'Executive Order 13269 (July 3, 2002) designated current period',
        'Service in Selected Reserve may qualify under peacetime provisions'
      ]
    }
  },

  'peacetime_military_pathway': {
    id: 'peacetime_military_pathway',
    type: 'pathway',
    title: 'Peacetime Military Naturalization',
    description: 'Reduced requirements for those serving honorably in the U.S. Armed Forces during peacetime.',
    legalBasis: {
      statute: '8 U.S.C. § 1439',
      inaSection: 'INA § 328',
      cfr: '8 CFR Part 328',
      policyManual: 'Vol. 12, Part I, Chapter 2'
    },
    requirements: [
      {
        id: 'one_year_service',
        name: 'One Year of Service',
        description: 'Must have served honorably for at least 1 year in the U.S. Armed Forces.',
        legalBasis: { statute: '8 U.S.C. § 1439(a)' },
        verificationMethod: 'DD-214 or certification from military',
        documentsNeeded: ['DD-214', 'N-426 (Request for Certification of Military Service)']
      },
      {
        id: 'lpr_at_induction',
        name: 'LPR Status',
        description: 'Must have been LPR at time of induction OR service must be in active-duty status.',
        legalBasis: { statute: '8 U.S.C. § 1439(a)' },
        verificationMethod: 'Green card, enlistment records',
        documentsNeeded: ['Green card', 'Enlistment contract']
      }
    ],
    timeRequirement: {
      type: 'continuous_residence',
      duration: 1,
      durationUnit: 'years',
      startTrigger: 'Date of enlistment'
    },
    processingInfo: {
      form: 'N-400',
      filingFee: 0, // Waived for military
      biometricsFee: 0,
      estimatedProcessingTime: '4-8 months (expedited)',
      fieldOffice: true
    },
    nextNodes: ['good_moral_character_check'],
    metadata: {
      tips: [
        'No residency or physical presence requirements',
        'Can apply while still in service',
        'Fee waived for active duty and within 6 months of discharge'
      ]
    }
  },

  'wartime_military_pathway': {
    id: 'wartime_military_pathway',
    type: 'pathway',
    title: 'Wartime Military Naturalization',
    description: 'Most expedited pathway - minimal requirements during designated hostilities periods.',
    legalBasis: {
      statute: '8 U.S.C. § 1440',
      inaSection: 'INA § 329',
      cfr: '8 CFR Part 329',
      policyManual: 'Vol. 12, Part I, Chapter 3'
    },
    requirements: [
      {
        id: 'honorable_service',
        name: 'Honorable Service',
        description: 'Must have served honorably in active-duty status (no minimum duration).',
        legalBasis: { statute: '8 U.S.C. § 1440(a)' },
        verificationMethod: 'N-426 certification',
        documentsNeeded: ['N-426', 'DD-214 if discharged']
      },
      {
        id: 'service_during_hostilities',
        name: 'Service During Designated Period',
        description: 'Service must be during a designated period of military hostilities.',
        legalBasis: { statute: '8 U.S.C. § 1440(a)', caselaw: ['Executive Order 13269'] },
        verificationMethod: 'Service dates on military records',
        documentsNeeded: ['DD-214', 'N-426']
      }
    ],
    processingInfo: {
      form: 'N-400',
      filingFee: 0,
      biometricsFee: 0,
      estimatedProcessingTime: '4-6 months (priority processing)',
      fieldOffice: true
    },
    nextNodes: ['good_moral_character_check'],
    metadata: {
      tips: [
        'NO LPR status required - can naturalize from any lawful status',
        'NO residence requirements',
        'NO physical presence requirements',
        'NO age requirement (can naturalize under 18)',
        'Current designated period: September 11, 2001 to present'
      ],
      warnings: [
        'Separation under other than honorable conditions may bar naturalization',
        'Posthumous citizenship available if killed in action'
      ]
    }
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // OUTCOMES
  // ─────────────────────────────────────────────────────────────────────────────

  'outcome_citizen_by_birth': {
    id: 'outcome_citizen_by_birth',
    type: 'outcome',
    title: 'Citizen by Birth',
    description: 'You acquired U.S. citizenship at birth. You may apply for a U.S. passport or Certificate of Citizenship (N-600).',
    legalBasis: {
      statute: '8 U.S.C. § 1401',
      inaSection: 'INA § 301'
    },
    processingInfo: {
      form: 'N-600',
      filingFee: 1170,
      biometricsFee: 0,
      estimatedProcessingTime: '5-9 months'
    },
    metadata: {
      tips: [
        'You can also apply for a U.S. passport as proof of citizenship',
        'Passport application is faster and cheaper than N-600',
        'N-600 provides permanent certificate for records'
      ]
    }
  },

  'outcome_derivative_citizen': {
    id: 'outcome_derivative_citizen',
    type: 'outcome',
    title: 'Citizen by Derivation',
    description: 'You automatically became a U.S. citizen through your parent(s). Apply for Certificate of Citizenship (N-600).',
    legalBasis: {
      statute: '8 U.S.C. § 1431',
      inaSection: 'INA § 320'
    },
    processingInfo: {
      form: 'N-600',
      filingFee: 1170,
      biometricsFee: 0,
      estimatedProcessingTime: '5-9 months'
    }
  },

  'outcome_naturalized_citizen': {
    id: 'outcome_naturalized_citizen',
    type: 'outcome',
    title: 'Naturalized Citizen',
    description: 'Upon approval and oath ceremony, you will become a naturalized U.S. citizen.',
    legalBasis: {
      statute: '8 U.S.C. § 1448',
      inaSection: 'INA § 337'
    },
    metadata: {
      tips: [
        'Bring green card to oath ceremony (will be collected)',
        'Can apply for passport same day at ceremony',
        'Register to vote immediately',
        'Update Social Security records'
      ]
    }
  },

  'outcome_need_green_card': {
    id: 'outcome_need_green_card',
    type: 'outcome',
    title: 'Green Card Required First',
    description: 'Most naturalization pathways require you to first become a Lawful Permanent Resident (green card holder).',
    legalBasis: {
      statute: '8 U.S.C. § 1427(a)',
      inaSection: 'INA § 316(a)'
    },
    metadata: {
      tips: [
        'Exception: Wartime military service may allow naturalization without LPR status',
        'Explore family-based, employment-based, or other immigration pathways',
        'Consider consulting an immigration attorney'
      ]
    }
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function getNode(id: string): DecisionNode | undefined {
  return CITIZENSHIP_DECISION_TREE[id]
}

export function getAllNodes(): DecisionNode[] {
  return Object.values(CITIZENSHIP_DECISION_TREE)
}

export function getNodesByType(type: NodeType): DecisionNode[] {
  return getAllNodes().filter(node => node.type === type)
}

export function getPathways(): DecisionNode[] {
  return getNodesByType('pathway')
}

export function getOutcomes(): DecisionNode[] {
  return getNodesByType('outcome')
}

export function getBars(): Bar[] {
  return getAllNodes()
    .flatMap(node => node.bars || [])
}

export function getPermanentBars(): Bar[] {
  return getBars().filter(bar => bar.type === 'permanent')
}

export function calculatePhysicalPresence(
  travelHistory: { departure: Date; return: Date }[]
): number {
  const fiveYearsAgo = new Date()
  fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5)
  
  let daysAbsent = 0
  
  for (const trip of travelHistory) {
    const effectiveStart = trip.departure < fiveYearsAgo ? fiveYearsAgo : trip.departure
    const effectiveEnd = trip.return > new Date() ? new Date() : trip.return
    
    if (effectiveEnd > effectiveStart) {
      const tripDays = Math.ceil((effectiveEnd.getTime() - effectiveStart.getTime()) / (1000 * 60 * 60 * 24))
      daysAbsent += tripDays
    }
  }
  
  const totalDays = Math.ceil((new Date().getTime() - fiveYearsAgo.getTime()) / (1000 * 60 * 60 * 24))
  return totalDays - daysAbsent
}

export function checkContinuousResidence(
  travelHistory: { departure: Date; return: Date }[]
): { broken: boolean; longestTrip: number; trips6MonthPlus: number } {
  let longestTrip = 0
  let trips6MonthPlus = 0
  
  for (const trip of travelHistory) {
    const tripDays = Math.ceil((trip.return.getTime() - trip.departure.getTime()) / (1000 * 60 * 60 * 24))
    if (tripDays > longestTrip) longestTrip = tripDays
    if (tripDays > 180) trips6MonthPlus++
  }
  
  return {
    broken: longestTrip >= 365,
    longestTrip,
    trips6MonthPlus
  }
}
