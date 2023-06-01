import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { registerUpdate, reviewerGet, reviewerRateGet, reviewerRegister } from '../../../pages/api/userInfo';
import { IRegister, IReviewerRegisterUpdateType, ReviewerMutationType } from '../informationType';
import { IReviewerScoreListResponseType } from '../../ReviewerModal/reviewerModalType';

export const REVIEWER = 'reviewer';
export function useReviewerGetQuery() {
  return useQuery<IRegister>({
    queryKey: [REVIEWER],
    queryFn: () => reviewerGet(),
    staleTime: 1000 * 20,
    suspense: true,
  });
}

export const REVIEWERRATE = 'reviewerRate';
export function useReviewerGetRateQuery({ page }: { page: number }) {
  return useQuery<IReviewerScoreListResponseType>({
    queryKey: [REVIEWERRATE, page],
    queryFn: () => reviewerRateGet(),
    staleTime: 1000 * 20,
    suspense: true,
  });
}

export function useReviewerRegisterMutate({ setModal, setRecoil }: ReviewerMutationType) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ job, career, techStack, introduction }: IReviewerRegisterUpdateType) => {
      return reviewerRegister({ job, career, techStack, introduction });
    },
    onSuccess: () => {
      toast.success('리뷰어 등록이 되었습니다');
      setModal(false);
      setRecoil((prev) => {
        return prev && { ...prev, isReviewer: true, reviewerRegister: true };
      });
      queryClient.invalidateQueries(['reviewer']);
    },
    onError: () => {
      toast.error('오류가 발생했습니다!.');
    },
  });
}

export function useReviewerUpdateMutate({ setModal }: ReviewerMutationType) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ job, career, techStack, introduction }: IReviewerRegisterUpdateType) => {
      return registerUpdate({ job, career, techStack, introduction });
    },
    onSuccess: () => {
      toast.success('리뷰어 정보가 업데이트 되었습니다');
      setModal(false);
      queryClient.invalidateQueries(['reviewer']);
    },
  });
}
