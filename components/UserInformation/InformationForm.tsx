import clsx from 'clsx';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { userInfoUpdate } from '../../pages/api/userInfo';
import { IUserPageProps } from './informationType';
import ReviewerRegisterModal from './ReviewerRegisterModal';
import UserInput from './UserInput';
import { reviewerStatusUpdate } from '../../pages/api/userInfo';
import Loading from '../Loading';

const InformationForm = ({ data, setUser }: IUserPageProps) => {
  const [userName, setUserName] = useState<string>(data.username);
  const [email, setEmail] = useState<string>(data.email);
  const [profileUrl, setProfileUrl] = useState<string>(data.profileUrl);
  const [modal, setModal] = useState<boolean>(false);
  const [modify, setModify] = useState<boolean>(false);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const [reviewerStatus, setReviewerStatus] = useState<boolean>(data.isReviewer);

  const userUpdateHandler = async () => {
    setUpdateLoading((prev) => !prev);
    try {
      await userInfoUpdate({ username: userName, email });
      setUpdateLoading(false);
      setModify((prev) => !prev);
      toast.success('데이터가 업데이트 되었습니다.');
    } catch (err) {
      setUpdateLoading(false);
      toast.error('데이터 업데이트가 진행되지 않았습니다. 다시 진행해 주시기 바랍니다.');
    }
  };

  const userReviewerStatusUpdate = async () => {
    try {
      await reviewerStatusUpdate();
      !reviewerStatus
        ? toast('리뷰어 활동을 시작합니다!', { icon: '😁' })
        : toast('리뷰어 활동을 중단합니다!', { icon: '👋' });
      setReviewerStatus((prev) => !prev);
      setUser((prev) => {
        return prev && { ...prev, isReviewer: !reviewerStatus };
      });
    } catch (err) {
      toast.error('리뷰어 활동 업데이트 오류가 발생했습니다!');
    }
  };

  const userReviewerInduce = () => {
    toast('리뷰어 등록을 진행해주세요!', { icon: '😆' });
  };

  if (updateLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-6">
      <div className="space-y-5">
        <UserInput
          name="활동명"
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          disabled={!modify}
        />
        <UserInput name="이메일" value={email} onChange={(e) => setEmail(e.currentTarget.value)} disabled={!modify} />
        <UserInput name="Github Url" value={profileUrl} onChange={(e) => setProfileUrl(e.currentTarget.value)} />
      </div>
      <div className="mt-4 space-y-3 ">
        <div className="flex">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              onClick={data?.reviewerRegister ? userReviewerStatusUpdate : userReviewerInduce}
              className={clsx(
                "w-11 h-6  peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue300 dark:peer-focus:ring-blue800 rounded-radius-full peer dark:bg-gray700  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-c-white after:border-gray300 after:border after:rounded-radius-full after:h-5 after:w-5 after:transition-all dark:border-gray600 peer-checked:after:border-c-white",
                {
                  ['bg-blue600 after:translate-x-full']: reviewerStatus,
                  ['bg-gray200 after:translate-x-0']: !reviewerStatus,
                },
              )}
            />
          </label>
          <span className="ml-3 text-sm font-medium text-c-black dark:text-gray300">Reviewer 활동여부</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              if (modify) {
                userUpdateHandler();
              } else {
                setModify((prev) => !prev);
              }
            }}
            className="flex items-center justify-center w-full h-10 bg-c-black text-c-white rounded-radius-m">
            {modify ? '수정 반영' : '정보 수정'}
          </button>
          <button
            onClick={() => setModal(true)}
            type="submit"
            className="flex items-center justify-center w-full h-10 bg-c-black text-c-white rounded-radius-m">
            리뷰어 정보
          </button>
        </div>
      </div>
      {modal && <ReviewerRegisterModal setModal={setModal} userName={userName} />}
    </div>
  );
};

export default InformationForm;
