import { useCallback, useEffect, useState } from 'react';
import ReviewEvaluationContent from './ReviewEvaluationContent';
import StarRate from '../Commons/StarRate/StarRate';
import ReviewEvaluationButtonGroup from './ReviewEvaluationButtonGroup';
import { useReviewRateModalGetQuery, useReviewRateRegisterMutation } from './queries/getReviewRateQuery';
import { IReviewEvaluationProps } from './reviewRateType';

function ReviewEvaluation({ reviewerId, reviewId, status, closeHandler }: IReviewEvaluationProps) {
  const [reviewStarRate, setReviewStarRate] = useState<number>(0);
  const [evaluationContent, setEvaluationContent] = useState<string>('');

  const { data } = useReviewRateModalGetQuery({ reviewId });
  const { mutate: mutateRateRegister } = useReviewRateRegisterMutation({
    content: evaluationContent,
    score: reviewStarRate,
    reviewId: reviewId,
    reviewerId: reviewerId,
    closeHandler: closeHandler,
  });

  const reviewSetStarRateHandler = useCallback((num: number) => {
    setReviewStarRate(num);
  }, []);

  const reviewSetStarRateContentHandler = useCallback((content: string) => {
    setEvaluationContent(content);
  }, []);

  useEffect(() => {
    if (data) {
      setReviewStarRate(data.score);
      setEvaluationContent(data.content);
    }
  }, [data]);

  return (
    <>
      <StarRate
        rateValue={reviewStarRate}
        setRate={reviewSetStarRateHandler}
        readOnly={status === 'APPROVED' ? false : true}
      />
      <ReviewEvaluationContent
        readOnly={status === 'APPROVED' ? false : true}
        evaluationContent={evaluationContent}
        setEvaluationContentHandler={reviewSetStarRateContentHandler}
      />
      {status === 'APPROVED' && <ReviewEvaluationButtonGroup mutateRateRegister={mutateRateRegister} />}
    </>
  );
}

export default ReviewEvaluation;
