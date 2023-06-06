import { useQuery } from '@tanstack/react-query';
import { getReviewerDetail, getReviewerScoreList } from '../../../pages/api/reviewerDetail';

export const ROLE = 'REVIEWS';

export function useGetReviewerDetailInfo({ reviewerId }: { reviewerId: number }) {
  return useQuery(['getReviewerDetailInfo', reviewerId], () => getReviewerDetail({ reviewerId: reviewerId }), {
    retry: false,
    staleTime: 1000 * 20,
  });
}

export function useGetReviewerScoreList({ reviewerId, page }: { reviewerId: number; page: number }) {
  return useQuery(['reviewer', 'score', reviewerId, page], () => getReviewerScoreList({ size: 3, page, reviewerId }), {
    retry: false,
    staleTime: 1000 * 20,
  });
}
