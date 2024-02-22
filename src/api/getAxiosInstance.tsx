import axios from 'axios';
import {API_URI} from '@env';
import {API_URI_HOME} from '@env';
const getAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL:API_URI_HOME,
  });
  return axiosInstance;
};

export default getAxiosInstance;
