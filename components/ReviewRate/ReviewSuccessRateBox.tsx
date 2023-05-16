import { Suspense, useState } from 'react';
import ButtonWrapper from '../Commons/ButtonWrapper';
import Loading from '../Commons/Loading';
import Portal from '../Commons/Portal';
import ReviewEvaluation from './ReviewEvaluation';
import ReviewRateModal from './ReviewRateModal';
import { IReviewEvaluationProps } from './reviewRateType';

function ReviewSuccessRateBox({ reviewerId, reviewId, status }: Omit<IReviewEvaluationProps, 'closeHandler'>) {
  const [rateModal, setRateModal] = useState<boolean>(false);
  const rateModalHandler = () => {
    setRateModal((prev) => !prev);
  };

  return (
    <div className="w-full hover:scale-105" onClick={(e) => e.stopPropagation()}>
      <ButtonWrapper className="text-xs" onClick={rateModalHandler}>
        {status === 'APPROVED' ? '리뷰평가' : '평가완료'}
      </ButtonWrapper>
      {rateModal && (
        <Portal>
          <ReviewRateModal closeHandler={rateModalHandler}>
            <Suspense fallback={<Loading />}>
              <ReviewEvaluation
                reviewerId={reviewerId}
                reviewId={reviewId}
                status={status}
                closeHandler={rateModalHandler}
              />
            </Suspense>
          </ReviewRateModal>
        </Portal>
      )}
    </div>
  );
}

export default ReviewSuccessRateBox;
