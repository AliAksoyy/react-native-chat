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
    try {
      const res: AxiosResponse<any> = await axiosInstance.post(
        '/auth/register',
        value,
      );
      return res.data;
    } catch (error) {
      console.log('aaa', error);
      throw error?.response.data;
    }
  });

export {registerAction};
