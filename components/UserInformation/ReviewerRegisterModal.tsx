import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { registerUpdate, reviewerGet, reviewerRegister } from '../../pages/api/userInfo';
import {
  IHookFormType,
  IModalPropsType,
  IRegister,
  IRegisterMutationProps,
  IReviewSubmitType,
} from './informationType';
import cancel from '../../styles/images/cancel.svg';
import Loading from '../Commons/Loading';
import HookFormDropDown from './HookFormDropDown';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function ReviewerRegisterModal({ setModal }: IModalPropsType) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<IRegister>({
    queryKey: ['reviewer'],
    queryFn: () => reviewerGet(),
    staleTime: 1000 * 20,
  });

  const { mutate } = useMutation({
    mutationFn: ({ register, mutationFnCb }: IRegisterMutationProps) => {
      return mutationFnCb(register);
    },
    onSuccess: () => {
      toast.success('정보가 업데이트 되었습니다');
      setModal(false);
      queryClient.invalidateQueries(['reviewer']);
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });

  const { register, setValue, watch, handleSubmit } = useForm<IHookFormType>({
    defaultValues: {
      job: '',
      career: '',
      etc: '',
      introduce: '',
      techStack: [],
    },
  });

  useEffect(() => {
    if (data) {
      setValue('job', data.job);
      setValue('career', data.career);
      setValue('introduce', data.introduce);
      setValue('techStack', data.techStack);
    }
  }, [data]);

  useEffect(() => {
    register('job', { required: true });
    register('career', { required: true });
    register('introduce', { required: true });
    register('techStack', { required: true });
  }, []);

  const reviewerSubmit = ({ job, career, introduce, techStack, etc, mutationFn }: IReviewSubmitType) => {
    mutate({
      register: {
        job: job === '기타' ? etc : job,
        career: career,
        techStack: techStack.map((el) => el.id),
        introduce: introduce,
      },
      mutationFnCb: mutationFn,
    });
  };

  const submitValidationHandler = () => {
    toast.error('전부 필수 내용입니다.');
  };

  const submitHandler = ({ job, career, etc, introduce, techStack }: IHookFormType) => {
    if (job === '기타' && etc === '') {
      toast.error('전부 필수 내용입니다.');
    } else {
      if (data && data.job) {
        reviewerSubmit({ job, career, etc, introduce, techStack, mutationFn: registerUpdate });
      } else {
        reviewerSubmit({ job, career, etc, introduce, techStack, mutationFn: reviewerRegister });
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-b-modal" onClick={() => setModal((prev) => !prev)} />
      <div className="relative p-7 w-[32rem] h-[38rem] flex rounded-radius-m z-20 bg-c-white msm:w-11/12">
        {data && (
          <form
            className="relative flex flex-col w-full h-full"
            onSubmit={handleSubmit(submitHandler, submitValidationHandler)}>
            <div className="flex items-center justify-center">
              <div className="text-2xl msm:text-xl">리뷰어 정보</div>
              <div className="absolute right-0 cursor-pointer">
                <Image width={15} height={15} src={cancel} alt="cancel" onClick={() => setModal((prev) => !prev)} />
              </div>
            </div>
            <div className="flex flex-col h-full space-y-6 overflow-y-auto">
              <HookFormDropDown
                dropList={data.positionList}
                name="직무"
                ment="직무를 선택해주세요"
                setValue={setValue}
                regiId="job"
                watch={watch}
                register={register}
              />
              <HookFormDropDown
                dropList={data.careerList}
                name="경력"
                ment="경력을 선택해주세요"
                setValue={setValue}
                regiId="career"
                watch={watch}
              />
              <HookFormDropDown
                dropList={data.techList}
                name="기술 스택"
                ment="스킬을 선택해주세요"
                setValue={setValue}
                regiId="techStack"
                watch={watch}
              />
              <div>
                <span className="flex flex-col items-start w-full">소개글</span>
                <textarea
                  className="w-full h-20 p-2 border-2 border-solid outline-none rounded-radius-m"
                  {...register('introduce')}
                />
              </div>
            </div>
            <div className="flex justify-center text-center">
              <button className="flex items-center justify-center w-full h-10 bg-c-black text-c-white rounded-radius-m">
                {data.job ? '리뷰어 수정' : '리뷰어 등록'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ReviewerRegisterModal;
