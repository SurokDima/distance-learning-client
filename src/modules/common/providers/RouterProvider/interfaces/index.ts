import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { IRoute } from '@/modules/common/interfaces/module';

export interface IRouterProviderProps {
  routes: IRoute[];
  providers: ReactNode;
}

export interface ISortedRoutes {
  commonRoutes: IRoute[];
  privateRoutes: IRoute[];
  publicRoutes: IRoute[];
}

export type Router = ReturnType<typeof createBrowserRouter>;
