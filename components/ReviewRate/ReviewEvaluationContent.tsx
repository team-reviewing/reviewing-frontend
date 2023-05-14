import clsx from 'clsx';
import { IReviewEvaluationContentType } from './reviewRateType';

function ReviewEvaluationContent({
  readOnly,
  evaluationContent,
  setEvaluationContentHandler,
}: IReviewEvaluationContentType) {
  return (
    <div>
      <textarea
        value={evaluationContent}
        onChange={(e) => {
          setEvaluationContentHandler(e.currentTarget.value);
        }}
        className={clsx('w-full h-32 p-3 resize-none rounded-radius-m', {
          ['focus:outline-none']: readOnly,
        })}
        placeholder="리뷰에 대한 평가를 작성해주세요!"
        readOnly={readOnly}
      />
      <p className="text-right">{evaluationContent.length}/100</p>
    </div>
  );
}

export default ReviewEvaluationContent;
