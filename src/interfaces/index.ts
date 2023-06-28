import { ComponentType, ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export type IRoute = RouteObject & {
  authType: 'public' | 'private' | 'common';
};

export type ProviderComponent = ComponentType<{ children: ReactNode }>;

export interface IProvider {
  component: ProviderComponent;
  dependsOn: ProviderComponent[];
}
export interface IModule {
  routes?: IRoute[];
  providers?: IProvider[];
}

export type IRootModule = Required<IModule>;
