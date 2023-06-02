// state management file
import { atom } from 'jotai';
import type { DarkMode } from '@/utils/theme';
import { getTheme, initTheme, setTheme } from '@/utils/theme';

const themeModeAtom = atom(initTheme());
export const themeAtom = atom(
  (get) => getTheme(get(themeModeAtom)),
  (get, set, newTheme: DarkMode) => {
    const realTheme = getTheme(newTheme);
    setTheme(realTheme);
    set(themeModeAtom, newTheme);
  },
);
