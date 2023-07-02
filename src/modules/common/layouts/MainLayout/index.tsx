import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Layout, Menu, theme } from 'antd';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';

import { ToggleThemeButton } from '@/modules/common/components';
import { useNotification } from '@/modules/common/providers/NotificationProvider/hooks';

import { UserSkeleton, Logo, User } from './components';
import { MENU_ITEMS } from './constants';
import {
  CONTENT,
  HEADER_STYLES,
  INNER_LAYOUT_STYLES,
  LAYOUT_STYLES,
  SIDER_STYLES,
  SIDER_MENU_STYLES,
  TOGGLE_SIDER_BUTTON_STYLES,
} from './styles';

const { Header, Sider, Content } = Layout;
const { useToken } = theme;

export const MainLayout: FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const { isLoading, user, loginWithRedirect } = useAuth0();
  const notificationApi = useNotification();

  const {
    token: { colorBgContainer },
  } = useToken();

  const handleSignInButtonClick = (): void => {
    loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
    }).catch(() => {
      notificationApi.error({
        message: 'Login failed!',
      });
    });
  };

  return (
    <>
      <Layout hasSider style={LAYOUT_STYLES}>
        <Sider collapsed={isCollapsed} style={SIDER_STYLES}>
          <Logo form={isCollapsed ? 'short' : 'long'} />

          {/* TODO Update menu items selection */}
          <Menu
            mode="vertical"
            theme="dark"
            style={SIDER_MENU_STYLES}
            items={MENU_ITEMS}
          />
        </Sider>
        <Layout style={INNER_LAYOUT_STYLES(isCollapsed)}>
          <Header
            style={{
              ...HEADER_STYLES,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!isCollapsed)}
              style={TOGGLE_SIDER_BUTTON_STYLES}
            />

            {isLoading ? (
              <UserSkeleton />
            ) : user ? (
              <User />
            ) : (
              <Button type="primary" onClick={handleSignInButtonClick}>
                Sign in
              </Button>
            )}
          </Header>
          <Content
            style={{
              ...CONTENT,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      {createPortal(<ToggleThemeButton />, document.body)}
    </>
  );
};
