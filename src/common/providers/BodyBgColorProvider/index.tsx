import { theme } from 'antd';
import { FC, useEffect } from 'react';

import { IBodyBgColorProviderProps } from '@/common/providers/BodyBgColorProvider/interfaces';

export const BodyBgColorProvider: FC<IBodyBgColorProviderProps> = ({
  children,
}) => {
  const {
    token: { colorBgBase },
  } = theme.useToken();

  useEffect(() => {
    document.body.style.backgroundColor = colorBgBase;
  }, [colorBgBase]);

  return <>{children}</>;
};
