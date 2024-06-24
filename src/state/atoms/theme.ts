import { atomWithStorage } from 'jotai/utils'

export const themeAtom = atomWithStorage<Theme>('app_theme', 'system')
