import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { FC, useState } from 'react';

import { IUserAvatarProps } from '@/user/components/UserAvatar/interfaces';

import styles from './styles.module.scss';

export const UserAvatar: FC<IUserAvatarProps> = ({ src }) => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <Avatar
      icon={
        avatarError ? (
          <UserOutlined />
        ) : (
          <img
            src={src}
            alt="user"
            referrerPolicy="no-referrer"
            onError={() => setAvatarError(true)}
          />
        )
      }
      className={styles.avatar}
    />
  );
};
