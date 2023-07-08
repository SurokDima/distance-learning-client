import { AnyAction } from '@reduxjs/toolkit';
import { ComponentType, ReactNode, Reducer } from 'react';
import { RouteObject } from 'react-router-dom';

import { RouteAuthType } from '@/modules/common/enums/routeAuthTypes';

export type IRoute = RouteObject & {
  authType: RouteAuthType;
  layout: ComponentType;
};

export type ProviderComponent = ComponentType<{ children: ReactNode }>;

export interface IProvider {
  component: ProviderComponent;
  dependsOn: ProviderComponent[];
}
export interface IModule {
  routes?: IRoute[];
  reducers?: Record<string, Reducer<any, AnyAction>>;
}

export type IRootModule = Required<IModule>;
