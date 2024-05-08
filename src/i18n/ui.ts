// @ts-ignore
import SpainFlag from '@/components/icons/SpainFlag.astro'
// @ts-ignore
import UnitedStatesFlag from '@/components/icons/UnitedStatesFlag.astro'
// @ts-ignore
import ItalyFlag from '@/components/icons/ItalyFlag.astro'

import SPANISH_UI from './es.json'
import ENGLISH_UI from './en.json'
import ITALIAN_UI from './it.json'

export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: 'en',
    name: 'English',
    flag: UnitedStatesFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
  it: {
    code: 'it',
    name: 'Italiano',
    flag: ItalyFlag,
  },
}

export const defaultLang = 'en'
export const showDefaultLang = false

export const ui = {
  es: SPANISH_UI,
  en: ENGLISH_UI,
  it: ITALIAN_UI,
} as const

export const routes = {
  es: {
    experiencia: 'experiencia',
    proyectos: 'proyectos',
    'sobre-mi': 'sobre-mi',
    contacto: 'contacto',
  },
  en: {
    experiencia: 'experiencie',
    proyectos: 'projects',
    'sobre-mi': 'aobut-me',
    contacto: 'contact',
  },
  it: {
    experiencia: 'esperienza',
    proyectos: 'progetti',
    'sobre-mi': 'su-di-me',
    contacto: 'contatto',
  },
}
