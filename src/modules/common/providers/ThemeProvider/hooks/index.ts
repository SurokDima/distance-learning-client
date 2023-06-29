import { useContext } from 'react';

import { ThemeContext } from '@/modules/common/providers/ThemeProvider/contexts';
import { IThemeContextType } from '@/modules/common/providers/ThemeProvider/interfaces';

export const useTheme = (): IThemeContextType => useContext(ThemeContext);
