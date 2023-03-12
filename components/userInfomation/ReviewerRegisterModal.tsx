import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { registerUpdate, reviewerGet, reviewerRegister } from '../../pages/api/userInfo';
import {
  IModalPropsType,
  IRegister,
  IRegisterMutationProps,
  IReviewerRegisterUpdateType,
  ISkillType,
} from './informationType';
import ReviewerDropDown from './ReviewerDropDown';

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

  const modalRef = useRef<HTMLDivElement>(null);
  const [job, setJob] = useState<string>('');
  const [etc, setEtc] = useState<string>('');
  const [career, setCareer] = useState<string>('');
  const [techStack, setTechStack] = useState<ISkillType[]>([]);
  const [introduce, setIntroduce] = useState<string>('');

  useEffect(() => {
    const handler = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModal(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setJob(data.job);
      setCareer(data.career);
      setIntroduce(data.introduce);
      setTechStack(data.techStack);
    }
  }, [data]);

  // reviewer 등록 함수
  const reviewerSubmit = (mutationFn: (regi: IReviewerRegisterUpdateType) => Promise<AxiosResponse<any, any>>) => {
    mutate({
      register: {
        job: etc ? etc : job,
        career: career,
        techStack: techStack.map((el) => el.id),
        introduce: introduce,
      },
      mutationFnCb: mutationFn,
    });
  };

  const checkValidation = (): boolean => {
    if (job && career && techStack && introduce) {
      return true;
    } else {
      toast.error('전부 필수 내용입니다.');
      return false;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="absolute inset-0 bg-[#0b131e5e]"></div>
      <div
        ref={modalRef}
        className="absolute w-[32rem] h-[38rem] border-solid border-2 rounded-md z-50 left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 bg-white msm:w-11/12">
        {data && (
          <div className="w-full h-full p-7 flex flex-col">
            <div className="text-center text-2xl">리뷰어 등록</div>
            <div className="overflow-y-auto flex flex-col h-full">
              <ReviewerDropDown
                select={job}
                setSelect={(value: React.SetStateAction<string | ISkillType[]>) => setJob(value as string)}
                name="직무"
                dropList={data.positionList}
                etc={etc}
                setEtc={setEtc}
                ment="직무를 선택해주세요"
              />
              <ReviewerDropDown
                select={career}
                setSelect={(value: React.SetStateAction<string | ISkillType[]>) => setCareer(value as string)}
                name="경력"
                dropList={data.careerList}
                ment="경력을 선택해주세요"
              />
              <ReviewerDropDown
                select={techStack}
                setSelect={(value: React.SetStateAction<string | ISkillType[]>) => setTechStack(value as ISkillType[])}
                name="기술 스택"
                dropList={data.techList}
                ment="스킬을 선택해주세요"
              />
              <div className="mt-6">
                <span className="w-full flex flex-col items-start">소개글</span>
                <textarea
                  className="p-2 w-full h-20 border-solid border-2 rounded-md outline-none"
                  value={introduce}
                  onChange={(e) => setIntroduce(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="text-center flex justify-center">
              <button
                className="w-full flex justify-center items-center bg-black text-white h-10 rounded-md"
                onClick={() =>
                  checkValidation() && data.job ? reviewerSubmit(registerUpdate) : reviewerSubmit(reviewerRegister)
                }>
                {/* 추후 정보가 있는지 없는지 여부에 따른 멘트 변경 */}
                {data.job ? '리뷰어 수정' : '리뷰어 등록'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewerRegisterModal;
