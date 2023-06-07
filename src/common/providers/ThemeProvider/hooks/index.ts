import { useContext } from 'react';

import { ThemeContext } from '@/common/providers/ThemeProvider/contexts';
import { IThemeContextType } from '@/common/providers/ThemeProvider/interfaces';

export const useTheme = (): IThemeContextType => useContext(ThemeContext);
