import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { registerUpdate, reviewerGet, reviewerRegister } from '../../../pages/api/userInfo';
import { IRegister, IReviewerRegisterUpdateType, ReviewerMutationType, ReviewerQueryType } from '../informationType';

export const REVIEWER = 'reviewer';
export function useReviewerGetQuery({ userName }: ReviewerQueryType) {
  return useQuery<IRegister>({
    queryKey: [REVIEWER, userName],
    queryFn: () => reviewerGet(),
    staleTime: 1000 * 20,
    onError: () => {
      toast.error('네트워크 문제가 발생했습니다.다시 시도 부탁드립니다.');
    },
  });
}

export function useReviewerRegisterMutate({ setModal }: ReviewerMutationType) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ job, career, techStack, introduce }: IReviewerRegisterUpdateType) => {
      return reviewerRegister({ job, career, techStack, introduce });
    },
    onSuccess: () => {
      toast.success('리뷰어 등록이 되었습니다');
      setModal(false);
      queryClient.invalidateQueries(['reviewer']);
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });
}

export function useReviewerUpdateMutate({ setModal }: ReviewerMutationType) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ job, career, techStack, introduce }: IReviewerRegisterUpdateType) => {
      return registerUpdate({ job, career, techStack, introduce });
    },
    onSuccess: () => {
      toast.success('리뷰어 정보가 업데이트 되었습니다');
      setModal(false);
      queryClient.invalidateQueries(['reviewer']);
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });
}
