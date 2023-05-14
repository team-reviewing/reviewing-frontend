import ReviewRateHeader from './ReviewRateHeader';
import { IReviewRateModalProps } from './reviewRateType';

function ReviewRateModal({ children, closeHandler }: IReviewRateModalProps) {
  return (
    <div className="fixed inset-0 z-10 flex-cc-col">
      <div className="modal_bg" onClick={closeHandler} />
      <section
        className="z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m h-[19rem] min-w-[25rem] w-[25rem]
                  msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation">
        <ReviewRateHeader closeHandler={closeHandler} />
        {children}
      </section>
    </div>
  );
}

export default ReviewRateModal;
