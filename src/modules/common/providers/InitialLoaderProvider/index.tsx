import { FC, useEffect } from 'react';

import { IInitialLoaderProviderProps } from '@/modules/common/providers/InitialLoaderProvider/interfaces';

export const InitialLoaderProvider: FC<IInitialLoaderProviderProps> = ({
  children,
}) => {
  useEffect(() => {
    const globalLoader =
      document.querySelector<HTMLDivElement>('.loaderContainer');
    if (!globalLoader) return;

    globalLoader.addEventListener('transitionend', () => {
      globalLoader.style.display = 'none';
    });

    setTimeout(() => (globalLoader.style.opacity = '0'));
  }, []);

  return <>{children}</>;
};
