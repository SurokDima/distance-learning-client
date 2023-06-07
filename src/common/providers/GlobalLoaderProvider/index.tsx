import { Spin, theme } from 'antd';
import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IGlobalLoaderProviderProps } from '@/common/providers/GlobalLoaderProvider/interfaces';

import styles from './styles.module.scss';

// TODO finish it or delete
export const GlobalLoaderProvider: FC<IGlobalLoaderProviderProps> = ({
  children,
}) => {
  const {
    token: { colorBgBase },
  } = theme.useToken();

  const [isLoaderShown, setIsLoaderShown] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsLoaderShown(false));
  }, []);

  return (
    <>
      {children}
      {isLoaderShown &&
        createPortal(
          <div className={styles.container} style={{ background: colorBgBase }}>
            <Spin size="large" />
          </div>,
          document.body
        )}
    </>
  );
};
