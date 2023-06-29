import { BodyBgColorProvider } from './BodyBgColorProvider';
import { GlobalLoaderProvider } from './GlobalLoaderProvider';
import { InitialLoaderProvider } from './InitialLoaderProvider';
import { NotificationProvider } from './NotificationProvider';
import { ThemeProvider } from './ThemeProvider';

export const commonModuleProviders = [
  { component: BodyBgColorProvider, dependsOn: [ThemeProvider] },
  { component: InitialLoaderProvider, dependsOn: [] },
  { component: ThemeProvider, dependsOn: [] },
  { component: GlobalLoaderProvider, dependsOn: [ThemeProvider] },
  { component: NotificationProvider, dependsOn: [ThemeProvider] },
];
