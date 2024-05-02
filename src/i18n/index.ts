import english from './en.json'
import spanish from './es.json'

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}

export const getI18N = ({ currentLocale }: { currentLocale: 'es' | 'es' }) => {
    if (currentLocale === LANGUAGES.SPANISH) {
        return spanish
    }
    if (currentLocale === LANGUAGES.ENGLISH) {
        return english
    }
    return english
}