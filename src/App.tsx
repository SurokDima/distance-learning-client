import { theme } from 'antd';
import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginSuccessPage } from '@/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/auth/pages/LogoutSuccessPage';
import { PrivateRoute } from '@/common/components/PrivateRoute';
import { MainLayout } from '@/common/layouts/MainLayout';
import { ErrorPage, ErrorPageView } from '@/common/pages/ErrorPage';
import { HomePage } from '@/common/pages/HomePage';
import { DashboardPage } from '@/user/pages/DashboardPage';

const App: FC = () => {
  const {
    token: { colorBgBase },
  } = theme.useToken();

  useEffect(() => {
    document.body.style.backgroundColor = colorBgBase;
  }, [colorBgBase]);

  useEffect(() => {
    const globalLoader =
      document.querySelector<HTMLDivElement>('.loaderContainer');
    if (!globalLoader) return;

    globalLoader.addEventListener('transitionend', () => {
      globalLoader.style.display = 'none';
    });

    setTimeout(() => (globalLoader.style.opacity = '0'));
  }, []);

  return (
    <Routes>
      <Route element={<ErrorPage />}>
        <Route element={<MainLayout />} errorElement={<ErrorPageView />}>
          <Route element={<ErrorPage />}>
            <Route path="/logoutSuccessful" element={<LogoutSuccessPage />} />
            <Route path="/loginSuccessful" element={<LoginSuccessPage />} />
            <Route
              path="/"
              errorElement={<ErrorPageView />}
              element={<HomePage />}
            />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
