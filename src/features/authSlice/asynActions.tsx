import {AxiosResponse} from 'axios';
import {AsyncThunk, createAsyncThunk} from '@reduxjs/toolkit';
import getAxiosInstance from '../../api/getAxiosInstance';

const axiosInstance = getAxiosInstance();

interface RegisterActionParams {
  value: {
    email: string;
    password: string;
  };
}

const registerAction: AsyncThunk<any, RegisterActionParams, {}> =
  createAsyncThunk('registerAction', async ({value}: RegisterActionParams) => {
    console.log(value);
    try {
      const res: AxiosResponse<any> = await axiosInstance.post(
        '/auth/register',
        value,
      );
      console.log('resData', res.data);
      return res.data;
    } catch (error) {
      console.log('error', error);
    }
  });

export {registerAction};
