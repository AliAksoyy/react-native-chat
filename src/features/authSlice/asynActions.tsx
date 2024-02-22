import {AxiosError, AxiosResponse} from 'axios';
import {AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit';
import getAxiosInstance from '../../api/getAxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

const axiosInstance = getAxiosInstance();

interface RegisterActionParams {
  value: {
    email: string;
    password: string;
  };
}
interface LoginActionParams {
  value: {
    email: string;
    password: string;
  };
}

const registerAction: AsyncThunk<any, RegisterActionParams, {}> =
  createAsyncThunk('registerAction', async ({value}: RegisterActionParams) => {
    try {
      const res: AxiosResponse<any> = await axiosInstance.post(
        '/auth/register',
        value,
      );

      return res.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw error.response?.data;
      } else {
        console.error('Beklenmeyen bir hata oluştu');
      }
    }
  });

const loginAction: AsyncThunk<any, LoginActionParams, {}> = createAsyncThunk(
  'loginAction',
  async ({value}: LoginActionParams) => {
    try {
      const res: AxiosResponse<any> = await axiosInstance.post(
        '/auth/login',
        value,
      );
      return res.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw error.response?.data;
      } else {
        console.error('Beklenmeyen bir hata oluştu');
      }
    }
  },
);

const getProfileAction = createAsyncThunk('getProfileAction', async () => {
  const res: AxiosResponse<any> = await axiosInstance.get('/auth/getProfile');
  return res.data;
});

export {registerAction, loginAction, getProfileAction};
