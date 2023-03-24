import React from 'react';
import Image from 'next/image';
import lena from 'styles/images/lena.jpg';
import { IUserReviewType, ReviewCommonWithRole } from './ReviewListType';

function ReviewInquireBox({ id, title, reviewee, reviewer, role }: ReviewCommonWithRole<IUserReviewType>) {
  const onClickBox = () => {
    console.log(id);
    //추후 세부 페이지로 이동하는 로직
  };
  //mode false - 요청 한 리뷰

  return (
    <div className="w-full mt-6 max-w-[80%] flex flex-col" onClick={onClickBox}>
      <p className="text-slate-400 text-lg">{!role ? reviewer?.username : reviewee?.username}</p>
      <div className="rounded-sm border-2 hover:scale-105 transition-transform ease-in-out flex">
        <div className="flex w-full items-center">
          {/*mode ? reviewer?.imageUrl : reviewee?.imageUrl*/}
          <Image src={lena} alt="userProfile" width={40} height={40} className="rounded-full m-3" />
          <span className="text-lg w-full ml-2 line-clamp-1">{title}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewInquireBox;
