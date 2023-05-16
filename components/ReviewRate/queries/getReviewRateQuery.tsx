import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { getReviewRateInfo, postReviewRate } from '../../../pages/api/reviewRate';
import { ROLE } from '../../ReviewListSearch/queries/getReviewsQuery';
import { IReviewDetailInfoApiPropsType } from '../../ReviewModal/reviewModalType';
import { IReviewEvaluationDataType, ReviewEvaluationRegisterMutateType } from '../reviewRateType';

export function useReviewRateModalGetQuery({ reviewId }: Pick<IReviewDetailInfoApiPropsType, 'reviewId'>) {
  return useQuery<IReviewEvaluationDataType>({
    queryKey: ['reviewRate', reviewId],
    queryFn: () => getReviewRateInfo({ reviewId }),
    staleTime: 1000 * 20,
    suspense: true,
    onError: () => {
      toast.error('요청이 실패하였습니다.');
    },
  });
}

export function useReviewRateRegisterMutation({
  reviewId,
  reviewerId,
  score,
  content,
  closeHandler,
}: ReviewEvaluationRegisterMutateType) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => postReviewRate({ reviewId, reviewerId, score, content }),
    onSuccess: () => {
      toast.success('평가가 반영되었습니다.');
      queryClient.invalidateQueries(['getReviews', ROLE, 'reviewee']);
      queryClient.invalidateQueries(['reviewRate', reviewId]);
      closeHandler();
    },
    onError: () => {
      toast.error('에러가 발생했습니다.');
    },
  });
}
