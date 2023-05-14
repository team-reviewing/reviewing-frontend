import { IReviewDetailInfoApiPropsType } from '../../components/ReviewModal/reviewModalType';
import { ReviewEvaluationRegisterDataType } from '../../components/ReviewRate/reviewRateType';
import instance from './core';

export const getReviewRateInfo = async ({ reviewId }: Pick<IReviewDetailInfoApiPropsType, 'reviewId'>) => {
  const response = await instance.get(`/evaluations/${reviewId}`);
  return response.data;
};

export const postReviewRate = async ({ reviewId, reviewerId, score, content }: ReviewEvaluationRegisterDataType) => {
  await instance.post(
    `/reviewers/${reviewerId}/evaluations`,
    { reviewId: reviewId, score: score, content: content },
    { withCredentials: true },
  );
};
