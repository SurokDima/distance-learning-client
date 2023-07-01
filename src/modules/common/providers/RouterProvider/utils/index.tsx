import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';
import { IRoute } from '@/modules/common/interfaces/module';
import { ISortedRoutes } from '@/modules/common/providers/RouterProvider/interfaces';

const routeSorters: {
  [K in RouteAuthType]: (
    route: IRoute,
    sortedRoutes: ISortedRoutes
  ) => ISortedRoutes;
} = {
  [RouteAuthType.COMMON]: (route, sortedRoutes) => ({
    ...sortedRoutes,
    commonRoutes: [...sortedRoutes.commonRoutes, route],
  }),
  [RouteAuthType.PRIVATE]: (route, sortedRoutes) => ({
    ...sortedRoutes,
    privateRoutes: [...sortedRoutes.privateRoutes, route],
  }),
  [RouteAuthType.PUBLIC]: (route, sortedRoutes) => ({
    ...sortedRoutes,
    publicRoutes: [...sortedRoutes.publicRoutes, route],
  }),
};

export const sortRoutes = (routes: IRoute[]): ISortedRoutes => {
  return routes.reduce<ISortedRoutes>(
    (acc, route) => routeSorters[route.authType](route, acc),
    {
      commonRoutes: [],
      privateRoutes: [],
      publicRoutes: [],
    }
  );
};
