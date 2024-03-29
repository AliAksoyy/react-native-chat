import {createSlice} from '@reduxjs/toolkit';
import {
  getProfileAction,
  loginAction,
  logoutAction,
  registerAction,
} from './asynActions';
import {Type, toastifyMessage} from '../../helpers/toastify';
import {storageSetToken, storageClearToken} from '../../utils/setToken';

const initialState = {
  user: null,
  loading: false,
  logined: false,
  error: false,
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
        state.logined = true;
        state.user = payload.data.email;
        storageSetToken(payload.token);
        toastifyMessage(
          Type.success,
          `${payload.data.email} successfully registered`,
        );
      })
      .addCase(registerAction.rejected, (state, {error}) => {
        state.loading = false;
        state.error = true;
        state.user = null;
        state.logined = false;

        const errorMessage =
          error instanceof Error
            ? error.message
            : error.message || 'Bir hata oluştu';
        toastifyMessage(Type.error, errorMessage);
      });
    builder
      .addCase(loginAction.pending, (state, {payload}) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginAction.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = false;
        state.logined = true;
        state.user = payload.data.email;
        storageSetToken(payload.token);
        toastifyMessage(
          Type.success,
          `${payload.data.email} successfully logined`,
        );
      })
      .addCase(loginAction.rejected, (state, {error}) => {
        state.loading = false;
        state.error = true;
        state.user = null;
        state.logined = false;

        if (error && error.message) {
          toastifyMessage(Type.error, error.message);
        }
      });
    builder
      .addCase(getProfileAction.pending, (state, {payload}) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProfileAction.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = false;
        state.logined = true;
        state.user = payload.data?.email;
      })
      .addCase(getProfileAction.rejected, (state, {error}) => {
        state.loading = false;
        state.error = true;

        if (error && error.message) {
          toastifyMessage(Type.error, error.message);
        }
      });
    builder.addCase(logoutAction.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.error = false;
      state.logined = false;
      state.user = null;
      storageClearToken();
      toastifyMessage(Type.success, payload.data);
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
