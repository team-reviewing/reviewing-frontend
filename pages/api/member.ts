import axios from 'axios';
import { UserType } from '../../components/userInfomation/informationType';
import { getAccessToken } from '../../utils/authLogic';

export const setAxiosHeaderAuth = () => {
  const access_token = getAccessToken();
  axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
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

export const logInUser = async () => {
  console.log('logInUser 실행');
  setAxiosHeaderAuth();
  const response = await axios.get('http://localhost:3000/members/me');
  const data: UserType = response.data;
  return data.imageUrl;
};

export const refreshUser = async () => {
  console.log('Refresh 실행');
  const response = await axios.post('http://localhost:3000/auth/refresh', null, { withCredentials: true });
  return response.data.access_token;
};

export const logOutUser = async () => {
  console.log('logOut 실행');
  setAxiosHeaderAuth();
  await axios.delete('http://localhost:3000/auth/logout');
};
