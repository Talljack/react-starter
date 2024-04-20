export type DarkMode = 'auto' | 'light' | 'dark';

export type RealTheme = 'dark' | 'light';

/**
 *
 */
export function initTheme(): DarkMode {
  // 1. 不支持 localStorage 直接返回
  if (typeof localStorage === 'undefined') return 'auto';

  // 2. 读取 localStorage 中的主题
  if (!('theme' in localStorage) || localStorage.theme === 'auto') return 'auto';

  // 3. 返回 dark
  if (localStorage.theme === 'dark') return 'dark';

  return 'light';
}

/**
 *
 */
export function getAutoTheme(): RealTheme {
  const hours = new Date().getHours();
  // 8 点到 18 点为白天
  const isNight = hours < 8 || hours > 18;
  if (typeof window === 'undefined') return isNight ? 'dark' : 'light';

  // 读取 media 设置
  if (isNight || window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';

  return 'light';
}

/**
 *
 * @param theme
 */
export function getTheme(theme: DarkMode) {
  if (theme === 'auto') return getAutoTheme();

  return theme;
}

/**
 *
 * @param theme
 * @param showLog
 */
export function setTheme(theme: RealTheme, showLog = true) {
  if (theme.includes('light')) {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    if (showLog) console.log('🌞 Light Mode');
  } else {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    if (showLog) console.log('🌚 Dark Mode');
  }
}
