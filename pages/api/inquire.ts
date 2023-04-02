import { IReviewsType } from '../../components/ReviewListSearch/ReviewListType';
import { IReviewDetailInfoApiPropsType, IReviewModalApiDetailType } from '../../components/ReviewModal/reviewModalType';
import instance from './core';

export const getReviewsRole = async (role: boolean) => {
  const params = !role ? { role: 'reviewee' } : { role: 'reviewer' };
  const response = await instance.get<IReviewsType>('/reviews', {
    withCredentials: true,
    params: params,
  });
  return response.data;
};

export const getReviewDetailInfo = async ({ reviewerId, reviewId }: IReviewDetailInfoApiPropsType) => {
  const response = await instance.get<IReviewModalApiDetailType>(`/reviewers/${reviewerId}/reviews/${reviewId}`, {
    withCredentials: true,
  });
  return response.data;
};

export const acceptReview = async ({ reviewerId, reviewId }: IReviewDetailInfoApiPropsType) => {
  await instance.patch(`/reviewers/${reviewerId}/reviews/${reviewId}/status`, null, { withCredentials: true });
};

export const refuseReview = async ({ reviewerId, reviewId }: IReviewDetailInfoApiPropsType) => {
  await instance.delete(`/reviewers/${reviewerId}/reviews/${reviewId}`, { withCredentials: true });
};
