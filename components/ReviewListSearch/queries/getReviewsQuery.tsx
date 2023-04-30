import { useMutation, useQuery } from '@tanstack/react-query';
import { getReviewsRole } from '../../../pages/api/inquire';
import { toast } from 'react-hot-toast';
import { IGetReivewWithRoleType, IReviewModalMutateType } from '../ReviewListType';

export const ROLE = 'REVIEWS';

export function useGetRoleReviews({ role, status }: IGetReivewWithRoleType) {
  const stringRole = !role ? 'reviewee' : 'reviewer';
  return useQuery(['getReviews', ROLE, stringRole, status], () => getReviewsRole({ role: role, status: status }), {
    retry: false,
    staleTime: 1000 * 20,
  });
}

export function useReviewMutation({ mutationFn, onSuccess }: IReviewModalMutateType) {
  return useMutation({
    mutationFn: mutationFn,
    onSuccess: onSuccess,
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });
}
