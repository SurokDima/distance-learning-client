import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Space, Dropdown, MenuProps, Avatar, Typography } from 'antd';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const User: FC = () => {
  const { user, logout } = useAuth0();
  const [avatarError, setAvatarError] = useState(false);

  const items3: MenuProps['items'] = [
    {
      label: <Link to="/dashboard">Dashboard</Link>,
      icon: <UserOutlined />,
      key: '0',
    },
    {
      label: <Link to="/user/preferences">Preferences</Link>,
      icon: <SettingOutlined />,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      icon: <LogoutOutlined />,
      label: 'Logout',
      key: '3',
      danger: true,
      onClick: () => logout(),
    },
  ];

  return (
    <Dropdown menu={{ items: items3 }} trigger={['click']}>
      <Space className={styles.container} size="small">
        <Avatar
          icon={
            avatarError ? (
              <UserOutlined />
            ) : (
              <img
                src={user?.picture}
                alt="user"
                referrerPolicy="no-referrer"
                onError={() => setAvatarError(true)}
              />
            )
          }
          className={styles.avatar}
        />
        <Typography.Text>{user?.name}</Typography.Text>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};
