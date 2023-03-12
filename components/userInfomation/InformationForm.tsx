import clsx from 'clsx';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { userInfoUpdate } from '../../pages/api/userInfo';
import { UserPageProps } from './informationType';
import ReviewerRegisterModal from './ReviewerRegisterModal';
import UserInput from './UserInput';
import { reviewerStatusUpdate } from '../../pages/api/userInfo';

const InformationForm = ({ data }: UserPageProps) => {
  const [userId, setUserId] = useState<string>(data.userInfo.username);
  const [email, setEmail] = useState<string>(data.userInfo.email);
  const [profileUrl, setProfileUrl] = useState<string>(data.userInfo.profileUrl);
  const [modal, setModal] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const [reviewerStatus, setReviewerStatus] = useState<boolean>(data.userInfo.isReviewer);
  const userUpdateHandler = async () => {
    setUpdateLoading((prev) => !prev);
    try {
      await userInfoUpdate({ username: userId, email });
      setUpdateLoading(false);
      toast.success('데이터가 업데이트 되었습니다.');
    } catch (err) {
      setUpdateLoading(false);
      toast.error('데이터 업데이트가 진행되지 않았습니다. 다시 진행해 주시기 바랍니다.');
    }
  };
  // 리뷰어 활동 여부 업데이트 함수
  const userReviewerStatusUpdate = async () => {
    try {
      await reviewerStatusUpdate();
      setReviewerStatus((prev) => !prev);
      toast.success('리뷰어 활동을 시작합니다!');
    } catch (err) {
      toast.error('리뷰어 활동 업데이트 오류가 발생했습니다!');
    }
  };
  // 추후 로딩 컴포넌트를 사용할 예정
  if (updateLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {modify ? (
          <>
            <UserInput
              name="활동명"
              input={userId}
              setInput={setUserId}
              placeholder="활동명을 입력해주세요."
              disable={false}
            />
            <UserInput
              name="이메일"
              input={email}
              setInput={setEmail}
              placeholder="이메일을 입력해주세요."
              disable={false}
            />
            <UserInput name="Github Url" input={profileUrl} setInput={setProfileUrl} />
          </>
        ) : (
          <>
            <UserInput name="활동명" input={userId} setInput={setUserId} />
            <UserInput name="이메일" input={email} setInput={setEmail} />
            <UserInput name="Github Url" input={profileUrl} setInput={setProfileUrl} />
          </>
        )}
      </div>

      <div className="mt-6">
        <div className="my-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              onClick={userReviewerStatusUpdate}
              className={clsx(
                "w-11 h-6  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:border-white",
                {
                  ['bg-blue-600 after:translate-x-full']: reviewerStatus,
                  ['bg-gray-200 after:translate-x-0']: !reviewerStatus,
                },
              )}></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Reviewer 활동여부</span>
          </label>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (modify) {
                setModify((prev) => !prev);
                userUpdateHandler();
              } else {
                setModify((prev) => !prev);
              }
            }}
            className="w-full flex justify-center items-center bg-black text-white h-10 rounded-md">
            {modify ? '수정 반영' : '정보 수정'}
          </button>
          <button
            onClick={() => setModal(true)}
            type="submit"
            className="w-full flex justify-center items-center bg-black text-white h-10 rounded-md">
            리뷰어 정보
          </button>
        </div>
      </div>
      {modal && <ReviewerRegisterModal setModal={setModal} />}
    </div>
  );
};

export default InformationForm;
