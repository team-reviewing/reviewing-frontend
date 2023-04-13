import { useQuery } from '@tanstack/react-query';
import { getReviewDetailInfo } from '../../../pages/api/inquire';
import { IReviewDetailInfoApiPropsType, IReviewModalApiDetailType } from '../reviewModalType';

export function useReviewModalGetQuery({ reviewId, reviewerId }: IReviewDetailInfoApiPropsType) {
  return useQuery<IReviewModalApiDetailType>({
    queryKey: ['modalDetail', reviewId],
    queryFn: () => getReviewDetailInfo({ reviewerId, reviewId }),
    staleTime: 1000 * 20,
  });
}
