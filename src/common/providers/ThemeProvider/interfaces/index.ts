export interface IThemeProviderProps {
  children: React.ReactNode;
}

export interface IThemeContextType {
  theme: 'DARK' | 'LIGHT';
  toggleTheme: (() => void) | null;
  setTheme: ((theme: 'DARK' | 'LIGHT') => void) | null;
}
