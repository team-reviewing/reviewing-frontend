import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { IModalPropsType, ISkillType, IReviewModalHookFormType } from './informationType';
import cancel from '../../styles/images/cancel.svg';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import ReviewModalDropDownSelect from './ReviewModalDropDownSelect';
import ReviewModalDropDownSkill from './ReviewModalDropDownSkill';
import { useReviewerGetQuery, useReviewerRegisterMutate, useReviewerUpdateMutate } from './queries/getReviewerQuery';
import { useRecoilState } from 'recoil';
import { userState } from '../../atoms/userState';

function ReviewerRegisterContent({ setModal }: IModalPropsType) {
  const { data } = useReviewerGetQuery();

  const [userRecoil, setUserRecoil] = useRecoilState(userState);

  const { mutate: mutateRegister } = useReviewerRegisterMutate({ setModal, setRecoil: setUserRecoil });
  const { mutate: mutateUpdate } = useReviewerUpdateMutate({ setModal, setRecoil: setUserRecoil });

  const [selectJob, setSelectJob] = useState<string>('');
  const [selectCareer, setSelectCareer] = useState<string>('');
  const [selectTech, setSelectTech] = useState<ISkillType[]>([]);
  const { register, setValue, handleSubmit } = useForm<IReviewModalHookFormType>({
    defaultValues: {
      etc: '',
      introduction: '',
    },
  });

  useEffect(() => {
    if (data) {
      setSelectJob(data.job);
      setSelectCareer(data.career);
      setSelectTech(data.techStack);
      setValue('introduction', data.introduction);
    }
  }, [data]);

  const submitValidationHandler = () => {
    toast.error('전부 필수 내용입니다.');
  };

  const submitHandler = ({ etc, introduction }: IReviewModalHookFormType) => {
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
        introduction,
        techStack: selectTech.map((el) => el.id),
      });
    }
    if (userRecoil && !userRecoil.reviewerRegister) {
      return mutateRegister({
        job: selectJob === '기타' ? etc : selectJob,
        career: selectCareer,
        introduction,
        techStack: selectTech.map((el) => el.id),
      });
    }
  };

  return (
    <>
      {data && (
        <form className="relative flex flex-col wh-f" onSubmit={handleSubmit(submitHandler, submitValidationHandler)}>
          <div className="flex-cc">
            <div className="text-2xl msm:text-xl">리뷰어 정보</div>
            <div className="absolute right-0 cursor-pointer">
              <Image width={15} height={15} src={cancel} alt="cancel" onClick={() => setModal((prev) => !prev)} />
            </div>
          </div>
          <div className="flex flex-col h-full space-y-6 overflow-y-auto">
            <ReviewModalDropDownSelect
              name="직무"
              itemList={data.jobList}
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
              itemList={data.tagList}
              select={selectTech}
              setState={setSelectTech}
            />
            <div>
              <span className="flex flex-col items-start w-full">소개글</span>
              <textarea
                className="w-full h-20 p-2 border-2 border-solid outline-none rounded-radius-m"
                {...register('introduction', { required: true })}
              />
            </div>
          </div>
          <div className="flex justify-center text-center">
            <button className="w-full h-10 flex-cc bg-c-black text-c-white rounded-radius-m">
              {userRecoil?.reviewerRegister ? '리뷰어 수정' : '리뷰어 등록'}
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default ReviewerRegisterContent;
