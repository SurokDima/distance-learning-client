import { IModule } from '@/interfaces';
import { BodyBgColorProvider } from '@/modules/common/providers/BodyBgColorProvider';
import { GlobalLoaderProvider } from '@/modules/common/providers/GlobalLoaderProvider';
import { InitialLoaderProvider } from '@/modules/common/providers/InitialLoaderProvider';
import { NotificationProvider } from '@/modules/common/providers/NotificationProvider';
import { ThemeProvider } from '@/modules/common/providers/ThemeProvider';

export const commonModule = {
  routes: [
    {
      path: '/',
      lazy: async () => {
        const { HomePage } = await import('@/modules/common/pages/HomePage');
        return { Component: HomePage };
      },
      authType: 'common',
    },
  ],
  providers: [
    { component: BodyBgColorProvider, dependsOn: [ThemeProvider] },
    { component: InitialLoaderProvider, dependsOn: [] },
    { component: ThemeProvider, dependsOn: [] },
    { component: GlobalLoaderProvider, dependsOn: [ThemeProvider] },
    { component: NotificationProvider, dependsOn: [ThemeProvider] },
  ],
  reducers: {},
} satisfies IModule;
