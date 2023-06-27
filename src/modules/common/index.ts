import { IModule } from '@/interfaces';

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
};
