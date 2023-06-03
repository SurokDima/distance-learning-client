import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginSuccessPage } from '@/auth/pages/LoginSuccessPage';
import { LogoutSuccessPage } from '@/auth/pages/LogoutSuccessPage';
import { PrivateRoute } from '@/common/components/PrivateRoute';
import { HomePage } from '@/common/pages/HomePage';
import { DashboardPage } from '@/user/pages/DashboardPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/logoutSuccessful" element={<LogoutSuccessPage />} />
      <Route path="/loginSuccessful" element={<LoginSuccessPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
};

export default App;
