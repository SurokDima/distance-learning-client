import { ComponentType } from 'react';

import { IRoute } from '@/modules/common/interfaces/module';

export const sortRoutesByLayout = (
  routes: IRoute[]
): Map<ComponentType, IRoute[]> => {
  return routes.reduce((acc, route) => {
    acc.set(route.layout, [...(acc.get(route.layout) ?? []), route]);
    return acc;
  }, new Map<ComponentType, IRoute[]>());
};
