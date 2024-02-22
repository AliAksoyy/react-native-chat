import {createSlice} from '@reduxjs/toolkit';
import {registerAction} from './asynActions';

const initialState = {
  user: null,
  loading: false,
  error: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerAction.pending, (state, {payload}) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerAction.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = false;
        state.user = payload.data.email;
        state.token = payload.data.token;
      })
      .addCase(registerAction.rejected, (state, {error}) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
