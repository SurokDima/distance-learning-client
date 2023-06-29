import { AnyAction } from '@reduxjs/toolkit';
import { ComponentType, ReactNode, Reducer } from 'react';
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
  reducers?: Record<string, Reducer<any, AnyAction>>;
}

export type IRootModule = Required<IModule>;
