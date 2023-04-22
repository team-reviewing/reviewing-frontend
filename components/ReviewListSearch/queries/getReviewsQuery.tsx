import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getReviewsRole } from '../../../pages/api/inquire';
import { acceptReview, refuseReview } from '../../../pages/api/inquire';
import { toast } from 'react-hot-toast';
import { IGetReivewWithRoleType, IStatusType } from '../ReviewListType';
import { IAcceptRefuseQueryType } from '../../ReviewModal/reviewModalType';

const ROLE = 'REVIEWS';

export function useGetRoleReviews({ role, status }: IGetReivewWithRoleType) {
  const stringRole = !role ? 'reviewee' : 'reviewer';
  return useQuery(['getReviews', ROLE, stringRole, status], () => getReviewsRole({ role: role, status: status }), {
    retry: false,
    staleTime: 1000 * 20,
  });
}

export function useAcceptReview({ reviewerId, reviewId, status }: IAcceptRefuseQueryType<IStatusType>) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => acceptReview({ reviewerId: reviewerId, reviewId: reviewId }),
    onSuccess: () => {
      toast.success('리뷰를 수락했습니다');
      queryClient.invalidateQueries(['getReviews', ROLE, 'reviewer', status]);
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });
}

export function useRefuseReview({ reviewerId, reviewId, status }: IAcceptRefuseQueryType<IStatusType>) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => refuseReview({ reviewerId: reviewerId, reviewId: reviewId }),
    onSuccess: () => {
      toast.success('리뷰를 거절했습니다');
      queryClient.invalidateQueries(['getReviews', ROLE, 'reviewer', status]);
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });
}
