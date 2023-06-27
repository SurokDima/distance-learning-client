import { RouteObject } from 'react-router-dom';

export type IRoute = RouteObject & {
  authType: 'public' | 'private' | 'common';
};

export interface IModule {
  routes?: IRoute[];
}

export type IRootModule = Required<IModule>;
