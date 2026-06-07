import { createContext, useContext, useEffect, useState } from 'react'

// Minimal EN/JP layer — section labels + the one-line intro. Not a full i18n.
export const dict = {
  en: {
    work: 'Work',
    about: 'About',
    gallery: 'Gallery',
    projects: 'Projects',
    contact: 'Contact',
    intro: 'A Tokyo-based developer & photographer.'
  },
  ja: {
    work: '作品',
    about: '概要',
    gallery: '写真',
    projects: '制作',
    contact: '連絡',
    intro: '東京を拠点とする開発者・写真家。'
  }
}

const LocaleContext = createContext({ lang: 'en', toggle: () => {}, t: k => k })

export function LocaleProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    try {
      const s = window.localStorage.getItem('daikie-lang')
      if (s === 'en' || s === 'ja') setLang(s)
    } catch {
      /* ignore */
    }
  }, [])
  useEffect(() => {
    try {
      window.localStorage.setItem('daikie-lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const toggle = () => setLang(l => (l === 'en' ? 'ja' : 'en'))
  const t = k => dict[lang][k] ?? dict.en[k] ?? k

  return (
    <LocaleContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
