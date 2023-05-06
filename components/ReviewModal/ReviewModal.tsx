import dynamic from 'next/dynamic';
import Loading from '../Commons/Loading';
import cancel from '../../styles/images/cancel.svg';
import Image from 'next/image';
import ButtonWrapper from '../Commons/ButtonWrapper';
import { IReviewModalPropsType } from './reviewModalType';
import ReviewModifyLink from './ReviewModifyLink';
import { ROLE, useReviewMutation } from '../ReviewListSearch/queries/getReviewsQuery';
import { useReviewModalGetQuery } from './queries/getReviewModalQuery';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { acceptReview, approveReview, refuseReview } from '../../pages/api/inquire';

const QuillEditor = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <Loading />,
});

function ReviewModal({ reviewId, reviewerId, userImage, username, role, closeModal }: IReviewModalPropsType) {
  const { data } = useReviewModalGetQuery({ reviewId, reviewerId });
  const queryClient = useQueryClient();

  const closeModalHandler = () => {
    closeModal((prev) => !prev);
  };

  const mutationSuccessFn = () => {
    toast.success('처리가 완료됬습니다.');
    queryClient.invalidateQueries(['getReviews', ROLE, 'reviewer', data?.status]);
    closeModalHandler();
  };

  const { mutate: mutateAccept } = useReviewMutation({
    mutationFn: () => acceptReview({ reviewId, reviewerId }),
    onSuccess: mutationSuccessFn,
  });
  const { mutate: mutateRefuse } = useReviewMutation({
    mutationFn: () => refuseReview({ reviewId, reviewerId }),
    onSuccess: mutationSuccessFn,
  });
  const { mutate: mutateApprove } = useReviewMutation({
    mutationFn: () => approveReview({ reviewerId, reviewId }),
    onSuccess: mutationSuccessFn,
  });

  const statusHandler = (status: string | undefined) => {
    if (status === 'CREATED') {
      return '요청';
    }
    if (status === 'ACCEPTED') {
      return '수락';
    }
    if (status === 'REFUSED') {
      return '거절';
    }
    if (status === 'APPROVED') {
      return '완료';
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex-cc-col">
      <div className="modal_bg" onClick={closeModalHandler} />
      <section
        className="z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m h-[50rem] min-w-[36rem] w-[36rem]
                  msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation">
        <div className="flex flex-col wh-f">
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
          <div className="flex justify-between mt-6">
            <p>{statusHandler(data?.status)}상태</p>
            {data?.status === 'REFUSED' && <p>삭제 예정일 : {data?.statusSetAt} </p>}
          </div>
          <div className="flex flex-col flex-1 h-full mt-6 space-y-6 overflow-y-auto">
            <div className="flex">
              <Image
                src={userImage}
                width={40}
                height={40}
                alt="registerImage"
                className="w-6 h-6 rounded-radius-50%"
              />
              <span className="ml-2">{username}</span>
            </div>
            <div>
              <h2 className="text-base font-medium">리뷰 제목</h2>
              <p>{data?.title}</p>
            </div>
            <div className="modal">
              <h2 className="text-base font-medium">리뷰 상세 내용</h2>
              <QuillEditor modules={{ toolbar: false }} theme="snow" readOnly value={data?.content} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-base font-medium">Pull Request URL</h2>
              <a
                className="inline-block max-w-full overflow-hidden whitespace-nowrap text-ellipsis"
                target="_blank"
                href={data?.prUrl}>
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
                    {data.status === 'APPROVED' ? (
                      <p>완료된 리뷰입니다</p>
                    ) : (
                      <>
                        <ReviewModifyLink
                          reviewId={reviewId}
                          reviewerId={reviewerId}
                          title={data.title}
                          content={data.content}
                          prUrl={data.prUrl}
                          username={username}
                          status={data.status}
                        />
                        <ButtonWrapper>리뷰 취소</ButtonWrapper>
                      </>
                    )}
                  </>
                )}
              </>
            ) : (
              <>
                {data && (
                  <>
                    {data.status === 'CREATED' && (
                      <>
                        <ButtonWrapper onClick={() => mutateAccept()}>리뷰 수락</ButtonWrapper>
                        <ButtonWrapper onClick={() => mutateRefuse()}>리뷰 거절</ButtonWrapper>
                      </>
                    )}
                    {data.status === 'ACCEPTED' && (
                      <ButtonWrapper onClick={() => mutateApprove()}>리뷰 완료</ButtonWrapper>
                    )}
                    {data.status === 'APPROVED' && <p>완료된 리뷰입니다</p>}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewModal;
