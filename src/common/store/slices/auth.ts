import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IAuthSliceState {
  accessToken: string | null;
}

const initialState: IAuthSliceState = {
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
  },
});

export const { setAccessToken } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
