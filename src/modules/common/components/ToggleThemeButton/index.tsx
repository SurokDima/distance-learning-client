import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { FC } from 'react';

import { useTheme } from '@/modules/common/providers/ThemeProvider/hooks';

import styles from './styles.module.scss';

export const ToggleThemeButton: FC = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={styles.themeButton}
      onClick={() => toggleTheme?.()}
      icon={theme === 'DARK' ? <BulbOutlined /> : <BulbFilled />}
    />
  );
};
