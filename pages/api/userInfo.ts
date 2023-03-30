import { IReviewerRegisterUpdateType, IUserUpdateType } from '../../components/userInfomation/informationType';
import instance from './core';

export const userInfoUpdate = async (userInfo: IUserUpdateType) => {
  const user = await instance.patch('/members/me', userInfo);
  return user;
};
// registerUpdate / reviewerRegister 부분에서 값을 반환해야 하는가??
export const registerUpdate = async (regiInfo: IReviewerRegisterUpdateType) => {
  const register = await instance.patch('/members/me/reviewer', regiInfo);
  return register.status;
};

export const reviewerRegister = async (regiInfo: IReviewerRegisterUpdateType) => {
  const register = await instance.post('/members/me/reviewer', regiInfo);
  return register.status;
};

export const userGet = async () => {
  const getData = await instance.get(`/members/me`);
  return getData.data;
};

export const reviewerGet = async () => {
  const getReviewer = await instance.get('/members/me/reviewer');
  return getReviewer.data;
};

export const reviewerStatusUpdate = async () => {
  const updateReviewerStatus = await instance.patch('/members/me/reviewer-status');
  return updateReviewerStatus;
};
