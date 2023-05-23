import { IReviewRateModalProps } from '../ReviewRate/reviewRateType';
import ReviewerRateHeader from './ReviewerRateHeader';

function ReviewerRateModal({ children, closeHandler }: IReviewRateModalProps) {
  return (
    <div className="fixed inset-0 z-10 flex-cc-col">
      <div className="modal_bg" onClick={closeHandler} />
      <section
        className="z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m h-[30rem] min-w-[28rem] w-[28rem]
              msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation">
        <ReviewerRateHeader />
        {children}
      </section>
    </div>
  );
}

export default ReviewerRateModal;
