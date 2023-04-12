import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { registerUpdate, reviewerRegister } from '../../pages/api/userInfo';
import { IModalPropsType, IReviewerRegisterUpdateType } from './informationType';

export function useReviewerRegisterMutate({ setModal }: IModalPropsType) {
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

export function useReviewerUpdateMutate({ setModal }: IModalPropsType) {
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
