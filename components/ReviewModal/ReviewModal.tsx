import dynamic from 'next/dynamic';
import Loading from '../Loading';
import cancel from '../../styles/images/cancel.svg';
import Image from 'next/image';
import ReviewSection from './ReviewSection';
import ButtonWrapper from '../ButtonWrapper';
import { IReviewModalPropsType } from './reviewModalType';
import ReviewModifyLink from './ReviewModifyLink';
import { useAcceptReview, useRefuseReview } from '../ReviewListSearch/queries/getReviewsQuery';
import { useReviewModalGetQuery } from './queries/getReviewModalQuery';

const QuillEditor = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <Loading />,
});

function ReviewModal({ reviewId, reviewerId, userImage, username, role, closeModal }: IReviewModalPropsType) {
  const { data } = useReviewModalGetQuery({ reviewId, reviewerId });

  const { mutate: mutateAccept } = useAcceptReview({ reviewerId: reviewerId, reviewId: reviewId });
  const { mutate: mutateRefuse } = useRefuseReview({ reviewerId: reviewerId, reviewId: reviewId });

  const closeModalHandler = () => {
    closeModal((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-5">
      <div className="absolute inset-0 bg-b-modal" onClick={closeModalHandler} />
      <div
        className="z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m h-[50rem] min-w-[36rem] w-[36rem]
                  msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between">
            <div>
              <h2 className="text-lg font-bold ">리뷰 신청 내용</h2>
            </div>
            <div className="flex">
              <Image
                src={cancel}
                alt="cancel"
                width="15"
                height="15"
                className="cursor-pointer"
                onClick={closeModalHandler}
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 h-full overflow-y-auto">
            <ReviewSection option="flex">
              <Image src={userImage} alt="registerImage" className="w-6 h-6 rounded-radius-50%" />
              <span className="ml-2">{username}</span>
            </ReviewSection>
            <ReviewSection>
              <h2 className="text-base font-medium">리뷰 제목</h2>
              <p>{data?.title}</p>
            </ReviewSection>
            <ReviewSection option="modal">
              <h2 className="text-base font-medium">리뷰 상세 내용</h2>
              <QuillEditor modules={{ toolbar: false }} theme="snow" readOnly value={data?.content} />
            </ReviewSection>
            <div className="flex flex-col mt-6 ">
              <h2 className="text-base font-medium">Pull Request URL</h2>
              <a
                className="inline-block max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
                target="_blank"
                href="http://localhost:3000">
                <span className="inline-block max-w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  {data?.prUrl}
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-2 text-center">
            {!role ? (
              <>
                {data && (
                  <>
                    <ReviewModifyLink
                      reviewId={reviewId}
                      reviewerId={reviewerId}
                      title={data.title}
                      content={data.content}
                      prUrl={data.prUrl}
                      username={username}
                    />
                    <ButtonWrapper>리뷰 취소</ButtonWrapper>
                  </>
                )}
              </>
            ) : (
              <>
                <ButtonWrapper onClick={() => mutateAccept()}>리뷰 수락</ButtonWrapper>
                <ButtonWrapper onClick={() => mutateRefuse()}>리뷰 거절</ButtonWrapper>
                <ButtonWrapper>리뷰 승인</ButtonWrapper>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
