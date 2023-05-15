import React, { useState } from 'react';
import { useGetReviewerDetailInfo, useGetReviewerScoreList } from './queries/getReviewerModalQuery';
import cancel from '../../styles/images/cancel.svg';
import Image from 'next/image';
import Link from 'next/link';
import ReviewPaginationButton from './ReviewPaginationButton';
import ReviewerScoreListBox from './ReviewerScoreListBox';
import ReviewerIntro from './ReviewerIntro';
import { IReviewerModalType } from './reviewerModalType';

function ReviewerModal({ id, closeModal }: IReviewerModalType) {
  const [page, setPage] = useState<number>(0);

  const { data: reviewerDetail } = useGetReviewerDetailInfo({ reviewerId: id });
  const { data: reviewerScoreList } = useGetReviewerScoreList({ reviewerId: id, page });

  const prevHandler = () => {
    setPage((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const nextHandler = () => {
    setPage((prev) => {
      if (reviewerScoreList?.hasNext) {
        return prev + 1;
      }
      return prev;
    });
  };

  const closeModalHandler = () => {
    closeModal((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 z-10 flex-cc-col">
      <div className="modal_bg" onClick={closeModalHandler} />
      <section
        className="z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m h-[44rem] min-w-[36rem] w-[36rem]
                  msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation">
        <div className="flex flex-col wh-f">
          <div className="flex justify-between">
            <div>
              <strong className="text-lg">리뷰어 소개</strong>
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
          {reviewerDetail && (
            <div className="flex flex-col flex-1 h-full mt-6 space-y-6 overflow-y-auto">
              <ReviewerIntro reviewerDetail={reviewerDetail} />

              {reviewerScoreList && <ReviewerScoreListBox reviewerScoreList={reviewerScoreList} />}

              <nav className="flex justify-center w-full gap-5">
                <ReviewPaginationButton onClick={prevHandler}>⪻</ReviewPaginationButton>
                <ReviewPaginationButton onClick={nextHandler}>⪼</ReviewPaginationButton>
              </nav>
              <Link
                href={{
                  pathname: '/register',
                  query: {
                    reviewerId: reviewerDetail.id,
                    username: reviewerDetail.username,
                  },
                }}
                className="px-4 py-2 font-bold text-center bg-gray200 text-c-black rounded-radius-s hover:bg-black hover:text-c-white">
                리뷰요청
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ReviewerModal;
