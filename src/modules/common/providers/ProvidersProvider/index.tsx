import { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { IProvider, ProviderComponent } from '@/interfaces';

interface IProvidersProviderProps {
  providers: IProvider[];
}

interface IProvidersContainerProps {
  children: React.ReactNode;
  providers: ProviderComponent[];
}

const ProvidersContainer: FC<IProvidersContainerProps> = ({
  children,
  providers,
}) => {
  const Provider = providers[0];

  if (providers.length === 1) {
    return <Provider>{children}</Provider>;
  }

  return (
    <Provider>
      <ProvidersContainer providers={providers.slice(1)}>
        {children}
      </ProvidersContainer>
    </Provider>
  );
};

export const ProvidersProvider: FC<IProvidersProviderProps> = ({
  providers,
}) => {
  const sortedProviders = useMemo(
    () => performTopologicalSorting(providers),
    [providers]
  );

  return (
    <ProvidersContainer providers={sortedProviders}>
      <Outlet />
    </ProvidersContainer>
  );
};

function performTopologicalSorting(
  providers: IProvider[]
): ProviderComponent[] {
  const visited = new Set<ProviderComponent>();
  const sorted: ProviderComponent[] = [];

  const visit = (provider: IProvider): void => {
    if (visited.has(provider.component)) {
      return;
    }

    visited.add(provider.component);

    for (const dependency of provider.dependsOn) {
      const dependentProvider = providers.find(
        (p) => p.component === dependency
      );

      if (dependentProvider) {
        visit(dependentProvider);
      }
    }

    sorted.push(provider.component);
  };

  for (const provider of providers) {
    visit(provider);
  }

  return sorted;
}
