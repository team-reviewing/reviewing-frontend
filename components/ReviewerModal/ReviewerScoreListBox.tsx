import React from 'react';
import Image from 'next/image';
import { IReviewerScoreListResponseType } from './reviewerModalType';

function ReviewerScoreListBox({ reviewerScoreList }: { reviewerScoreList: IReviewerScoreListResponseType }) {
  return (
    <div>
      <div>
        <strong className="text-lg">리뷰 후기</strong>
      </div>
      <div className="flex flex-col w-full">
        {reviewerScoreList?.evaluations.map((item) => (
          <div className="flex flex-col w-full mb-2 border-b" key={item.id}>
            <div className="flex justify-between">
              <figure className="flex">
                <Image
                  src={item.imageUrl}
                  alt="userImg"
                  width={25}
                  height={25}
                  className="rounded-radius-50% mr-3 mb-2"
                />
                <figcaption className="text-black">{item.username}</figcaption>
              </figure>
              {item.score}
            </div>

            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewerScoreListBox;
