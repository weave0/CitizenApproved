export const USCIS_LANGUAGE_ACCESS_PLAN_URL =
  'https://www.uscis.gov/sites/default/files/document/brochures/USCIS_Language_Access_Plan-November_2024.pdf'

export const USCIS_MULTILINGUAL_CENTER_URL =
  'https://www.uscis.gov/tools/multilingual-resource-center'

export type LanguageGuide = {
  code: string
  name: string
  nativeName: string
  direction: 'ltr' | 'rtl'
  citizenApprovedPath?: string
  officialUrl: string
}

/**
 * USCIS's 2024 Language Access Plan describes citizenship outreach toolkits in
 * English plus these 12 non-English languages. CitizenApproved uses that
 * government-defined set to prioritize language-access work instead of
 * inventing a popularity ranking of its own.
 */
export const CITIZENSHIP_OUTREACH_LANGUAGES: LanguageGuide[] = [
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'my',
    name: 'Burmese',
    nativeName: 'မြန်မာဘာသာ',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'zh-Hans',
    name: 'Chinese, Simplified',
    nativeName: '简体中文',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'zh-Hant',
    name: 'Chinese, Traditional',
    nativeName: '繁體中文',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'fa',
    name: 'Farsi',
    nativeName: 'فارسی',
    direction: 'rtl',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'ht',
    name: 'Haitian Creole',
    nativeName: 'Kreyòl ayisyen',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'ku',
    name: 'Kurdish',
    nativeName: 'Kurdî',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'so',
    name: 'Somali',
    nativeName: 'Soomaali',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    citizenApprovedPath: '/languages/es',
    officialUrl: 'https://www.uscis.gov/es/ciudadania',
  },
  {
    code: 'tl',
    name: 'Tagalog',
    nativeName: 'Tagalog',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    direction: 'ltr',
    officialUrl: USCIS_MULTILINGUAL_CENTER_URL,
  },
]
