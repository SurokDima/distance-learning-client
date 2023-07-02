import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { rootModule } from '@/modules';
import {
  Auth0Provider,
  LoginSuccessMessageProvider,
} from '@/modules/auth/providers';
import {
  InitialLoaderProvider,
  ThemeProvider,
  BodyBgColorProvider,
  GlobalLoaderProvider,
  NotificationProvider,
  StoreProvider,
  RouterProvider,
} from '@/modules/common/providers';

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
