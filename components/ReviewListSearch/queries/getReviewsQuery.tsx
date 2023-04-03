import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getReviewsRole } from '../../../pages/api/inquire';
import { IReviewDetailInfoApiPropsType } from '../../ReviewModal/reviewModalType';
import { acceptReview, refuseReview } from '../../../pages/api/inquire';
import { toast } from 'react-hot-toast';

const ROLE = 'REVIEWS';

export function useGetRoleReviews(role: boolean) {
  const stringRole = !role ? 'reviewee' : 'reviewer';
  return useQuery(['getReviews', ROLE, stringRole], () => getReviewsRole(role), {
    retry: false,
    staleTime: 1000 * 20,
  });
}

export function useAcceptReview({ reviewerId, reviewId }: IReviewDetailInfoApiPropsType) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => acceptReview({ reviewerId: reviewerId, reviewId: reviewId }),
    onSuccess: () => {
      toast.success('리뷰를 수락했습니다');
      queryClient.invalidateQueries(['getReviews', ROLE, 'reviewer']);
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });
}

export function useRefuseReview({ reviewerId, reviewId }: IReviewDetailInfoApiPropsType) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => refuseReview({ reviewerId: reviewerId, reviewId: reviewId }),
    onSuccess: () => {
      toast.success('리뷰를 거절했습니다');
      queryClient.invalidateQueries(['getReviews', ROLE, 'reviewer']);
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });
}
