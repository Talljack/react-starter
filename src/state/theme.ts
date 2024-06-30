import { useAtom } from 'jotai'
import { themeAtom } from './atoms/theme'

export const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom)
  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }
  return {
    theme,
    updateTheme,
  }
}
