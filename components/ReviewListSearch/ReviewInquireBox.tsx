import React, { useState } from 'react';
import Image from 'next/image';
import lena from 'styles/images/lena.jpg';
import { IUserReviewType, ReviewCommonWithRole } from './ReviewListType';
import ReviewModal from '../ReviewModal/ReviewModal';

function ReviewInquireBox({
  id,
  title,
  reviewerId,
  member,
  role,
}: ReviewCommonWithRole<Omit<IUserReviewType, 'status'>>) {
  const [modal, setModal] = useState<boolean>(false);

  const modalOpenHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <div className="w-full mt-6 max-w-[80%] flex flex-col cursor-pointer" onClick={modalOpenHandler}>
        <p className="text-lg text-neutral400">{member.username}</p>
        <div className="flex transition-transform ease-in-out border-2 rounded-radius-m hover:scale-105">
          <div className="flex items-center w-full">
            {/*member.imageUrl*/}
            <Image src={lena} alt="userProfile" width={40} height={40} className="rounded-radius-50% m-3" />
            <span className="w-full ml-2 text-lg line-clamp-1">{title}</span>
          </div>
        </div>
      </div>
      {modal && (
        <ReviewModal
          closeModal={setModal}
          reviewId={id}
          reviewerId={reviewerId}
          userImage={member.imageUrl}
          username={member.username}
          role={role}
        />
      )}
    </>
  );
}

export default ReviewInquireBox;
