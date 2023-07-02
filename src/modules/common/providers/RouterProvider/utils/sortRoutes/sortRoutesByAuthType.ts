import { IRoute } from '@/modules/common/interfaces';
import { SortedRoutes } from '@/modules/common/providers/RouterProvider/interfaces';

export const sortRoutesByAuthType = (routes: IRoute[]): SortedRoutes => {
  const initialValue = {} as SortedRoutes;

  return routes.reduce<SortedRoutes>(
    (acc, route) => ({
      ...acc,
      [route.authType]: [...(acc[route.authType] ?? []), route],
    }),
    initialValue
  );
};
