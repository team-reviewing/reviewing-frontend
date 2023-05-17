import React from 'react';
import Image from 'next/image';
import { IReviewerModalResponseType } from './reviewerModalType';
import StarRate from '../Commons/StarRate/StarRate';

function ReviewerIntro({ reviewerDetail }: { reviewerDetail: IReviewerModalResponseType }) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex mb-6">
          <Image
            src={reviewerDetail.imageUrl}
            width={40}
            height={40}
            alt="registerImage"
            className="w-6 h-6 rounded-radius-50%"
          />
          <span className="ml-2">{reviewerDetail.username}</span>
        </div>
        <span>
          <StarRate rateValue={reviewerDetail.score} readOnly={true} />
        </span>
      </div>
      <div className="mb-6">
        <p>{reviewerDetail.introduction}</p>
      </div>
      <div className="pb-6 border-b">
        <p>개발 분야 : {reviewerDetail.job}</p>
        <p>기술 스택 : {reviewerDetail.techStack.map((item) => item.name).join(', ')}</p>
        <p>개발 경력 : {reviewerDetail.career}</p>
        <p>깃허브 : {reviewerDetail.profileUrl}</p>
      </div>
    </div>
  );
}

export default ReviewerIntro;
