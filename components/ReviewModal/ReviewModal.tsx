import dynamic from 'next/dynamic';
import Loading from '../Loading';
import cancel from '../../styles/images/cancel.svg';
import Image from 'next/image';
import ReviewSection from './ReviewSection';
import ButtonWrapper from '../ButtonWrapper';
import { useQuery } from '@tanstack/react-query';
import { getReviewDetailInfo } from '../../pages/api/inquire';
import { IReviewModalApiDetailType, IReviewModalPropsType } from './reviewModalType';
import ReviewModifyLink from './ReviewModifyLink';
import { useAcceptReview, useRefuseReview } from '../ReviewListSearch/queries/getReviewsQuery';

const QuillEditor = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <Loading />,
});

function ReviewModal({ reviewId, reviewerId, userImage, username, role, closeModal }: IReviewModalPropsType) {
  const { data } = useQuery<IReviewModalApiDetailType>({
    queryKey: ['modalDetail', reviewId],
    queryFn: () => getReviewDetailInfo({ reviewerId, reviewId }),
    staleTime: 1000 * 20,
  });

  const { mutate: mutateAccept } = useAcceptReview({ reviewerId: reviewerId, reviewId: reviewId });
  const { mutate: mutateRefuse } = useRefuseReview({ reviewerId: reviewerId, reviewId: reviewId });

  const closeModalHandler = () => {
    closeModal((prev) => !prev);
  };

  return (
    <div className="fixed flex inset-0 z-5 flex-col items-center justify-center">
      <div className="absolute inset-0 bg-b-modal" onClick={closeModalHandler} />
      <div
        className="z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m h-[50rem] min-w-[36rem] w-[36rem]
                  msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation">
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between">
            <div>
              <h2 className="font-bold text-lg ">리뷰 신청 내용</h2>
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
          <div className="flex-1 overflow-y-auto flex flex-col h-full">
            <ReviewSection option="flex">
              <Image src={userImage} alt="registerImage" className="w-6 h-6 rounded-radius-50%" />
              <span className="ml-2">{username}</span>
            </ReviewSection>
            <ReviewSection>
              <h2 className="font-medium text-base">리뷰 제목</h2>
              <p>{data?.title}</p>
            </ReviewSection>
            <ReviewSection option="modal">
              <h2 className="font-medium text-base">리뷰 상세 내용</h2>
              <QuillEditor modules={{ toolbar: false }} theme="snow" readOnly value={data?.content} />
            </ReviewSection>
            <div className="mt-6 flex flex-col ">
              <h2 className="font-medium text-base">Pull Request URL</h2>
              <a
                className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
                target="_blank"
                href="http://localhost:3000">
                <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                  {data?.prUrl}
                </span>
              </a>
            </div>
          </div>
          <div className="text-center flex justify-center gap-2">
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
