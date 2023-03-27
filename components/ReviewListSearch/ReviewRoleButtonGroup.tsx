import React from 'react';
import clsx from 'clsx';
import { IReviewRoleType } from './ReviewListType';

function ReviewModeButtonGroup({ role, setRole }: IReviewRoleType) {
  return (
    <div className="flex justify-center rounded-lg text-lg mt-4" role="group">
      <button
        onClick={() => {
          setRole(false);
        }}
        className={clsx(
          `bg-black text-white hover:bg-blue-500 border border-r-1 rounded-l-lg px-4 py-2 mx-0 outline-none`,
          {
            ['bg-blue-500']: !role,
          },
        )}>
        요청한 리뷰
      </button>
      <button
        onClick={() => {
          setRole(true);
        }}
        className={clsx(
          `bg-black text-white hover:bg-blue-500 border border-l-0 rounded-r-lg px-4 py-2 mx-0 outline-none`,
          {
            ['bg-blue-500']: role,
          },
        )}>
        요청 받은 리뷰
      </button>
    </div>
  );
}

export default ReviewModeButtonGroup;
