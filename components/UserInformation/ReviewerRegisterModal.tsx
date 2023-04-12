import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { IModalPropsType, ISkillType, ReviewModalHookFormType } from './informationType';
import cancel from '../../styles/images/cancel.svg';
import Loading from '../Loading';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import ReviewModalDropDownSelect from './ReviewModalDropDownSelect';
import ReviewModalDropDownSkill from './ReviewModalDropDownSkill';
import { useReviewerGetQuery, useReviewerRegisterMutate, useReviewerUpdateMutate } from './queries/getReviewerQuery';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/userState';

function ReviewerRegisterModal({ userName, setModal }: IModalPropsType) {
  const { data, isLoading } = useReviewerGetQuery({ userName });

  const { mutate: mutateRegister } = useReviewerRegisterMutate({ setModal });
  const { mutate: mutateUpdate } = useReviewerUpdateMutate({ setModal });

  const userRecoil = useRecoilValue(userState);

  const [selectJob, setSelectJob] = useState<string>('');
  const [selectCareer, setSelectCareer] = useState<string>('');
  const [selectTech, setSelectTech] = useState<ISkillType[]>([]);
  const { register, setValue, handleSubmit } = useForm<ReviewModalHookFormType>({
    defaultValues: {
      etc: '',
      introduce: '',
    },
  });

  useEffect(() => {
    if (data) {
      setSelectJob(data.job);
      setSelectCareer(data.career);
      setSelectTech(data.techStack);
      setValue('introduce', data.introduce);
    }
  }, [data]);

  const submitValidationHandler = () => {
    toast.error('전부 필수 내용입니다.');
  };

  const submitHandler = ({ etc, introduce }: ReviewModalHookFormType) => {
    if (!(selectJob && selectCareer && selectTech.length)) {
      return toast.error('전부 필수 내용입니다.');
    }
    if (selectJob === '기타' && etc === '') {
      return toast.error('전부 필수 내용입니다.');
    }

    if (userRecoil && userRecoil.reviewerRegister) {
      return mutateUpdate({
        job: selectJob === '기타' ? etc : selectJob,
        career: selectCareer,
        introduce,
        techStack: selectTech.map((el) => el.id),
      });
    }
    if (userRecoil && !userRecoil.reviewerRegister) {
      return mutateRegister({
        job: selectJob === '기타' ? etc : selectJob,
        career: selectCareer,
        introduce,
        techStack: selectTech.map((el) => el.id),
      });
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
              <ReviewModalDropDownSelect
                name="직무"
                itemList={data.positionList}
                select={selectJob}
                setState={setSelectJob}
                register={register}
              />
              <ReviewModalDropDownSelect
                name="경력"
                itemList={data.careerList}
                select={selectCareer}
                setState={setSelectCareer}
              />
              <ReviewModalDropDownSkill
                name="기술 스택"
                itemList={data.techList}
                select={selectTech}
                setState={setSelectTech}
              />
              <div>
                <span className="flex flex-col items-start w-full">소개글</span>
                <textarea
                  className="w-full h-20 p-2 border-2 border-solid outline-none rounded-radius-m"
                  {...register('introduce', { required: true })}
                />
              </div>
            </div>
            <div className="flex justify-center text-center">
              <button className="flex items-center justify-center w-full h-10 bg-c-black text-c-white rounded-radius-m">
                {userRecoil?.reviewerRegister ? '리뷰어 수정' : '리뷰어 등록'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ReviewerRegisterModal;
