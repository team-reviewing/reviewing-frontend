import { IReviewerRegisterUpdateType, IUserUpdateType } from '../../components/UserInformation/informationType';
import instance from './core';

export const userInfoUpdate = async (userInfo: IUserUpdateType) => {
  const user = await instance.patch('/members/me', userInfo, { withCredentials: true });
  return user;
};

export const registerUpdate = async (regiInfo: IReviewerRegisterUpdateType) => {
  const register = await instance.patch('/members/me/reviewer', regiInfo, { withCredentials: true });
  return register.status;
};

export const reviewerRegister = async (regiInfo: IReviewerRegisterUpdateType) => {
  const register = await instance.post('/members/me/reviewer', regiInfo, { withCredentials: true });
  return register.status;
};

export const userGet = async () => {
  const getData = await instance.get(`/members/me`, { withCredentials: true });
  return getData.data;
};

export const reviewerGet = async () => {
  const getReviewer = await instance.get('/members/me/reviewer', { withCredentials: true });
  return getReviewer.data;
};

export const reviewerStatusUpdate = async () => {
  const updateReviewerStatus = await instance.patch('/members/me/reviewer-status', null, { withCredentials: true });
  return updateReviewerStatus;
};

export const reviewerRateGet = async ({ page, size }: { page: number; size: number }) => {
  const getReviewerRate = await instance.get('/evaluations/me', {
    params: { page: page, size: size },
    withCredentials: true,
  });
  return getReviewerRate.data;
};
