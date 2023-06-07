import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Layout, Menu, MenuProps, Space, theme } from 'antd';
import { FC, createElement } from 'react';
import { createPortal } from 'react-dom';
import { Outlet } from 'react-router-dom';

import { ToggleThemeButton } from '@/common/components/ToggleThemeButton';
import { Logo } from '@/common/layouts/MainLayout/components/Logo';
import { User } from '@/common/layouts/MainLayout/components/User';
import { UserSkeleton } from '@/common/layouts/MainLayout/components/UserSkeleton';

const { Header, Sider, Content } = Layout;

const { useToken } = theme;

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

export const MainLayout: FC = () => {
  const { isLoading, user, loginWithRedirect } = useAuth0();
  const {
    token: { colorBgContainer },
  } = useToken();

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Space size="large">
            <Logo />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={new Array(4).fill(null).map((_, index) => {
                const key = index + 1;
                return {
                  key,
                  label: `nav ${key}`,
                };
              })}
            />
          </Space>
          {isLoading ? (
            <UserSkeleton />
          ) : user ? (
            <User />
          ) : (
            <Button
              type="primary"
              onClick={() =>
                loginWithRedirect({
                  appState: {
                    returnTo: window.location.pathname,
                  },
                })
              }
            >
              Sign in
            </Button>
          )}
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{
              background: colorBgContainer,
              userSelect: 'none',
              height: '100%',
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              items={items2}
            />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      {createPortal(<ToggleThemeButton />, document.body)}
    </>
  );
};
