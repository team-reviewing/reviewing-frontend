import { useState } from 'react';
import ReviewerScoreListBox from '../ReviewerModal/ReviewerScoreListBox';
import ReviewPaginationButton from '../ReviewerModal/ReviewPaginationButton';
import { useReviewerGetRateQuery } from './queries/getReviewerQuery';

function ReviewerRateContent() {
  const [page, setPage] = useState<number>(0);
  const { data: reviewerScoreList } = useReviewerGetRateQuery({ page });

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

  return (
    <div className="flex flex-col justify-between h-full">
      {reviewerScoreList && (
        <>
          <ReviewerScoreListBox reviewerScoreList={reviewerScoreList} />

          <nav className="flex justify-center w-full gap-5">
            <ReviewPaginationButton onClick={prevHandler}>{'<'}</ReviewPaginationButton>
            <ReviewPaginationButton onClick={nextHandler}>{'>'}</ReviewPaginationButton>
          </nav>
        </>
      )}
      {!reviewerScoreList && <p>평가받은 목록이 아직 없습니다🌟</p>}
    </div>
  );
}

export default ReviewerRateContent;
