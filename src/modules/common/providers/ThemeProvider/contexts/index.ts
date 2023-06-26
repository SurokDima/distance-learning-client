import { createContext } from 'react';

import { IThemeContextType } from '@/modules/common/providers/ThemeProvider/interfaces';

export const ThemeContext = createContext<IThemeContextType>({
  theme: 'DARK',
  toggleTheme: null,
  setTheme: null,
});
