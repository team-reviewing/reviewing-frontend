import React from 'react';
import Image from 'next/image';
import img from '../../styles/images/lena.jpg';
import { IReviewerType } from './mainType';
import Link from 'next/link';

function ReviewerCard({ reviewerProps }: { reviewerProps: IReviewerType }) {
  return (
    <div className="px-3 py-3 transition-transform ease-in-out border-2 shadow-md flex-cc rounded-radius-m border-neutral300 hover:border-neutral400 hover:scale-105">
      <div className="flex flex-col wh-f">
        <p className="w-full line-clamp-3 overflow-ellipsis whitespace-normal min-h-[3rem] leading-4 mb-1">
          {reviewerProps.introduction}
        </p>
        <div className="flex flex-col text-neutral500">
          <div>
            분야 : <strong>{reviewerProps.job}</strong>
          </div>
          <div>
            경력 : <strong>{reviewerProps.career}</strong>
          </div>
          <div>
            github : <strong>{reviewerProps.profileUrl}</strong>
          </div>
          <div>
            tech : <strong>{reviewerProps.techStack.map((item) => item.name).join(', ')}</strong>
          </div>
        </div>

        <div className="flex justify-between w-full mt-3">
          <div className="flex-cc">
            <Image src={img} alt="img" width={30} height={30} className="rounded-radius-50% mr-3"></Image>
            <span className="text-black">{reviewerProps.username}</span>
          </div>
          <Link
            href={{
              pathname: '/register',
              query: {
                reviewerId: reviewerProps.id,
                username: reviewerProps.username,
              },
            }}
            className="px-4 py-2 font-bold bg-gray200 text-c-black rounded-radius-s">
            리뷰요청
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReviewerCard;
