import { useAtom } from 'jotai'
import { languageAtom, themeAtom } from './atoms/app'

export const useApp = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  const [language, setLanguage] = useAtom(languageAtom)
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }
  const updateLanguage = (newLanguage: LanguageType) => {
    setLanguage(newLanguage)
  }
  return {
    theme,
    updateTheme,
    language,
    updateLanguage,
  }
}
