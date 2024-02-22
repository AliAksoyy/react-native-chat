import {AxiosError, AxiosResponse} from 'axios';
import {AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit';
import getAxiosInstance from '../../api/getAxiosInstance';

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
      console.log('RESPONSEREGİSTER', res.data);
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
      console.log('RESPONSELOGİNJ', res.data);
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

export {registerAction, loginAction};
