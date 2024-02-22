import axios from 'axios';

const getAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.45:5000',
  });
  return axiosInstance;
};

export default getAxiosInstance;
