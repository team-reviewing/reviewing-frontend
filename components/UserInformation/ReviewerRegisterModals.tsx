import { IReviewRateModalProps as IReviewerRegisterModalProps } from '../ReviewRate/reviewRateType';

function ReviewerRegisterModal({ children, closeHandler }: IReviewerRegisterModalProps) {
  return (
    <div className="fixed inset-0 z-10 flex-cc-col">
      <div className="modal_bg" onClick={closeHandler} />
      <section
        className="z-20 bg-c-white flex relative flex-col p-7 rounded-radius-m h-[38rem] min-w-[32rem] w-[32rem]
                  msm:w-full msm:min-w-0 msm:fixed msm:bottom-0 msm:rounded-b-radius-none msm:animate-up-animation">
        {children}
      </section>
    </div>
  );
}

export default ReviewerRegisterModal;
