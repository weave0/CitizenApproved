/**
 * Legal Sources & Authority Hierarchy
 * 
 * This file documents the authoritative sources for U.S. citizenship law,
 * organized by legal authority hierarchy. Understanding this hierarchy
 * is crucial for legal accuracy.
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 * HIERARCHY OF LEGAL AUTHORITY (in order of precedence)
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * 1. U.S. Constitution (Article I, Section 8, Clause 4 - Naturalization power)
 * 2. Federal Statutes (Title 8 U.S.C. - Immigration and Nationality Act)
 * 3. Federal Regulations (8 CFR - Code of Federal Regulations)
 * 4. Executive Orders & Presidential Proclamations
 * 5. Agency Policy (USCIS Policy Manual, Administrative Appeals Office)
 * 6. Case Law (Federal Courts, Board of Immigration Appeals)
 * 
 * ═══════════════════════════════════════════════════════════════════════════════
 */

export interface LegalSource {
  id: string
  name: string
  shortName: string
  type: 'primary' | 'secondary' | 'agency' | 'judicial' | 'research'
  authority: number // 1 = highest authority
  description: string
  url: string
  organization: string
  officialStatus: 'official' | 'authenticated' | 'unofficial_authoritative' | 'research'
  updateFrequency: string
  bestFor: string[]
  limitations?: string[]
  citationFormat: string
  relatedSources: string[]
}

export interface SourceCategory {
  name: string
  description: string
  sources: LegalSource[]
}

// ═══════════════════════════════════════════════════════════════════════════════
// PRIMARY LEGAL SOURCES (THE "ULTIMATE" SOURCES)
// These are the actual law - everything else interprets these
// ═══════════════════════════════════════════════════════════════════════════════

export const PRIMARY_SOURCES: LegalSource[] = [
  {
    id: 'govinfo_uscode',
    name: 'United States Code (Official)',
    shortName: 'U.S.C.',
    type: 'primary',
    authority: 1,
    description: 
      'THE official, enacted version of federal statutory law published by the U.S. Government ' +
      'Publishing Office. This is the ultimate authority for what the law says. Title 8 contains ' +
      'all immigration and nationality statutes including citizenship requirements.',
    url: 'https://www.govinfo.gov/app/collection/uscode',
    organization: 'U.S. Government Publishing Office (GPO)',
    officialStatus: 'official',
    updateFrequency: 'Updated after each session of Congress',
    bestFor: [
      'Definitive statutory text',
      'Official citations for legal documents',
      'Historical versions of law',
      'Verifying exact wording of statutes'
    ],
    limitations: [
      'Not updated in real-time (use Public Laws for newest)',
      'Can be dense for non-lawyers'
    ],
    citationFormat: '8 U.S.C. § [section]',
    relatedSources: ['congress_gov', 'ecfr']
  },
  {
    id: 'ecfr',
    name: 'Electronic Code of Federal Regulations',
    shortName: 'eCFR',
    type: 'primary',
    authority: 2,
    description: 
      'THE official, currently effective federal regulations. The eCFR is updated daily and ' +
      'provides the implementing regulations for immigration law. 8 CFR contains the detailed ' +
      'rules that USCIS, CBP, and ICE must follow.',
    url: 'https://www.ecfr.gov/current/title-8',
    organization: 'Office of the Federal Register, National Archives',
    officialStatus: 'official',
    updateFrequency: 'Updated daily',
    bestFor: [
      'Current regulatory requirements',
      'Detailed procedural rules',
      'Eligibility criteria details',
      'Form requirements'
    ],
    citationFormat: '8 C.F.R. § [section]',
    relatedSources: ['federal_register', 'govinfo_uscode']
  },
  {
    id: 'congress_gov',
    name: 'Congress.gov',
    shortName: 'Congress.gov',
    type: 'primary',
    authority: 1,
    description: 
      'Official source for congressional legislation including Public Laws (newest enacted laws), ' +
      'pending bills, legislative history, and congressional reports. Essential for tracking ' +
      'changes to immigration law before they appear in the U.S. Code.',
    url: 'https://www.congress.gov/',
    organization: 'Library of Congress',
    officialStatus: 'official',
    updateFrequency: 'Real-time as Congress acts',
    bestFor: [
      'Newest laws (Public Laws)',
      'Pending immigration bills',
      'Legislative history and intent',
      'Congressional reports explaining laws'
    ],
    citationFormat: 'Pub. L. [number] or H.R./S. [bill number]',
    relatedSources: ['govinfo_uscode', 'loc']
  },
  {
    id: 'federal_register',
    name: 'Federal Register',
    shortName: 'Fed. Reg.',
    type: 'primary',
    authority: 2,
    description: 
      'Daily journal of the U.S. government containing proposed rules, final rules, ' +
      'executive orders, and agency notices. Critical for tracking upcoming regulatory ' +
      'changes and understanding the reasoning behind rules.',
    url: 'https://www.federalregister.gov/',
    organization: 'Office of the Federal Register, National Archives',
    officialStatus: 'official',
    updateFrequency: 'Daily (business days)',
    bestFor: [
      'Proposed rule changes',
      'Final rules with explanations',
      'Fee change announcements',
      'Policy rationale and public comments'
    ],
    citationFormat: '[volume] Fed. Reg. [page] ([date])',
    relatedSources: ['ecfr', 'uscis_gov']
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// AGENCY SOURCES (Official government agencies that implement the law)
// ═══════════════════════════════════════════════════════════════════════════════

export const AGENCY_SOURCES: LegalSource[] = [
  {
    id: 'uscis_gov',
    name: 'U.S. Citizenship and Immigration Services',
    shortName: 'USCIS',
    type: 'agency',
    authority: 3,
    description: 
      'THE agency responsible for administering immigration and naturalization. USCIS.gov ' +
      'provides official forms, filing instructions, processing times, fee schedules, and ' +
      'the Policy Manual that guides adjudication decisions.',
    url: 'https://www.uscis.gov/',
    organization: 'Department of Homeland Security',
    officialStatus: 'official',
    updateFrequency: 'Varies by section',
    bestFor: [
      'Official forms and instructions',
      'Current filing fees',
      'Processing times by location',
      'Policy Manual (adjudication guidance)',
      'Case status tracking'
    ],
    citationFormat: 'USCIS Policy Manual, Vol. [X], Part [X], Chapter [X]',
    relatedSources: ['uscis_policy_manual', 'dhs_gov']
  },
  {
    id: 'uscis_policy_manual',
    name: 'USCIS Policy Manual',
    shortName: 'Policy Manual',
    type: 'agency',
    authority: 3,
    description: 
      'Comprehensive policy guidance for USCIS officers making decisions on immigration ' +
      'applications. Volume 12 covers Citizenship & Naturalization. This is how USCIS ' +
      'interprets and applies the statutes and regulations.',
    url: 'https://www.uscis.gov/policy-manual',
    organization: 'USCIS',
    officialStatus: 'official',
    updateFrequency: 'Updated as policy changes',
    bestFor: [
      'Understanding how USCIS interprets law',
      'Eligibility analysis',
      'Evidence requirements',
      'Discretionary factors'
    ],
    citationFormat: 'USCIS Policy Manual, Vol. 12, Part [X], Ch. [X]',
    relatedSources: ['uscis_gov', 'ecfr']
  },
  {
    id: 'state_gov',
    name: 'U.S. Department of State',
    shortName: 'State Dept.',
    type: 'agency',
    authority: 3,
    description: 
      'Handles citizenship matters abroad through embassies and consulates. Key resource for ' +
      'acquisition of citizenship at birth abroad, Consular Reports of Birth Abroad (CRBA), ' +
      'and citizenship for children of U.S. citizens born overseas.',
    url: 'https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship.html',
    organization: 'Department of State',
    officialStatus: 'official',
    updateFrequency: 'Varies',
    bestFor: [
      'Citizenship at birth abroad',
      'CRBA (Consular Report of Birth Abroad)',
      'Passport as proof of citizenship',
      'Foreign Affairs Manual (9 FAM)'
    ],
    citationFormat: '9 FAM [section]',
    relatedSources: ['uscis_gov', 'govinfo_uscode']
  },
  {
    id: 'dhs_gov',
    name: 'Department of Homeland Security',
    shortName: 'DHS',
    type: 'agency',
    authority: 3,
    description: 
      'Parent agency of USCIS, CBP, and ICE. DHS sets overall immigration policy direction ' +
      'and publishes important reports, statistics, and the USCIS Ombudsman reports.',
    url: 'https://www.dhs.gov/',
    organization: 'Department of Homeland Security',
    officialStatus: 'official',
    updateFrequency: 'Varies',
    bestFor: [
      'Immigration statistics',
      'Ombudsman reports on USCIS problems',
      'Overall policy direction',
      'Inspector General reports'
    ],
    citationFormat: 'DHS [publication type]',
    relatedSources: ['uscis_gov', 'dhs_ombudsman']
  },
  {
    id: 'dhs_ombudsman',
    name: 'USCIS Ombudsman',
    shortName: 'CIS Ombudsman',
    type: 'agency',
    authority: 4,
    description: 
      'Independent office within DHS that identifies problems in USCIS service delivery ' +
      'and proposes solutions. Annual reports document systemic issues and are invaluable ' +
      'for understanding why processes are delayed.',
    url: 'https://www.dhs.gov/topic/cis-ombudsman',
    organization: 'Department of Homeland Security',
    officialStatus: 'official',
    updateFrequency: 'Annual reports + recommendations',
    bestFor: [
      'Identifying systemic problems',
      'Processing delay documentation',
      'Proposed solutions',
      'Individual case assistance'
    ],
    citationFormat: 'CIS Ombudsman Annual Report [year]',
    relatedSources: ['dhs_gov', 'gao']
  },
  {
    id: 'eoir',
    name: 'Executive Office for Immigration Review',
    shortName: 'EOIR',
    type: 'agency',
    authority: 3,
    description: 
      'DOJ agency that operates immigration courts and the Board of Immigration Appeals (BIA). ' +
      'BIA decisions interpret immigration law and create binding precedent.',
    url: 'https://www.justice.gov/eoir',
    organization: 'Department of Justice',
    officialStatus: 'official',
    updateFrequency: 'Ongoing',
    bestFor: [
      'BIA decisions (precedent)',
      'Immigration court procedures',
      'Removal defense',
      'Appeals process'
    ],
    citationFormat: 'Matter of [Name], [volume] I&N Dec. [page] (BIA [year])',
    relatedSources: ['govinfo_uscode', 'ecfr']
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// JUDICIAL SOURCES (Court decisions interpreting the law)
// ═══════════════════════════════════════════════════════════════════════════════

export const JUDICIAL_SOURCES: LegalSource[] = [
  {
    id: 'supremecourt_gov',
    name: 'Supreme Court of the United States',
    shortName: 'SCOTUS',
    type: 'judicial',
    authority: 1,
    description: 
      'The highest court. Supreme Court decisions on citizenship and naturalization are ' +
      'the final word on constitutional interpretation. Key cases include United States v. ' +
      'Wong Kim Ark (birthright citizenship) and Afroyim v. Rusk (loss of citizenship).',
    url: 'https://www.supremecourt.gov/',
    organization: 'U.S. Supreme Court',
    officialStatus: 'official',
    updateFrequency: 'As cases are decided',
    bestFor: [
      'Constitutional interpretation',
      'Final resolution of legal questions',
      'Landmark citizenship cases'
    ],
    citationFormat: '[volume] U.S. [page] ([year])',
    relatedSources: ['uscourts_gov', 'govinfo_uscode']
  },
  {
    id: 'uscourts_gov',
    name: 'U.S. Courts (Federal Courts)',
    shortName: 'Federal Courts',
    type: 'judicial',
    authority: 2,
    description: 
      'Federal district and circuit courts hear immigration cases including naturalization ' +
      'denials, declaratory citizenship actions, and constitutional challenges. Circuit ' +
      'courts create binding precedent within their regions.',
    url: 'https://www.uscourts.gov/',
    organization: 'U.S. Federal Judiciary',
    officialStatus: 'official',
    updateFrequency: 'As cases are decided',
    bestFor: [
      'Appeals of USCIS denials',
      'Circuit-specific precedent',
      'Constitutional challenges',
      'Procedural requirements'
    ],
    citationFormat: '[volume] F.3d/F.4th [page] ([circuit] [year])',
    relatedSources: ['supremecourt_gov', 'eoir']
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// RESEARCH & OVERSIGHT SOURCES
// ═══════════════════════════════════════════════════════════════════════════════

export const RESEARCH_SOURCES: LegalSource[] = [
  {
    id: 'gao',
    name: 'Government Accountability Office',
    shortName: 'GAO',
    type: 'research',
    authority: 5,
    description: 
      'Congressional watchdog that audits federal agencies. GAO reports on USCIS provide ' +
      'detailed analysis of backlogs, processing times, fraud, and efficiency. Critical ' +
      'source for understanding systemic issues.',
    url: 'https://www.gao.gov/',
    organization: 'Congress (Legislative Branch)',
    officialStatus: 'official',
    updateFrequency: 'Ongoing reports',
    bestFor: [
      'Backlog analysis',
      'Processing efficiency studies',
      'Fraud statistics',
      'Policy recommendations'
    ],
    citationFormat: 'GAO-[year]-[number]',
    relatedSources: ['dhs_ombudsman', 'dhs_oig']
  },
  {
    id: 'dhs_oig',
    name: 'DHS Office of Inspector General',
    shortName: 'DHS OIG',
    type: 'research',
    authority: 5,
    description: 
      'Internal watchdog for DHS. OIG reports investigate USCIS operations, fraud, and ' +
      'waste. Provides detailed inside look at agency challenges.',
    url: 'https://www.oig.dhs.gov/',
    organization: 'Department of Homeland Security',
    officialStatus: 'official',
    updateFrequency: 'Ongoing reports',
    bestFor: [
      'Internal investigations',
      'Fraud detection',
      'Operational efficiency',
      'IT system assessments'
    ],
    citationFormat: 'OIG-[year]-[number]',
    relatedSources: ['gao', 'dhs_ombudsman']
  },
  {
    id: 'loc',
    name: 'Library of Congress',
    shortName: 'LOC',
    type: 'research',
    authority: 5,
    description: 
      'Houses the Congressional Research Service (CRS) which produces nonpartisan ' +
      'analysis of immigration law for Congress. Also provides historical legal documents.',
    url: 'https://www.loc.gov/',
    organization: 'Library of Congress',
    officialStatus: 'official',
    updateFrequency: 'Ongoing',
    bestFor: [
      'CRS reports on immigration policy',
      'Historical analysis',
      'Legislative background',
      'Legal research guides'
    ],
    citationFormat: 'CRS Report [number]',
    relatedSources: ['congress_gov', 'gao']
  },
  {
    id: 'archives_gov',
    name: 'National Archives',
    shortName: 'NARA',
    type: 'research',
    authority: 5,
    description: 
      'Preserves historical immigration records including naturalization certificates, ' +
      'ship manifests, and citizenship documents. Essential for genealogical research ' +
      'and proving derivative citizenship through historical records.',
    url: 'https://www.archives.gov/research/immigration',
    organization: 'National Archives and Records Administration',
    officialStatus: 'official',
    updateFrequency: 'Historical records',
    bestFor: [
      'Historical naturalization records',
      'Proving citizenship through ancestry',
      'Ship manifests and entry records',
      'Historical citizenship certificates'
    ],
    citationFormat: 'NARA [record group/series]',
    relatedSources: ['govinfo_uscode', 'loc']
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// SECONDARY AUTHORITATIVE SOURCES
// High-quality compilations and educational resources
// ═══════════════════════════════════════════════════════════════════════════════

export const SECONDARY_SOURCES: LegalSource[] = [
  {
    id: 'cornell_lii',
    name: 'Cornell Law Legal Information Institute',
    shortName: 'Cornell LII',
    type: 'secondary',
    authority: 6,
    description: 
      'Highly respected free legal resource maintained by Cornell Law School. Provides ' +
      'accessible formatting of U.S. Code and CFR with helpful annotations, cross-references, ' +
      'and plain-English explanations. NOT the official source but widely used.',
    url: 'https://www.law.cornell.edu/',
    organization: 'Cornell Law School',
    officialStatus: 'unofficial_authoritative',
    updateFrequency: 'Regular updates',
    bestFor: [
      'User-friendly legal text',
      'Quick research',
      'Cross-references',
      'Plain English overviews'
    ],
    limitations: [
      'Not the official source',
      'May lag behind official updates',
      'Verify critical citations with GPO'
    ],
    citationFormat: 'Use official citation format (8 U.S.C. §)',
    relatedSources: ['govinfo_uscode', 'ecfr']
  },
  {
    id: 'justia',
    name: 'Justia',
    shortName: 'Justia',
    type: 'secondary',
    authority: 6,
    description: 
      'Free legal information portal providing access to case law, statutes, and regulations. ' +
      'Good for finding court decisions and understanding how laws are applied.',
    url: 'https://law.justia.com/',
    organization: 'Justia Inc.',
    officialStatus: 'unofficial_authoritative',
    updateFrequency: 'Regular updates',
    bestFor: [
      'Court case research',
      'Free case law database',
      'Legal encyclopedias',
      'Attorney directory'
    ],
    limitations: [
      'Commercial entity',
      'Verify with official sources'
    ],
    citationFormat: 'Use official citation format',
    relatedSources: ['supremecourt_gov', 'uscourts_gov']
  },
  {
    id: 'ilrc',
    name: 'Immigrant Legal Resource Center',
    shortName: 'ILRC',
    type: 'secondary',
    authority: 6,
    description: 
      'Nonprofit providing training and resources for immigration legal advocates. ' +
      'Produces practice advisories and manuals used by immigration attorneys.',
    url: 'https://www.ilrc.org/',
    organization: 'Immigrant Legal Resource Center',
    officialStatus: 'unofficial_authoritative',
    updateFrequency: 'Ongoing',
    bestFor: [
      'Practice advisories',
      'Training materials',
      'Know Your Rights info',
      'Naturalization guides'
    ],
    citationFormat: 'ILRC [publication name]',
    relatedSources: ['uscis_gov', 'aila']
  },
  {
    id: 'aila',
    name: 'American Immigration Lawyers Association',
    shortName: 'AILA',
    type: 'secondary',
    authority: 6,
    description: 
      'Professional association of immigration lawyers. AILA tracks policy changes, ' +
      'provides practice resources, and advocates for immigration reform.',
    url: 'https://www.aila.org/',
    organization: 'AILA',
    officialStatus: 'unofficial_authoritative',
    updateFrequency: 'Ongoing',
    bestFor: [
      'Policy tracking',
      'Practice alerts',
      'Processing time surveys',
      'Attorney resources'
    ],
    limitations: [
      'Membership required for full access',
      'Advocacy organization'
    ],
    citationFormat: 'AILA Doc. No. [number]',
    relatedSources: ['uscis_gov', 'ilrc']
  },
  {
    id: 'mpi',
    name: 'Migration Policy Institute',
    shortName: 'MPI',
    type: 'secondary',
    authority: 6,
    description: 
      'Nonpartisan think tank dedicated to analysis of immigrant and migration policy. ' +
      'MPI provides authoritative research, data analysis, and policy recommendations ' +
      'widely cited by government, media, and academia.',
    url: 'https://www.migrationpolicy.org/',
    organization: 'Migration Policy Institute',
    officialStatus: 'unofficial_authoritative',
    updateFrequency: 'Ongoing research',
    bestFor: [
      'Data and statistics analysis',
      'Policy research and recommendations',
      'Naturalization trends',
      'Integration policy',
      'International comparisons'
    ],
    limitations: [
      'Think tank perspective',
      'Verify raw data with official sources'
    ],
    citationFormat: 'Migration Policy Institute, "[Title]" ([Year])',
    relatedSources: ['gao', 'aic']
  },
  {
    id: 'aic',
    name: 'American Immigration Council',
    shortName: 'AIC',
    type: 'secondary',
    authority: 6,
    description: 
      'Nonprofit organization providing research, policy analysis, and legal advocacy ' +
      'on immigration. Known for comprehensive fact sheets and integration research.',
    url: 'https://www.americanimmigrationcouncil.org/',
    organization: 'American Immigration Council',
    officialStatus: 'unofficial_authoritative',
    updateFrequency: 'Ongoing',
    bestFor: [
      'Fact sheets and data',
      'Integration research',
      'State-level immigration data',
      'Immigration court analysis'
    ],
    limitations: [
      'Advocacy perspective',
      'Cross-reference with official sources'
    ],
    citationFormat: 'American Immigration Council, "[Title]" ([Year])',
    relatedSources: ['mpi', 'ilrc']
  },
  {
    id: 'crs',
    name: 'Congressional Research Service',
    shortName: 'CRS',
    type: 'research',
    authority: 5,
    description: 
      'Nonpartisan research arm of Congress providing expert analysis on legislation ' +
      'and policy. CRS reports on immigration are authoritative, objective, and widely ' +
      'respected. Available free through Congress.gov.',
    url: 'https://www.congress.gov/crs-products',
    organization: 'Library of Congress',
    officialStatus: 'official',
    updateFrequency: 'As Congress requests',
    bestFor: [
      'Legislative analysis',
      'Legal background',
      'Policy comparisons',
      'Statutory interpretation'
    ],
    citationFormat: 'CRS Report [number], "[Title]" ([date])',
    relatedSources: ['congress_gov', 'loc', 'gao']
  },
  {
    id: 'boundless',
    name: 'Boundless Immigration',
    shortName: 'Boundless',
    type: 'secondary',
    authority: 7,
    description: 
      'Immigration technology company providing accessible information about the ' +
      'immigration process. Known for clear explanations and processing time tracking.',
    url: 'https://www.boundless.com/',
    organization: 'Boundless Immigration Inc.',
    officialStatus: 'unofficial_authoritative',
    updateFrequency: 'Regular updates',
    bestFor: [
      'Accessible explanations',
      'Processing time tracking',
      'Cost breakdowns',
      'User-friendly guides'
    ],
    limitations: [
      'Commercial company',
      'Verify with official sources for legal advice'
    ],
    citationFormat: 'Boundless Immigration, "[Topic]"',
    relatedSources: ['uscis_gov', 'aila']
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// KEY CASE LAW (Landmark citizenship decisions)
// ═══════════════════════════════════════════════════════════════════════════════

export interface LandmarkCase {
  name: string
  citation: string
  year: number
  court: string
  holding: string
  significance: string
  url: string
  topics: string[]
}

export const LANDMARK_CASES: LandmarkCase[] = [
  {
    name: 'United States v. Wong Kim Ark',
    citation: '169 U.S. 649 (1898)',
    year: 1898,
    court: 'Supreme Court',
    holding: 
      'A child born in the United States to Chinese immigrant parents is a U.S. citizen ' +
      'by virtue of the Fourteenth Amendment, regardless of the parents\' nationality.',
    significance: 
      'THE foundational case for birthright citizenship. Established that the 14th Amendment ' +
      'grants citizenship to virtually all persons born on U.S. soil.',
    url: 'https://supreme.justia.com/cases/federal/us/169/649/',
    topics: ['birthright citizenship', '14th amendment', 'jus soli']
  },
  {
    name: 'Afroyim v. Rusk',
    citation: '387 U.S. 253 (1967)',
    year: 1967,
    court: 'Supreme Court',
    holding: 
      'Congress cannot strip a citizen of their citizenship without their voluntary ' +
      'renunciation or consent.',
    significance: 
      'Established that citizenship is a constitutional right that cannot be taken away ' +
      'by Congress. Protects against involuntary loss of citizenship.',
    url: 'https://supreme.justia.com/cases/federal/us/387/253/',
    topics: ['loss of citizenship', 'denaturalization', 'constitutional rights']
  },
  {
    name: 'Vance v. Terrazas',
    citation: '444 U.S. 252 (1980)',
    year: 1980,
    court: 'Supreme Court',
    holding: 
      'The government must prove by a preponderance of evidence both an expatriating act ' +
      'AND specific intent to relinquish citizenship for loss of citizenship.',
    significance: 
      'Set the evidentiary standard for loss of citizenship cases. Intent to relinquish ' +
      'must be proven; expatriating acts alone are not sufficient.',
    url: 'https://supreme.justia.com/cases/federal/us/444/252/',
    topics: ['loss of citizenship', 'intent', 'burden of proof']
  },
  {
    name: 'Rogers v. Bellei',
    citation: '401 U.S. 815 (1971)',
    year: 1971,
    court: 'Supreme Court',
    holding: 
      'Congress may impose conditions (like residency requirements) on citizenship ' +
      'acquired abroad by birth to a U.S. citizen parent.',
    significance: 
      'Distinguished between citizenship at birth in the U.S. (14th Amendment protected) ' +
      'and citizenship at birth abroad (subject to Congressional conditions).',
    url: 'https://supreme.justia.com/cases/federal/us/401/815/',
    topics: ['citizenship abroad', 'residency requirements', 'congressional power']
  },
  {
    name: 'Schneiderman v. United States',
    citation: '320 U.S. 118 (1943)',
    year: 1943,
    court: 'Supreme Court',
    holding: 
      'Denaturalization requires clear, unequivocal, and convincing evidence of fraud ' +
      'or illegality in the original naturalization.',
    significance: 
      'Set a high standard for denaturalization. Membership in the Communist Party alone ' +
      'was insufficient to prove lack of attachment to the Constitution.',
    url: 'https://supreme.justia.com/cases/federal/us/320/118/',
    topics: ['denaturalization', 'attachment to constitution', 'burden of proof']
  },
  {
    name: 'Fedorenko v. United States',
    citation: '449 U.S. 490 (1981)',
    year: 1981,
    court: 'Supreme Court',
    holding: 
      'Citizenship obtained through willful misrepresentation of material facts can be ' +
      'revoked regardless of the person\'s conduct after naturalization.',
    significance: 
      'Established that fraud in naturalization proceedings warrants denaturalization ' +
      'even if the person would have been eligible otherwise.',
    url: 'https://supreme.justia.com/cases/federal/us/449/490/',
    topics: ['denaturalization', 'fraud', 'material misrepresentation']
  },
  {
    name: 'Miller v. Albright',
    citation: '523 U.S. 420 (1998)',
    year: 1998,
    court: 'Supreme Court',
    holding: 
      'Different requirements for citizenship transmission through unmarried fathers ' +
      'versus mothers do not violate equal protection.',
    significance: 
      'Upheld gender-based distinctions in citizenship transmission (later partially ' +
      'addressed in Sessions v. Morales-Santana).',
    url: 'https://supreme.justia.com/cases/federal/us/523/420/',
    topics: ['citizenship abroad', 'gender discrimination', 'equal protection']
  },
  {
    name: 'Sessions v. Morales-Santana',
    citation: '582 U.S. ___ (2017)',
    year: 2017,
    court: 'Supreme Court',
    holding: 
      'Gender-based distinctions in physical presence requirements for citizenship ' +
      'transmission violate equal protection.',
    significance: 
      'Struck down discriminatory rule requiring unmarried citizen fathers to have ' +
      'more U.S. presence than citizen mothers for child to acquire citizenship.',
    url: 'https://supreme.justia.com/cases/federal/us/582/16-309/',
    topics: ['citizenship abroad', 'gender discrimination', 'equal protection', 'physical presence']
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// ALL SOURCES COMBINED & ORGANIZED
// ═══════════════════════════════════════════════════════════════════════════════

export const ALL_SOURCES = [
  ...PRIMARY_SOURCES,
  ...AGENCY_SOURCES,
  ...JUDICIAL_SOURCES,
  ...RESEARCH_SOURCES,
  ...SECONDARY_SOURCES
]

export const SOURCE_CATEGORIES: SourceCategory[] = [
  {
    name: 'Primary Law (The Actual Law)',
    description: 
      'These ARE the law. Statutes passed by Congress and regulations issued by agencies. ' +
      'When in doubt, these sources take precedence over all others.',
    sources: PRIMARY_SOURCES
  },
  {
    name: 'Government Agencies',
    description: 
      'Official agencies that implement and interpret immigration law. USCIS is the ' +
      'primary agency for citizenship matters.',
    sources: AGENCY_SOURCES
  },
  {
    name: 'Courts (Judicial Interpretation)',
    description: 
      'Court decisions that interpret the law. Supreme Court decisions are binding ' +
      'nationwide; circuit court decisions are binding in their region.',
    sources: JUDICIAL_SOURCES
  },
  {
    name: 'Research & Oversight',
    description: 
      'Government watchdogs and research organizations that analyze immigration ' +
      'policy, document problems, and propose solutions.',
    sources: RESEARCH_SOURCES
  },
  {
    name: 'Secondary Sources',
    description: 
      'High-quality legal resources and advocacy organizations. Useful for research ' +
      'but always verify critical information with primary sources.',
    sources: SECONDARY_SOURCES
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// QUICK REFERENCE LINKS FOR SPECIFIC TOPICS
// ═══════════════════════════════════════════════════════════════════════════════

export const TOPIC_SOURCES = {
  naturalization: {
    statute: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partII.htm',
    regulations: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-316',
    regulationsFull: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-C',
    uscis: 'https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization',
    policyManual: 'https://www.uscis.gov/policy-manual/volume-12',
    forms: 'https://www.uscis.gov/n-400',
    goodMoralCharacter: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-C/part-316/section-316.10',
    residenceRequirements: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-C/part-316/section-316.5',
    eligibility: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-C/part-316/section-316.2'
  },
  birthright: {
    statute: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partI-sec1401.htm',
    statute_abroad: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partI-sec1401.htm',
    regulations: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-101/section-101.3',
    scotus: 'https://supreme.justia.com/cases/federal/us/169/649/', // Wong Kim Ark
    stateGov: 'https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/Acquisition-US-Citizenship-Child-Born-Abroad.html',
    crba: 'https://travel.state.gov/content/travel/en/international-travel/while-abroad/birth-abroad.html',
    fam: 'https://fam.state.gov/fam/08FAM/08FAM030101.html' // Foreign Affairs Manual
  },
  derivative: {
    statute_automatic: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partII-sec1431.htm',
    statute_abroad: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partII-sec1433.htm',
    regulations: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-320',
    uscis: 'https://www.uscis.gov/n-600',
    policyManual: 'https://www.uscis.gov/policy-manual/volume-12-part-h',
    childCitizenshipAct: 'https://www.congress.gov/106/plaws/publ395/PLAW-106publ395.htm'
  },
  military: {
    statute_peacetime: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partII-sec1439.htm',
    statute_wartime: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partII-sec1440.htm',
    regulations: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-328',
    uscis: 'https://www.uscis.gov/military/naturalization-through-military-service',
    policyManual: 'https://www.uscis.gov/policy-manual/volume-12-part-i',
    mavni: 'https://www.uscis.gov/military/military-accessions-vital-to-the-national-interest-mavni-recruitment-program'
  },
  marriage: {
    statute: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partII-sec1430.htm',
    regulations: 'https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-319',
    uscis: 'https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization/i-am-married-to-a-us-citizen',
    policyManual: 'https://www.uscis.gov/policy-manual/volume-12-part-g'
  },
  lossOfCitizenship: {
    statute: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partIII-sec1481.htm',
    regulations: 'https://www.ecfr.gov/current/title-22/chapter-I/subchapter-F/part-50',
    stateGov: 'https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/Renunciation-US-Nationality-Abroad.html',
    policyManual: 'https://www.uscis.gov/policy-manual/volume-12-part-l'
  },
  denaturalization: {
    statute: 'https://www.govinfo.gov/content/pkg/USCODE-2023-title8/html/USCODE-2023-title8-chap12-subchapIII-partII-sec1451.htm',
    dojPolicy: 'https://www.justice.gov/civil/denaturalization',
    uscis: 'https://www.uscis.gov/policy-manual/volume-12-part-l-chapter-2'
  },
  fees: {
    current: 'https://www.uscis.gov/forms/filing-fees',
    feeSchedule: 'https://www.uscis.gov/forms/filing-fees/uscis-fee-schedule',
    feeRule2024: 'https://www.federalregister.gov/documents/2024/01/31/2024-01427/us-citizenship-and-immigration-services-fee-schedule-and-changes-to-certain-other-immigration',
    waivers: 'https://www.uscis.gov/forms/filing-fees/additional-information-on-filing-a-fee-waiver',
    reducedFees: 'https://www.uscis.gov/forms/filing-fees/uscis-fee-schedule#reduced',
    feeExemptions: 'https://www.uscis.gov/humanitarian/special-situations'
  },
  processingTimes: {
    current: 'https://egov.uscis.gov/processing-times/',
    historical: 'https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data',
    byFieldOffice: 'https://egov.uscis.gov/processing-times/',
    statistics: 'https://www.uscis.gov/tools/reports-and-studies'
  },
  civicsTest: {
    questions: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test',
    materials: 'https://www.uscis.gov/citizenship/find-study-materials-and-resources',
    exemptions: 'https://www.uscis.gov/policy-manual/volume-12-part-e-chapter-2',
    accommodations: 'https://www.uscis.gov/forms/filing-guidance/how-to-request-a-disability-accommodation-for-a-uscis-appointment'
  },
  oathCeremony: {
    requirements: 'https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test/the-oath-of-allegiance',
    modifications: 'https://www.uscis.gov/policy-manual/volume-12-part-j-chapter-3',
    text: 'https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test/oath-of-allegiance'
  },
  backlogsAndReports: {
    gaoReports: 'https://www.gao.gov/immigration',
    ombudsmanReports: 'https://www.dhs.gov/topic/cis-ombudsman/recommendations',
    oigReports: 'https://www.oig.dhs.gov/reports/audits-inspections-and-evaluations',
    statistics: 'https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data'
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

export function getSourceById(id: string): LegalSource | undefined {
  return ALL_SOURCES.find(s => s.id === id)
}

export function getSourcesByType(type: LegalSource['type']): LegalSource[] {
  return ALL_SOURCES.filter(s => s.type === type)
}

export function getSourcesByAuthority(maxAuthority: number): LegalSource[] {
  return ALL_SOURCES.filter(s => s.authority <= maxAuthority)
}

export function getOfficialSourcesOnly(): LegalSource[] {
  return ALL_SOURCES.filter(s => s.officialStatus === 'official')
}

export function getCasesByTopic(topic: string): LandmarkCase[] {
  return LANDMARK_CASES.filter(c => 
    c.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
  )
}

export function getCasesByCourt(court: string): LandmarkCase[] {
  return LANDMARK_CASES.filter(c => c.court.toLowerCase() === court.toLowerCase())
}

// ═══════════════════════════════════════════════════════════════════════════════
// SOURCE AUTHORITY EXPLANATION
// ═══════════════════════════════════════════════════════════════════════════════

export const AUTHORITY_HIERARCHY = {
  description: `
    The U.S. legal system follows a hierarchy of authority. When sources conflict,
    the higher authority prevails. Understanding this hierarchy is essential for
    legal accuracy.
  `,
  levels: [
    {
      level: 1,
      name: 'U.S. Constitution',
      description: 'The supreme law of the land. All other laws must conform to it.',
      relevantSources: ['U.S. Constitution, 14th Amendment (birthright citizenship)']
    },
    {
      level: 2,
      name: 'Federal Statutes (U.S. Code)',
      description: 'Laws passed by Congress and signed by the President.',
      relevantSources: ['8 U.S.C. (Immigration and Nationality Act)', 'govinfo_uscode']
    },
    {
      level: 3,
      name: 'Federal Regulations (CFR)',
      description: 'Rules issued by executive agencies to implement statutes.',
      relevantSources: ['8 CFR (Immigration regulations)', 'ecfr']
    },
    {
      level: 4,
      name: 'Executive Orders & Proclamations',
      description: 'Presidential directives that have force of law.',
      relevantSources: ['Federal Register', 'WhiteHouse.gov']
    },
    {
      level: 5,
      name: 'Agency Policy & Guidance',
      description: 'Official interpretations and procedures from agencies.',
      relevantSources: ['USCIS Policy Manual', 'USCIS Memoranda', 'AAO Decisions']
    },
    {
      level: 6,
      name: 'Case Law',
      description: 'Court decisions interpreting laws. Higher courts bind lower courts.',
      relevantSources: ['Supreme Court', 'Circuit Courts', 'BIA Precedent Decisions']
    },
    {
      level: 7,
      name: 'Secondary Sources',
      description: 'Expert analysis and commentary. Helpful but not binding.',
      relevantSources: ['Cornell LII', 'AILA', 'CRS Reports', 'Legal treatises']
    }
  ]
}

// ═══════════════════════════════════════════════════════════════════════════════
// VERIFICATION TIPS
// ═══════════════════════════════════════════════════════════════════════════════

export const VERIFICATION_TIPS = [
  'Always verify critical legal information with PRIMARY sources (U.S. Code, eCFR)',
  'Check the date - immigration law changes frequently',
  'Remember that regulations (8 CFR) provide details not in statutes',
  'USCIS Policy Manual explains how the agency applies the law',
  'Circuit court decisions only apply in that circuit',
  'State law does NOT affect federal citizenship rules',
  'When in doubt, consult an immigration attorney',
  'Processing times and fees change - always check USCIS.gov for current info'
]
