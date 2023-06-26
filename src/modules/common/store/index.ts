import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { ownApi } from '@/modules/common/store/apis/own.api';
import { authSliceReducer } from '@/modules/common/store/slices/auth';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [ownApi.reducerPath]: ownApi.reducer,
    // [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ownApi.middleware),
  // .concat(coursesApi.middleware),
});

setupListeners(store.dispatch);
