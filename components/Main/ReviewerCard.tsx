import React from 'react';
import Image from 'next/image';
import img from '../../styles/images/lena.jpg';
import { IReviewerType } from './mainType';
import Link from 'next/link';

function ReviewerCard({ reviewerProps }: { reviewerProps: IReviewerType }) {
  return (
    <div className="max-w-md rounded-md shadow-md border-2 border-neutral-300 flex justify-center items-center px-3 py-3 hover:border-neutral-400 hover:scale-105 transition-transform ease-in-out">
      <div className="flex flex-col w-full h-full">
        <p className="w-full line-clamp-3 overflow-ellipsis whitespace-normal min-h-[3rem] leading-4 mb-1">
          {reviewerProps.introduction}
        </p>
        <div className="flex flex-col text-stone-500">
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

        <div className="w-full flex justify-between mt-3">
          <div className="flex justify-center items-center">
            <Image src={img} alt="img" width={30} height={30} className="rounded-full mr-3"></Image>
            <span className="text-black">{reviewerProps.username}</span>
          </div>
          <Link
            as="/register"
            href={{
              pathname: '/register',
              query: {
                reviewerId: reviewerProps.id,
                username: reviewerProps.username,
              },
            }}
            className=" bg-slate-200 text-black font-bold py-2 px-4 rounded">
            리뷰요청
          </Link>
          {/* 임시 수정 버튼 */}
          <Link
            as="/register"
            href={{
              pathname: '/register',
              query: {
                reviewId: '10',
                title: 'Modify 타이틀',
                content: '<p>안녕하세요 이건 모디파이 입니다.</p>',
                prUrl: 'https://github.com/codestates-seb/seb40_main_032/pull/417',
                reviewerId: reviewerProps.id,
                username: reviewerProps.username,
              },
            }}
            className=" bg-slate-200 text-black font-bold py-2 px-4 rounded">
            리뷰수정요청
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReviewerCard;
