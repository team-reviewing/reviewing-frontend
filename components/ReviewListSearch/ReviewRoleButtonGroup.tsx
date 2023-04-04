import React from 'react';
import clsx from 'clsx';
import { IReviewRoleType } from './ReviewListType';

function ReviewModeButtonGroup({ role, setRole }: IReviewRoleType) {
  return (
    <div className="flex justify-center rounded-radius-m text-lg mt-4" role="group">
      <button
        onClick={() => {
          setRole(false);
        }}
        className={clsx(
          `text-c-white hover:bg-blue500 border border-r-1 rounded-l-radius-m px-4 py-2 mx-0 outline-none`,
          {
            ['bg-blue500']: !role,
            ['bg-c-black']: role,
          },
        )}>
        요청한 리뷰
      </button>
      <button
        onClick={() => {
          setRole(true);
        }}
        className={clsx(
          `text-c-white hover:bg-blue500 border border-l-0 rounded-r-radius-m px-4 py-2 mx-0 outline-none`,
          {
            ['bg-blue500']: role,
            ['bg-c-black']: !role,
          },
        )}>
        요청 받은 리뷰
      </button>
    </div>
  );
}

export default ReviewModeButtonGroup;
