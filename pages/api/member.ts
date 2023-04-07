import { IRegister, UserInformationType, UserType } from '../../components/UserInformation/informationType';
import instance from './core';

export const logIn = async (params: string | string[]) => {
  try {
    const response = await instance.post('/auth/login/github', { code: params });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const logOutUser = async () => {
  await instance.delete('/auth/logout').then(() => {
    sessionStorage.removeItem('accessToken');
  });
};

export const logInUser = async (): Promise<UserInformationType> => {
  const response = await instance.get<UserType>('/members/me');
  const reviewInfo = await instance.get<IRegister>('/members/me/reviewer', { withCredentials: true });
  const userInformation: UserInformationType = {
    ...response.data,
    reviewerRegister: reviewInfo.data.career ? true : false,
  };
  return userInformation;
};
