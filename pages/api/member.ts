import { IRegister, IUserInformationType, IUserType } from '../../components/UserInformation/informationType';
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

export const logInUser = async (): Promise<IUserInformationType> => {
  const response = await instance.get<IUserType>('/members/me');
  const reviewInfo = await instance.get<IRegister>('/members/me/reviewer', { withCredentials: true });
  const userInformation: IUserInformationType = {
    ...response.data,
    reviewerRegister: reviewInfo.data.career ? true : false,
  };
  return userInformation;
};
