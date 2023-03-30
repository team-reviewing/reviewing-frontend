import { IReviewsType } from '../../components/ReviewListSearch/ReviewListType';
import instance from './core';

export const getReviewsRole = async (role: boolean) => {
  const params = !role ? { role: 'reviewee' } : { role: 'reviewer' };
  const response = await instance.get<IReviewsType>('/reviews', {
    withCredentials: true,
    params: params,
  });
  return response.data;
};
