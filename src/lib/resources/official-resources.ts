import { LAST_POLICY_REVIEW } from '@/lib/policy/current-policy'

export const LAST_RESOURCE_REVIEW = LAST_POLICY_REVIEW

export type ResourceKind =
  | 'apply'
  | 'case'
  | 'study'
  | 'language'
  | 'accessibility'
  | 'legal-help'
  | 'proof'
  | 'abroad'
  | 'law'
  | 'fraud'

export interface OfficialResource {
  title: string
  agency: string
  url: string
  kind: ResourceKind
  description: string
  note?: string
}

export const OFFICIAL_RESOURCES: OfficialResource[] = [
  {
    title: 'USCIS Citizenship Resource Center',
    agency: 'U.S. Citizenship and Immigration Services (USCIS)',
    url: 'https://www.uscis.gov/citizenship',
    kind: 'study',
    description: 'Official naturalization process, civics-test, English-study, class, and citizenship education resources.',
  },
  {
    title: 'Form N-400: Application for Naturalization',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/n-400',
    kind: 'apply',
    description: 'Current edition, filing methods, instructions, evidence guidance, and form-specific notices for naturalization.',
    note: 'Always use the live form page rather than a saved copy of the form or instructions.',
  },
  {
    title: 'USCIS Fee Schedule (Form G-1055)',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/g-1055',
    kind: 'apply',
    description: 'Current USCIS filing fees, reduced-fee categories, statutory exemptions, and fee-waiver eligibility by form.',
  },
  {
    title: 'Case Status Online',
    agency: 'USCIS',
    url: 'https://egov.uscis.gov/',
    kind: 'case',
    description: 'Track an application, petition, or request using the USCIS receipt number.',
  },
  {
    title: 'USCIS Processing Times',
    agency: 'USCIS',
    url: 'https://egov.uscis.gov/processing-times/',
    kind: 'case',
    description: 'Live processing-time information by form, category, and office where available.',
    note: 'A processing-time display is not a promise for an individual case.',
  },
  {
    title: 'USCIS e-Request and case inquiry tools',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/e-request',
    kind: 'case',
    description: 'Official self-service requests for eligible case inquiries and other case services.',
  },
  {
    title: 'USCIS Multilingual Resource Center',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/tools/multilingual-resource-center',
    kind: 'language',
    description: 'USCIS-developed immigration information and materials in multiple languages.',
    note: 'When a translated filing guide conflicts with the current form or instructions, verify the live USCIS form page before filing.',
  },
  {
    title: 'USCIS en español: Ciudadanía',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/es/ciudadania',
    kind: 'language',
    description: 'USCIS Spanish-language citizenship and naturalization resources, study materials, process guidance, and related official links.',
  },
  {
    title: 'USCIS Language Access Plan',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/sites/default/files/document/brochures/USCIS_Language_Access_Plan-November_2024.pdf',
    kind: 'language',
    description: 'USCIS plan describing language-access obligations, multilingual services, and the languages prioritized for citizenship outreach.',
    note: 'CitizenApproved uses this government-defined language set to prioritize translation work rather than inventing its own popularity ranking.',
  },
  {
    title: 'USAGov citizenship and naturalization',
    agency: 'U.S. General Services Administration (USAGov)',
    url: 'https://www.usa.gov/naturalization',
    kind: 'language',
    description: 'Plain-language federal orientation to naturalization and the current civics-test split, with links into USCIS resources.',
  },
  {
    title: 'USAGov en Español: naturalización y ciudadanía',
    agency: 'U.S. General Services Administration (USAGov)',
    url: 'https://www.usa.gov/es/naturalizacion-ciudadania-estados-unidos',
    kind: 'language',
    description: 'Official Spanish-language federal orientation to naturalization, proof of citizenship, dual nationality, military naturalization, and related topics.',
  },
  {
    title: 'Disability accommodations for USCIS appointments',
    agency: 'USCIS',
    url: 'https://egov.uscis.gov/e-request/accom',
    kind: 'accessibility',
    description: 'Request an accommodation for a scheduled USCIS appointment such as an interview, biometrics appointment, or oath ceremony.',
    note: 'A disability accommodation is different from the N-648 medical exception to English and/or civics testing.',
  },
  {
    title: 'Form N-648: Medical Certification for Disability Exceptions',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/n-648',
    kind: 'accessibility',
    description: 'Current form and instructions for a qualifying medical disability exception to naturalization educational requirements.',
  },
  {
    title: 'Find Legal Representation',
    agency: 'U.S. Department of Justice, Executive Office for Immigration Review (EOIR)',
    url: 'https://www.justice.gov/eoir/find-legal-representation',
    kind: 'legal-help',
    description: 'Official starting point for recognized organizations, accredited representatives, pro bono providers, and representation information.',
  },
  {
    title: 'Recognition and Accreditation rosters',
    agency: 'U.S. Department of Justice, EOIR',
    url: 'https://www.justice.gov/eoir/recognition-accreditation-roster-reports',
    kind: 'legal-help',
    description: 'Government rosters of DOJ-recognized organizations and accredited representatives authorized to provide immigration legal services within their accreditation.',
  },
  {
    title: 'USCIS: avoid scams and find authorized legal services',
    agency: 'USCIS',
    url: 'https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/find-legal-services',
    kind: 'fraud',
    description: 'Official guidance on who may provide immigration legal advice and how to avoid notario and immigration-services scams.',
  },
  {
    title: 'U.S. Citizenship Laws and Policy',
    agency: 'U.S. Department of State',
    url: 'https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship.html',
    kind: 'abroad',
    description: 'State Department hub for citizenship acquisition abroad, Child Citizenship Act issues, dual nationality, and loss or relinquishment of nationality.',
  },
  {
    title: 'Consular Report of Birth Abroad (CRBA)',
    agency: 'U.S. Department of State',
    url: 'https://travel.state.gov/content/travel/en/international-travel/while-abroad/birth-abroad.html',
    kind: 'proof',
    description: 'Official State Department information for documenting a qualifying U.S.-citizen child born outside the United States before age 18.',
  },
  {
    title: 'U.S. Passports',
    agency: 'U.S. Department of State',
    url: 'https://travel.state.gov/content/travel/en/passports.html',
    kind: 'proof',
    description: 'Official passport application, renewal, evidence, emergency, and travel-document information.',
  },
  {
    title: 'Title 8 of the U.S. Code',
    agency: 'Office of the Law Revision Counsel, U.S. House of Representatives',
    url: 'https://uscode.house.gov/browse/prelim@title8&edition=prelim',
    kind: 'law',
    description: 'Official codified federal statutory text, including the Immigration and Nationality Act provisions governing citizenship and naturalization.',
  },
  {
    title: 'Title 8 of the Code of Federal Regulations',
    agency: 'eCFR / U.S. Government Publishing Office and Office of the Federal Register',
    url: 'https://www.ecfr.gov/current/title-8',
    kind: 'law',
    description: 'Current federal regulations implementing immigration and nationality statutes.',
  },
  {
    title: 'Federal Register',
    agency: 'Office of the Federal Register / U.S. Government Publishing Office',
    url: 'https://www.federalregister.gov/',
    kind: 'law',
    description: 'Official publication for proposed rules, final rules, notices, effective dates, comment periods, and regulatory history.',
  },
  {
    title: 'Supreme Court opinions',
    agency: 'Supreme Court of the United States',
    url: 'https://www.supremecourt.gov/opinions/opinions.aspx',
    kind: 'law',
    description: 'Official Supreme Court opinions, including binding constitutional and statutory interpretations affecting citizenship law.',
  },
]

export function resourcesByKind(kind: ResourceKind): OfficialResource[] {
  return OFFICIAL_RESOURCES.filter((resource) => resource.kind === kind)
}
