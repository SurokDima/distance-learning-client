import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from '@/auth/providers/Auth0Provider/index.tsx';
import { LoginSuccessMessageProvider } from '@/auth/providers/LoginSuccessMessageProvider/index.tsx';
import { StoreProvider } from '@/common/providers/StoreProvider/index.tsx';

import App from './App.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider>
        <StoreProvider>
          <LoginSuccessMessageProvider>
            <App />
          </LoginSuccessMessageProvider>
        </StoreProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
