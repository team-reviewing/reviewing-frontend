import axios, { AxiosError } from 'axios';
import { UserType } from '../../components/userInfomation/informationType';
import { setAccessTokenInCookie } from '../../utils/authLogic';

export const setAxiosHeaderAuth = (accessToken: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const logIn = async (params: string | string[]) => {
  try {
    const response = await axios.post('/auth/login/github', { code: params });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const logOutUser = async () => {
  //setAxiosHeaderAuth(context);
  await axios.delete('http://localhost:3000/auth/logout');
};

export const logInUser = async (accessToken: string): Promise<UserType> => {
  try {
    setAxiosHeaderAuth(accessToken);
    const response = await axios.get<UserType>('http://localhost:3000/members/me');
    return response.data;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response?.status === 401) {
      const refreshAccessToken = await refreshUser();
      setAccessTokenInCookie(refreshAccessToken);
      const res = await logInUser(refreshAccessToken);
      return res;
    }
    throw error;
  }
};

export const refreshUser = async () => {
  try {
    const response = await axios.post('http://localhost:3000/auth/refresh', null, { withCredentials: true });
    return response.data.access_token;
  } catch (error) {
    const { response } = error as unknown as AxiosError;
    if (response?.status === 401) {
      throw Error;
      //추후 공통 로그인이 필요한 페이지 혹은 컴포넌트 로직 개발
    }
  }
};
