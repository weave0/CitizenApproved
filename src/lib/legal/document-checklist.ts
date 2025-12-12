/**
 * Document Checklist System
 * 
 * Comprehensive document requirements for each citizenship pathway
 * based on USCIS forms, instructions, and policy manual.
 * 
 * Legal Basis:
 * - 8 CFR § 316.4 (Evidence and burden of proof)
 * - USCIS Policy Manual Vol. 12, Part D, Chapter 2
 * - Form Instructions (N-400, N-600, etc.)
 * 
 * Last Updated: December 2025
 */

export type PathwayType = 
  | 'naturalization_standard'
  | 'naturalization_spouse'
  | 'naturalization_military_peacetime'
  | 'naturalization_military_wartime'
  | 'birthright_jus_soli'
  | 'birthright_jus_sanguinis'
  | 'derivative_automatic'
  | 'certificate_of_citizenship'

export type DocumentCategory =
  | 'identity'
  | 'immigration_status'
  | 'residence'
  | 'physical_presence'
  | 'good_moral_character'
  | 'marriage'
  | 'military'
  | 'citizenship_evidence'
  | 'financial'
  | 'forms'

export type DocumentPriority = 'required' | 'recommended' | 'conditional' | 'optional'

export interface Document {
  id: string
  name: string
  description: string
  category: DocumentCategory
  priority: DocumentPriority
  alternatives?: string[]          // Alternative documents that satisfy same requirement
  conditions?: string[]            // When this document is specifically needed
  tips?: string[]                  // Helpful guidance
  whereToObtain?: string           // Where to get the document
  estimatedTime?: string           // How long to obtain
  cost?: number                    // Approximate cost
  legalBasis?: string              // Legal citation
}

export interface DocumentChecklist {
  pathwayType: PathwayType
  pathwayName: string
  form: string
  totalDocuments: number
  estimatedPrepTime: string
  documents: Document[]
  specialInstructions?: string[]
}

// ═══════════════════════════════════════════════════════════════════════════════
// DOCUMENT DEFINITIONS BY CATEGORY
// ═══════════════════════════════════════════════════════════════════════════════

const IDENTITY_DOCUMENTS: Document[] = [
  {
    id: 'green_card',
    name: 'Permanent Resident Card (Green Card)',
    description: 'Form I-551, front and back. If expired, still bring it.',
    category: 'identity',
    priority: 'required',
    tips: [
      'Make a photocopy before surrendering at oath ceremony',
      'If lost, file Form I-90 or bring passport with I-551 stamp'
    ],
    whereToObtain: 'USCIS (current card)',
    legalBasis: '8 CFR § 316.4(a)'
  },
  {
    id: 'passport_current',
    name: 'Current Passport(s)',
    description: 'All valid passports from any country',
    category: 'identity',
    priority: 'required',
    tips: [
      'USCIS reviews all travel during statutory period',
      'If passport was renewed, bring old one too'
    ]
  },
  {
    id: 'passport_expired',
    name: 'Expired Passport(s)',
    description: 'All expired passports covering the statutory period (5 or 3 years)',
    category: 'identity',
    priority: 'required',
    tips: [
      'Shows complete travel history',
      'If lost, get a letter from embassy or create travel log'
    ]
  },
  {
    id: 'government_id',
    name: 'Government-Issued Photo ID',
    description: 'State ID or driver\'s license',
    category: 'identity',
    priority: 'required',
    alternatives: ['State ID', 'Driver\'s license', 'Passport'],
    tips: [
      'Must be current and not expired',
      'Shows current address'
    ]
  },
  {
    id: 'birth_certificate',
    name: 'Birth Certificate',
    description: 'Official birth certificate with translation if not in English',
    category: 'identity',
    priority: 'required',
    tips: [
      'Must be certified copy, not photocopy',
      'Foreign certificates need certified English translation'
    ],
    whereToObtain: 'Vital records office of birth location',
    cost: 25
  },
  {
    id: 'photos',
    name: 'Passport-Style Photos',
    description: '2 identical color photographs, 2x2 inches',
    category: 'identity',
    priority: 'required',
    tips: [
      'White background, recent (within 30 days)',
      'Head must be between 1 and 1 3/8 inches',
      'No glasses allowed since 2016'
    ],
    whereToObtain: 'Pharmacy, post office, or photo studio',
    cost: 15
  }
]

const RESIDENCE_DOCUMENTS: Document[] = [
  {
    id: 'tax_returns',
    name: 'Federal Tax Returns (5 years)',
    description: 'IRS Form 1040 with all schedules and W-2s',
    category: 'residence',
    priority: 'required',
    tips: [
      'If you didn\'t file, bring IRS transcripts showing no filing requirement',
      'If you filed jointly with spouse, bring spouse\'s information',
      'Foreign income must be reported'
    ],
    whereToObtain: 'Your records or IRS (Form 4506-T for transcripts)',
    legalBasis: '8 CFR § 316.10(b)(3)(iii)'
  },
  {
    id: 'irs_transcripts',
    name: 'IRS Tax Transcripts',
    description: 'Official IRS record of your tax filings',
    category: 'residence',
    priority: 'recommended',
    tips: [
      'Free from IRS.gov or by mail',
      'Useful if you don\'t have copies of returns'
    ],
    whereToObtain: 'irs.gov or call 1-800-908-9946',
    cost: 0,
    estimatedTime: '5-10 business days by mail'
  },
  {
    id: 'lease_mortgage',
    name: 'Lease Agreement or Mortgage Statement',
    description: 'Proof of residence for each address during statutory period',
    category: 'residence',
    priority: 'required',
    alternatives: ['Lease', 'Mortgage statement', 'Property tax bill', 'Deed'],
    tips: [
      'Need documents for each address you lived at',
      'Shows you maintained domicile in US'
    ]
  },
  {
    id: 'utility_bills',
    name: 'Utility Bills',
    description: 'Electric, gas, water, internet bills in your name',
    category: 'residence',
    priority: 'recommended',
    tips: [
      'Most recent bills plus samples from statutory period',
      'Helps prove residence at each address'
    ]
  },
  {
    id: 'employment_records',
    name: 'Employment Records',
    description: 'Employment letters, pay stubs, or contracts',
    category: 'residence',
    priority: 'recommended',
    tips: [
      'Shows continuous residence and good moral character',
      'Include all employers during statutory period'
    ]
  },
  {
    id: 'bank_statements',
    name: 'Bank Statements',
    description: 'Statements showing US banking activity',
    category: 'residence',
    priority: 'recommended',
    tips: [
      'Demonstrates ties to US',
      'Useful if other residence documents are limited'
    ]
  }
]

const TRAVEL_DOCUMENTS: Document[] = [
  {
    id: 'travel_log',
    name: 'Travel History Log',
    description: 'Complete record of all trips outside the US during statutory period',
    category: 'physical_presence',
    priority: 'required',
    tips: [
      'Include: destination, departure date, return date, purpose',
      'Use passport stamps to reconstruct if needed',
      'Account for EVERY trip, even day trips to Canada/Mexico'
    ]
  },
  {
    id: 'travel_tickets',
    name: 'Travel Receipts/Itineraries',
    description: 'Airline tickets, boarding passes, or itineraries',
    category: 'physical_presence',
    priority: 'recommended',
    tips: [
      'Helps verify travel dates',
      'Check email for digital receipts'
    ]
  },
  {
    id: 'reentry_permit',
    name: 'Re-Entry Permit',
    description: 'Form I-131 travel document if used',
    category: 'physical_presence',
    priority: 'conditional',
    conditions: ['If you traveled with a re-entry permit'],
    tips: [
      'Shows intent to maintain residence during extended absence'
    ]
  },
  {
    id: 'absence_evidence',
    name: 'Evidence for Extended Absences',
    description: 'Documentation explaining trips over 6 months',
    category: 'physical_presence',
    priority: 'conditional',
    conditions: ['If you had any trip over 6 months'],
    tips: [
      'Employment letter from US employer for work-related travel',
      'Evidence of maintaining US ties (rent payments, bills)',
      'Proof trip was temporary (round-trip ticket, return date)'
    ],
    legalBasis: '8 CFR § 316.5(c)(1)'
  }
]

const GOOD_MORAL_CHARACTER_DOCUMENTS: Document[] = [
  {
    id: 'police_clearance',
    name: 'Police Clearance Certificates',
    description: 'From any country where you lived 6+ months during statutory period',
    category: 'good_moral_character',
    priority: 'conditional',
    conditions: ['If you lived in another country for 6+ months'],
    whereToObtain: 'Police department or government of that country',
    estimatedTime: '2-8 weeks'
  },
  {
    id: 'court_records',
    name: 'Court Records',
    description: 'Certified copies of any arrests, charges, or convictions',
    category: 'good_moral_character',
    priority: 'conditional',
    conditions: ['If you have ever been arrested, cited, or detained'],
    tips: [
      'Include even if charges were dropped or you were acquitted',
      'Include traffic tickets if they resulted in arrest or were alcohol/drug-related',
      'Expunged records must still be disclosed'
    ],
    legalBasis: '8 CFR § 316.10'
  },
  {
    id: 'child_support',
    name: 'Child Support Records',
    description: 'Proof of compliance with child support obligations',
    category: 'good_moral_character',
    priority: 'conditional',
    conditions: ['If you have child support obligations'],
    tips: [
      'Court orders and payment records',
      'Non-compliance is a statutory bar to GMC'
    ],
    legalBasis: '8 U.S.C. § 1101(f)(6)'
  },
  {
    id: 'selective_service',
    name: 'Selective Service Registration',
    description: 'Proof of registration (if male born after 1960)',
    category: 'good_moral_character',
    priority: 'conditional',
    conditions: ['If male who was required to register'],
    tips: [
      'Get status letter from sss.gov',
      'If never registered and over 26, get status information letter',
      'May need to explain failure to register'
    ],
    whereToObtain: 'sss.gov',
    cost: 0
  }
]

const MARRIAGE_DOCUMENTS: Document[] = [
  {
    id: 'marriage_certificate',
    name: 'Marriage Certificate',
    description: 'Official marriage certificate with your US citizen spouse',
    category: 'marriage',
    priority: 'required',
    tips: [
      'Must be certified copy',
      'If foreign, include certified translation'
    ]
  },
  {
    id: 'spouse_citizenship',
    name: 'Spouse\'s Citizenship Evidence',
    description: 'Proof that your spouse is a US citizen',
    category: 'marriage',
    priority: 'required',
    alternatives: [
      'US birth certificate',
      'US passport',
      'Naturalization certificate',
      'Certificate of citizenship'
    ],
    tips: [
      'Spouse must have been citizen for entire 3-year period',
      'If naturalized, certificate must predate your eligibility'
    ]
  },
  {
    id: 'prior_marriage_termination',
    name: 'Prior Marriage Termination Documents',
    description: 'Divorce decrees or death certificates for all prior marriages',
    category: 'marriage',
    priority: 'conditional',
    conditions: ['If you or spouse were previously married'],
    tips: [
      'For both you AND your spouse',
      'Proves current marriage is valid'
    ]
  },
  {
    id: 'joint_documents',
    name: 'Evidence of Marital Union',
    description: 'Documents showing you live together in marital union',
    category: 'marriage',
    priority: 'required',
    alternatives: [
      'Joint tax returns',
      'Joint bank accounts',
      'Joint lease/mortgage',
      'Joint utilities',
      'Joint insurance policies',
      'Birth certificates of children'
    ],
    tips: [
      'Shows ongoing marital relationship',
      'Address must match spouse\'s'
    ],
    legalBasis: '8 CFR § 319.1'
  }
]

const MILITARY_DOCUMENTS: Document[] = [
  {
    id: 'n426',
    name: 'Form N-426: Request for Certification of Military Service',
    description: 'Certification of military service for naturalization',
    category: 'military',
    priority: 'required',
    tips: [
      'Must be completed by authorized military personnel',
      'Certifies honorable service'
    ],
    whereToObtain: 'Your unit personnel office'
  },
  {
    id: 'dd214',
    name: 'DD-214: Certificate of Release or Discharge',
    description: 'Official military discharge document',
    category: 'military',
    priority: 'conditional',
    conditions: ['If discharged from military'],
    tips: [
      'Must show honorable discharge',
      'Member copy 4 is acceptable'
    ],
    whereToObtain: 'National Personnel Records Center'
  },
  {
    id: 'military_orders',
    name: 'Military Orders',
    description: 'Orders showing active duty or deployment',
    category: 'military',
    priority: 'recommended',
    tips: [
      'Documents period of service',
      'Helpful for expedited processing'
    ]
  },
  {
    id: 'military_id',
    name: 'Military ID Card',
    description: 'Current military identification',
    category: 'military',
    priority: 'required',
    conditions: ['If currently serving']
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// PATHWAY-SPECIFIC CHECKLISTS
// ═══════════════════════════════════════════════════════════════════════════════

export const DOCUMENT_CHECKLISTS: Record<PathwayType, DocumentChecklist> = {
  
  naturalization_standard: {
    pathwayType: 'naturalization_standard',
    pathwayName: 'Standard Naturalization (5-Year Track)',
    form: 'N-400',
    totalDocuments: 15,
    estimatedPrepTime: '2-4 weeks',
    documents: [
      // Forms
      {
        id: 'n400',
        name: 'Form N-400: Application for Naturalization',
        description: 'Completed and signed application',
        category: 'forms',
        priority: 'required',
        tips: [
          'File online at uscis.gov or by mail',
          'Use most recent edition of form',
          'Sign in black ink'
        ],
        cost: 710,
        legalBasis: '8 CFR § 316.4'
      },
      ...IDENTITY_DOCUMENTS,
      ...RESIDENCE_DOCUMENTS,
      ...TRAVEL_DOCUMENTS,
      ...GOOD_MORAL_CHARACTER_DOCUMENTS
    ],
    specialInstructions: [
      'File up to 90 days before 5-year anniversary of LPR status',
      'Continuous residence: 5 years | Physical presence: 30 months',
      'Calculate eligibility date carefully before filing'
    ]
  },

  naturalization_spouse: {
    pathwayType: 'naturalization_spouse',
    pathwayName: 'Spouse of U.S. Citizen (3-Year Track)',
    form: 'N-400',
    totalDocuments: 20,
    estimatedPrepTime: '2-4 weeks',
    documents: [
      {
        id: 'n400',
        name: 'Form N-400: Application for Naturalization',
        description: 'Check box indicating 3-year eligibility under INA 319(a)',
        category: 'forms',
        priority: 'required',
        cost: 710
      },
      ...IDENTITY_DOCUMENTS,
      ...RESIDENCE_DOCUMENTS.map(doc => ({ ...doc, 
        description: doc.id === 'tax_returns' 
          ? 'Federal Tax Returns (3 years) - preferably filed jointly with spouse'
          : doc.description
      })),
      ...TRAVEL_DOCUMENTS,
      ...MARRIAGE_DOCUMENTS,
      ...GOOD_MORAL_CHARACTER_DOCUMENTS
    ],
    specialInstructions: [
      'Spouse must have been US citizen for ENTIRE 3-year period',
      'Must be living in marital union at time of filing AND interview',
      'If spouse dies or you divorce before oath, must switch to 5-year track',
      'Physical presence: 18 months (not 30)'
    ]
  },

  naturalization_military_peacetime: {
    pathwayType: 'naturalization_military_peacetime',
    pathwayName: 'Military Naturalization (Peacetime)',
    form: 'N-400',
    totalDocuments: 12,
    estimatedPrepTime: '1-2 weeks',
    documents: [
      {
        id: 'n400_military',
        name: 'Form N-400: Application for Naturalization',
        description: 'Check box indicating military eligibility',
        category: 'forms',
        priority: 'required',
        tips: ['No filing fee for active duty and recently discharged'],
        cost: 0
      },
      ...IDENTITY_DOCUMENTS,
      ...MILITARY_DOCUMENTS,
      {
        id: 'gmc_military',
        name: 'Good Moral Character Evidence',
        description: 'GMC during period of service and until naturalization',
        category: 'good_moral_character',
        priority: 'required',
        tips: ['Military personnel records may suffice']
      }
    ],
    specialInstructions: [
      'Requires 1 year of honorable service',
      'Must be LPR at time of induction or currently serving',
      'No residence or physical presence requirements',
      'Filing fee waived for active duty'
    ]
  },

  naturalization_military_wartime: {
    pathwayType: 'naturalization_military_wartime',
    pathwayName: 'Military Naturalization (Wartime/Hostilities)',
    form: 'N-400',
    totalDocuments: 10,
    estimatedPrepTime: '1 week',
    documents: [
      {
        id: 'n400_military_wartime',
        name: 'Form N-400: Application for Naturalization',
        description: 'Check box indicating military eligibility during hostilities',
        category: 'forms',
        priority: 'required',
        cost: 0
      },
      ...IDENTITY_DOCUMENTS.filter(d => d.id !== 'green_card'),
      ...MILITARY_DOCUMENTS,
      {
        id: 'lawful_entry',
        name: 'Evidence of Lawful Entry',
        description: 'Proof of inspection and admission or parole',
        category: 'immigration_status',
        priority: 'required',
        tips: ['LPR status NOT required for wartime military'],
        alternatives: ['I-94', 'Visa stamp', 'Parole document', 'Any evidence of lawful entry']
      }
    ],
    specialInstructions: [
      'NO LPR requirement - any lawful status qualifies',
      'NO residence or physical presence requirements',
      'NO minimum service duration requirement',
      'Current designated period: 9/11/2001 to present (Executive Order 13269)',
      'Most expedited pathway available'
    ]
  },

  birthright_jus_soli: {
    pathwayType: 'birthright_jus_soli',
    pathwayName: 'Citizenship by Birth in U.S.',
    form: 'U.S. Passport (DS-11) or N-600',
    totalDocuments: 3,
    estimatedPrepTime: '1-2 days',
    documents: [
      {
        id: 'us_birth_certificate',
        name: 'U.S. Birth Certificate',
        description: 'Certified copy from state vital records',
        category: 'citizenship_evidence',
        priority: 'required',
        whereToObtain: 'State vital records office where born',
        cost: 25
      },
      {
        id: 'proof_identity_jus_soli',
        name: 'Proof of Identity',
        description: 'Government-issued ID',
        category: 'identity',
        priority: 'required',
        alternatives: ['Driver\'s license', 'State ID', 'Previous passport']
      },
      {
        id: 'ds11_or_n600',
        name: 'Application Form',
        description: 'DS-11 for passport OR N-600 for certificate',
        category: 'forms',
        priority: 'required',
        tips: [
          'Passport is faster and cheaper',
          'N-600 provides permanent certificate for records'
        ]
      }
    ],
    specialInstructions: [
      'U.S. birth certificate is primary evidence of citizenship',
      'Apply for passport at any passport acceptance facility',
      'N-600 is optional - passport serves as citizenship proof'
    ]
  },

  birthright_jus_sanguinis: {
    pathwayType: 'birthright_jus_sanguinis',
    pathwayName: 'Citizenship by Birth Abroad to U.S. Citizen Parent(s)',
    form: 'N-600 or U.S. Passport (DS-11)',
    totalDocuments: 10,
    estimatedPrepTime: '1-4 weeks',
    documents: [
      {
        id: 'child_birth_cert',
        name: 'Child\'s Foreign Birth Certificate',
        description: 'Certified copy with English translation',
        category: 'identity',
        priority: 'required'
      },
      {
        id: 'crba',
        name: 'Consular Report of Birth Abroad (FS-240)',
        description: 'If previously registered at U.S. embassy',
        category: 'citizenship_evidence',
        priority: 'conditional',
        conditions: ['If birth was registered at embassy'],
        tips: ['If you have CRBA, this is primary evidence']
      },
      {
        id: 'parent_citizenship',
        name: 'Parent(s) Citizenship Evidence',
        description: 'Proof parent was U.S. citizen at time of birth',
        category: 'citizenship_evidence',
        priority: 'required',
        alternatives: [
          'Parent\'s U.S. birth certificate',
          'Parent\'s naturalization certificate',
          'Parent\'s U.S. passport issued before child\'s birth'
        ]
      },
      {
        id: 'parent_marriage',
        name: 'Parents\' Marriage Certificate',
        description: 'If applicable',
        category: 'citizenship_evidence',
        priority: 'conditional',
        conditions: ['If parents were married']
      },
      {
        id: 'physical_presence_proof',
        name: 'Parent\'s Physical Presence Evidence',
        description: 'Proof citizen parent met physical presence requirement before birth',
        category: 'citizenship_evidence',
        priority: 'required',
        tips: [
          'School records, employment records, tax returns',
          'Requirements vary by birth date - see INA 301(g)',
          'For births after 11/14/1986: 5 years, 2 after age 14'
        ],
        legalBasis: '8 U.S.C. § 1401(g)'
      },
      {
        id: 'legitimation_docs',
        name: 'Legitimation/Acknowledgment Documents',
        description: 'If child born out of wedlock to citizen father',
        category: 'citizenship_evidence',
        priority: 'conditional',
        conditions: ['If born out of wedlock to citizen father'],
        tips: [
          'Father must acknowledge paternity before child turns 18',
          'Father must provide financial support until child turns 18',
          'Blood relationship evidence (DNA) may be required'
        ],
        legalBasis: '8 U.S.C. § 1409'
      }
    ],
    specialInstructions: [
      'Physical presence requirements depend on birth date and which parent is citizen',
      'For one citizen parent (births after 11/14/1986): 5 years, 2 after age 14',
      'For two citizen parents: only one needs prior residence in U.S.',
      'Complex cases should consult immigration attorney'
    ]
  },

  derivative_automatic: {
    pathwayType: 'derivative_automatic',
    pathwayName: 'Automatic Derivative Citizenship (CCA)',
    form: 'N-600',
    totalDocuments: 8,
    estimatedPrepTime: '1-2 weeks',
    documents: [
      {
        id: 'n600',
        name: 'Form N-600: Application for Certificate of Citizenship',
        description: 'Application to document derivative citizenship',
        category: 'forms',
        priority: 'required',
        cost: 1170
      },
      {
        id: 'child_birth_cert_deriv',
        name: 'Child\'s Birth Certificate',
        description: 'Showing parentage',
        category: 'identity',
        priority: 'required'
      },
      {
        id: 'child_green_card',
        name: 'Child\'s Green Card',
        description: 'Proof child was LPR while under 18',
        category: 'immigration_status',
        priority: 'required',
        tips: ['Even if expired, proves status at time of derivation']
      },
      {
        id: 'parent_naturalization',
        name: 'Parent\'s Naturalization Certificate',
        description: 'Proof parent became citizen while child was under 18',
        category: 'citizenship_evidence',
        priority: 'required',
        alternatives: ['Parent\'s U.S. birth certificate', 'Parent\'s Certificate of Citizenship']
      },
      {
        id: 'custody_proof',
        name: 'Custody Documentation',
        description: 'Proof child was in legal and physical custody of citizen parent',
        category: 'citizenship_evidence',
        priority: 'required',
        tips: [
          'If parents married and living together, assumed to have custody',
          'If divorced/separated, need custody order'
        ]
      },
      {
        id: 'residence_with_parent',
        name: 'Residence Evidence',
        description: 'Proof child resided in U.S. in custody of citizen parent',
        category: 'residence',
        priority: 'required',
        alternatives: ['School records', 'Medical records', 'Report cards']
      }
    ],
    specialInstructions: [
      'CCA applies to children who met ALL conditions on or after 2/27/2001',
      'All conditions must be met while child under 18',
      'Citizenship is automatic by operation of law - N-600 documents it',
      'Can also apply for passport as proof instead of N-600'
    ]
  },

  certificate_of_citizenship: {
    pathwayType: 'certificate_of_citizenship',
    pathwayName: 'Certificate of Citizenship (N-600)',
    form: 'N-600',
    totalDocuments: 6,
    estimatedPrepTime: '1-2 weeks',
    documents: [
      {
        id: 'n600_general',
        name: 'Form N-600: Application for Certificate of Citizenship',
        description: 'Completed application',
        category: 'forms',
        priority: 'required',
        cost: 1170,
        tips: ['Can be filed by person claiming citizenship or their parent']
      },
      {
        id: 'citizenship_basis_evidence',
        name: 'Evidence Supporting Citizenship Claim',
        description: 'Documents proving basis for citizenship (varies by claim)',
        category: 'citizenship_evidence',
        priority: 'required',
        tips: [
          'For birthright: parent citizenship + physical presence evidence',
          'For derivative: parent naturalization + LPR status + custody'
        ]
      },
      ...IDENTITY_DOCUMENTS.filter(d => ['birth_certificate', 'photos', 'government_id'].includes(d.id))
    ],
    specialInstructions: [
      'N-600 documents existing citizenship - it does not grant citizenship',
      'Alternative: apply for U.S. passport (faster, cheaper)',
      'Current fee: $1,170 (as of 2024)',
      'Processing time: 5-9 months typically'
    ]
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function getChecklist(pathway: PathwayType): DocumentChecklist {
  return DOCUMENT_CHECKLISTS[pathway]
}

export function getRequiredDocuments(pathway: PathwayType): Document[] {
  return DOCUMENT_CHECKLISTS[pathway].documents.filter(d => d.priority === 'required')
}

export function getConditionalDocuments(pathway: PathwayType): Document[] {
  return DOCUMENT_CHECKLISTS[pathway].documents.filter(d => d.priority === 'conditional')
}

export function getDocumentsByCategory(pathway: PathwayType, category: DocumentCategory): Document[] {
  return DOCUMENT_CHECKLISTS[pathway].documents.filter(d => d.category === category)
}

export function calculateTotalCost(pathway: PathwayType): number {
  const checklist = DOCUMENT_CHECKLISTS[pathway]
  return checklist.documents
    .filter(d => d.priority === 'required' && d.cost)
    .reduce((sum, d) => sum + (d.cost || 0), 0)
}

export function getDocumentCategories(): DocumentCategory[] {
  return [
    'forms',
    'identity',
    'immigration_status',
    'residence',
    'physical_presence',
    'good_moral_character',
    'marriage',
    'military',
    'citizenship_evidence',
    'financial'
  ]
}

export const CATEGORY_LABELS: Record<DocumentCategory, string> = {
  forms: 'Application Forms',
  identity: 'Identity Documents',
  immigration_status: 'Immigration Status',
  residence: 'Residence Evidence',
  physical_presence: 'Travel & Physical Presence',
  good_moral_character: 'Good Moral Character',
  marriage: 'Marriage Documents',
  military: 'Military Service',
  citizenship_evidence: 'Citizenship Evidence',
  financial: 'Financial Documents'
}
