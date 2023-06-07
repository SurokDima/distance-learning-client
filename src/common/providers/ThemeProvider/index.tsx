import { ConfigProvider, theme } from 'antd';
import { FC, useCallback, useState } from 'react';

import { ThemeContext } from '@/common/providers/ThemeProvider/contexts';
import { IThemeProviderProps } from '@/common/providers/ThemeProvider/interfaces';

const { darkAlgorithm, defaultAlgorithm } = theme;

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'DARK' | 'LIGHT'>('DARK');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'DARK' ? 'LIGHT' : 'DARK'));
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'DARK' ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ConfigProvider>
  );
};
