import { theme } from 'antd';
import type { ThemeConfig } from 'antd';

type ThemeConfigParams = ThemeConfig | ((theme: ThemeConfig) => ThemeConfig);

export function useTheme(): [ThemeConfig, (theme: ThemeConfigParams) => void] {
  const userTheme: ThemeConfig = {
    token: {
      colorPrimary: '#4fb233',
    },
    algorithm: theme.defaultAlgorithm,
  };
  const setUserTheme = (theme: ThemeConfigParams) => {
    if (typeof theme === 'function') {
      userTheme.algorithm = theme(userTheme).algorithm;
    } else {
      userTheme.algorithm = theme.algorithm;
    }
  };
  return [userTheme, setUserTheme];
}
