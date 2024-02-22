import axios from 'axios';
import {API_URI} from '@env';
const getAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: API_URI,
  });
  return axiosInstance;
};

export default getAxiosInstance;
