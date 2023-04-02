import React, { useState } from 'react';
import Image from 'next/image';
import lena from 'styles/images/lena.jpg';
import { IUserReviewType, ReviewCommonWithRole } from './ReviewListType';
import ReviewModal from '../ReviewModal/ReviewModal';

function ReviewInquireBox({ id, title, reviewerId, member, role }: ReviewCommonWithRole<IUserReviewType>) {
  const [modal, setModal] = useState<boolean>(false);

  const modalOpenHandler = () => {
    setModal((prev) => !prev);
  };

  return (
    <>
      <div className="w-full mt-6 max-w-[80%] flex flex-col cursor-pointer" onClick={modalOpenHandler}>
        <p className="text-slate-400 text-lg">{member.username}</p>
        <div className="rounded-sm border-2 hover:scale-105 transition-transform ease-in-out flex">
          <div className="flex w-full items-center">
            {/*member.imageUrl*/}
            <Image src={lena} alt="userProfile" width={40} height={40} className="rounded-full m-3" />
            <span className="text-lg w-full ml-2 line-clamp-1">{title}</span>
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
