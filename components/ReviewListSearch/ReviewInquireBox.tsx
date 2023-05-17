import React, { useState } from 'react';
import { IUserReviewType, ReviewCommonWithRole } from './ReviewListType';
import ReviewModal from '../ReviewModal/ReviewModal';
import ReviewInquireBoxContent from './ReviewInquireBoxContent';
import Portal from '../Commons/Portal';

function ReviewInquireBox({ id, title, status, reviewerId, member, role }: ReviewCommonWithRole<IUserReviewType>) {
  const [modal, setModal] = useState<boolean>(false);

  const modalOpenHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col max-w-[80%] w-full mt-6 cursor-pointer" onClick={modalOpenHandler}>
        <div className="flex transition-transform ease-in-out border-2 rounded-radius-m ">
          <ReviewInquireBoxContent
            id={id}
            reviewerId={reviewerId}
            status={status}
            imageUrl={member.imageUrl}
            username={member.username}
            title={title}
            role={role}
          />
        </div>
      </div>
      {modal && (
        <Portal>
          <ReviewModal
            closeModal={setModal}
            reviewId={id}
            reviewerId={reviewerId}
            userImage={member.imageUrl}
            username={member.username}
            role={role}
          />
        </Portal>
      )}
    </>
  );
}

export default ReviewInquireBox;
