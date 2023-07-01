import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { rootModule } from '@/modules';
import { Auth0Provider } from '@/modules/auth/providers/Auth0Provider';
import { LoginSuccessMessageProvider } from '@/modules/auth/providers/LoginSuccessMessageProvider';
import { BodyBgColorProvider } from '@/modules/common/providers/BodyBgColorProvider';
import { GlobalLoaderProvider } from '@/modules/common/providers/GlobalLoaderProvider';
import { InitialLoaderProvider } from '@/modules/common/providers/InitialLoaderProvider';
import { NotificationProvider } from '@/modules/common/providers/NotificationProvider';
import { RouterProvider } from '@/modules/common/providers/RouterProvider';
import { StoreProvider } from '@/modules/common/providers/StoreProvider';
import { ThemeProvider } from '@/modules/common/providers/ThemeProvider';

const Providers: FC = () => {
  return (
    <InitialLoaderProvider>
      <ThemeProvider>
        <BodyBgColorProvider>
          <GlobalLoaderProvider>
            <NotificationProvider>
              <Auth0Provider>
                <StoreProvider>
                  <LoginSuccessMessageProvider>
                    <Outlet />
                  </LoginSuccessMessageProvider>
                </StoreProvider>
              </Auth0Provider>
            </NotificationProvider>
          </GlobalLoaderProvider>
        </BodyBgColorProvider>
      </ThemeProvider>
    </InitialLoaderProvider>
  );
};

const App: FC = () => {
  return (
    <RouterProvider providers={<Providers />} routes={rootModule.routes} />
  );
};

export default App;
