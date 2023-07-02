import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces';

export interface IRouterProviderProps {
  routes: IRoute[];
  providers: ReactNode;
}

export type SortedRoutes = {
  [K in RouteAuthType]: IRoute[];
};

export type Router = ReturnType<typeof createBrowserRouter>;
