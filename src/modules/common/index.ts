import { IModule } from '@/interfaces';
import { Auth0Provider } from '@/modules/auth/providers/Auth0Provider';
import { BodyBgColorProvider } from '@/modules/common/providers/BodyBgColorProvider';
import { GlobalLoaderProvider } from '@/modules/common/providers/GlobalLoaderProvider';
import { InitialLoaderProvider } from '@/modules/common/providers/InitialLoaderProvider';
import { NotificationProvider } from '@/modules/common/providers/NotificationProvider';
import { StoreProvider } from '@/modules/common/providers/StoreProvider';
import { ThemeProvider } from '@/modules/common/providers/ThemeProvider';

export const commonModule: IModule = {
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
    { component: StoreProvider, dependsOn: [Auth0Provider] },
  ],
};
