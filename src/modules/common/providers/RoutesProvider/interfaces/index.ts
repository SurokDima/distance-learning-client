import { createBrowserRouter } from 'react-router-dom';

import { IRoute } from '@/interfaces';

export interface IRouterProviderProps {
  routes: IRoute[];
}

export interface ISortedRoutes {
  commonRoutes: IRoute[];
  privateRoutes: IRoute[];
  publicRoutes: IRoute[];
}

export type Router = ReturnType<typeof createBrowserRouter>;
