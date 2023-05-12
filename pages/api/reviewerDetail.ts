import {
  IReviewerModalResponseType,
  IReviewerScoreListResponseType,
} from '../../components/ReviewerModal/reviewerModalType';
import instance from './core';

export const getReviewerDetail = async ({ reviewerId }: { reviewerId: number }) => {
  try {
    const reviewerDetailResponse = await instance.get<IReviewerModalResponseType>(`/reviewers/${reviewerId}`);
    return reviewerDetailResponse.data;
  } catch (error) {
    console.error(error);
  }
};

export const getReviewerScoreList = async ({
  reviewerId,
  size,
  page,
}: {
  reviewerId: number;
  size: number;
  page: number;
}) => {
  try {
    const reviewerScoreList = await instance.get<IReviewerScoreListResponseType>(
      `/reviewers/${reviewerId}/evaluations`,
      {
        params: {
          size: size,
          page: page,
        },
      },
    );
    return reviewerScoreList.data;
  } catch (error) {
    console.error(error);
  }
};
