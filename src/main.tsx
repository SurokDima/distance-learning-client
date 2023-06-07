import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from '@/auth/providers/Auth0Provider/index.tsx';
import { LoginSuccessMessageProvider } from '@/auth/providers/LoginSuccessMessageProvider/index.tsx';
import { GlobalLoaderProvider } from '@/common/providers/GlobalLoaderProvider/index.tsx';
import { NotificationProvider } from '@/common/providers/NotificationProvider/index.tsx';
import { StoreProvider } from '@/common/providers/StoreProvider/index.tsx';
import { ThemeProvider } from '@/common/providers/ThemeProvider/index.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <GlobalLoaderProvider>
          <NotificationProvider>
            <Auth0Provider>
              <StoreProvider>
                <LoginSuccessMessageProvider>
                  <App />
                </LoginSuccessMessageProvider>
              </StoreProvider>
            </Auth0Provider>
          </NotificationProvider>
        </GlobalLoaderProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
