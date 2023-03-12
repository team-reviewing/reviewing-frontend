import axios from 'axios';
import { IReviewerRegisterUpdateType, IUserUpdateType } from '../../components/userInfomation/informationType';

export const userInfoUpdate = async (userInfo: IUserUpdateType) => {
  const user = await axios.patch('http://localhost:3000/members/me', userInfo);
  return user;
};
// registerUpdate / reviewerRegister 부분에서 값을 반환해야 하는가??
export const registerUpdate = async (regiInfo: IReviewerRegisterUpdateType) => {
  const register = await axios.patch('http://localhost:3000/members/me/reviewer', regiInfo);
  return register;
};

export const reviewerRegister = async (regiInfo: IReviewerRegisterUpdateType) => {
  const register = await axios.post('http://localhost:3000/members/me/reviewer', regiInfo);
  return register;
};

export const userGet = async () => {
  const getData = await axios.get(`http://localhost:3000/members/me`);
  return getData.data;
};

export const reviewerGet = async () => {
  const getReviewer = await axios.get('http://localhost:3000/members/me/reviewer');
  return getReviewer.data;
};

export const reviewerStatusUpdate = async () => {
  const updateReviewerStatus = await axios.patch('http://localhost:3000/members/me/reviewer-status');
  return updateReviewerStatus;
};
