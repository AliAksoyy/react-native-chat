import {createSlice} from '@reduxjs/toolkit';
import {registerAction} from './asynActions';
import {Type, toastifyMessage} from '../../helpers/toastify';

const initialState = {
  user: null,
  loading: false,
  logined: false,
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
        console.log('payload', payload);
        state.loading = false;
        state.error = false;
        state.logined = true;
        state.user = payload.data.email;
        state.token = payload.data.token;
        toastifyMessage(
          Type.success,
          `${payload.data.email} successfully registered`,
        );
      })
      .addCase(registerAction.rejected, (state, {error}) => {
        console.log('error', error);
        state.loading = false;
        state.error = true;
        state.user = null;
        state.token = null;
        state.logined = false;

        const errorMessage =
          error instanceof Error
            ? error.message
            : error.message || 'Bir hata oluştu';
        toastifyMessage(Type.error, errorMessage);
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
