import axios, { AxiosInstance, AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import {
  deleteAccessTokenInStorage,
  deleteRefreshTokenInStorage,
  getRefreshTokenInStorage,
  setAccessTokenInStorage,
  setRefreshTokenInStorage,
} from '../../../utils/authLogic';

interface IErrorResponse {
  message: string;
  code: string;
}
const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_API,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 30000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      try {
        deleteAccessTokenInStorage();
        const refreshToken = getRefreshTokenInStorage();
        const refreshResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_BACK_API}/auth/refresh`,
          {
            withCredentials: true,
          },
          {
            headers: { Authorization: `Bearer ${refreshToken}` },
          },
        );
        setAccessTokenInStorage(refreshResponse.data.accessToken);
        setRefreshTokenInStorage(refreshResponse.data.refreshToken);
        const config = error.config;
        if (!config) {
          return Promise.reject(error);
        }

        return instance.request(config);
      } catch (err) {
        deleteRefreshTokenInStorage();
        window.location.href = '/induceLogin';
      }
    } else {
      toast.error((error.response?.data as IErrorResponse)?.message);
      return Promise.reject(error);
    }
  },
);

export default instance;
