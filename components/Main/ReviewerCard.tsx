import React, { useState } from 'react';
import Image from 'next/image';
import { IReviewerType } from './mainType';
import ReviewerModal from '../ReviewerModal/ReviewerModal';

function ReviewerCard({ reviewerProps }: { reviewerProps: IReviewerType }) {
  const [modal, setModal] = useState<boolean>(false);

  const openModalHandler = () => {
    setModal((prev) => !prev);
  };
  return (
    <>
      <article
        className="px-3 py-3 transition-transform ease-in-out border-2 shadow-md flex-cc rounded-radius-m border-neutral300 hover:border-neutral400 hover:scale-105"
        onClick={openModalHandler}>
        <div className="flex flex-col wh-f">
          <p className="w-full line-clamp-3 overflow-ellipsis whitespace-normal min-h-[3rem] leading-4 mb-1">
            {reviewerProps.introduction}
          </p>
          <div className="flex flex-col text-neutral500">
            <div>
              개발 분야 : <strong>{reviewerProps.job}</strong>
            </div>
            <div>
              개발 경력 : <strong>{reviewerProps.career}</strong>
            </div>
            <div>
              기술 스택 : <strong>{reviewerProps.techStack.map((item) => item.name).join(', ')}</strong>
            </div>
            <div>
              깃허브 : <strong>{reviewerProps.profileUrl}</strong>
            </div>
          </div>

          <div className="flex justify-between w-full mt-3">
            <figure className="flex-cc">
              <Image
                src={reviewerProps.imageUrl}
                alt="img"
                width={30}
                height={30}
                className="rounded-radius-50% mr-3"></Image>
              <figcaption className="text-black">{reviewerProps.username}</figcaption>
            </figure>
          </div>
        </div>
      </article>
      {modal && <ReviewerModal id={reviewerProps.id} closeModal={setModal} />}
    </>
  );
}

export default ReviewerCard;
