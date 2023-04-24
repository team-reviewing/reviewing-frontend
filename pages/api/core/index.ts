import axios, { AxiosInstance, AxiosError } from 'axios';

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
        const refreshResponse = await instance.post('/auth/refresh', null, { withCredentials: true });
        sessionStorage.setItem('accessToken', refreshResponse.data.accessToken);
        const config = error.config;
        if (!config) {
          return Promise.reject(error);
        }
        return instance.request(config);
      } catch (err) {
        window.location.href = '/induceLogin';
      }
    } else {
      return Promise.reject(error);
    }
  },
);

export default instance;
