import {
  UserOutlined,
  BookOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, Outlet } from 'react-router-dom';

import { ToggleThemeButton } from '@/common/components/ToggleThemeButton';
import { Logo } from '@/common/layouts/MainLayout/components/Logo';
import { User } from '@/common/layouts/MainLayout/components/User';
import { UserSkeleton } from '@/common/layouts/MainLayout/components/UserSkeleton';

const { Header, Sider, Content } = Layout;

const { useToken } = theme;

const items2: MenuProps['items'] = [
  {
    key: 'dashboard',
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <UserOutlined />,
  },
  {
    key: 'create-quiz',
    label: <Link to="/quizzes/create">Create Quiz</Link>,
    icon: <BookOutlined />,
  },
];

// TODO refactore

export const MainLayout: FC = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const { isLoading, user, loginWithRedirect } = useAuth0();
  const {
    token: { colorBgContainer },
  } = useToken();

  return (
    <>
      <Layout hasSider style={{ minHeight: '100vh' }}>
        <Sider
          collapsed={isCollapsed}
          width={200}
          style={{
            overflow: 'auto',
            userSelect: 'none',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: 200,
            minWidth: 200,
            maxWidth: 200,
          }}
        >
          <Logo form={isCollapsed ? 'short' : 'long'} />

          <Menu
            mode="vertical"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            marginLeft: isCollapsed ? 80 : 200,
            transition: 'margin 0.3s cubic-bezier(0.2, 0, 0, 1) 0s',
          }}
        >
          <Header
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: colorBgContainer,
              paddingLeft: 0,
              // transition: 'width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s',
            }}
          >
            <Button
              type="text"
              icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!isCollapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />

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
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              overflow: 'initial',
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
