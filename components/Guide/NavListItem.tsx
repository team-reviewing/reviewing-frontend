import clsx from 'clsx';
import React from 'react';
import { IReviewRoleType } from '../ReviewListSearch/ReviewListType';

function NavListItem({ role, setRole }: IReviewRoleType) {
  return (
    <div className="flex flex-col w-full msm:flex-row" role="group">
      <button
        onClick={() => {
          setRole(false);
        }}
        className={clsx(
          `text-c-black px-4 py-2 mx-0 outline-none w-full text-lg text-center transition duration-500 ease-in-out border-b hover:bg-gray-100`,
          {
            ['bg-gray-100']: !role,
            ['bg-inherit']: role,
          },
        )}>
        리뷰이
      </button>
      <button
        onClick={() => {
          setRole(true);
        }}
        className={clsx(
          `text-c-black px-4 py-2 mx-0 outline-none w-full text-lg text-center transition duration-500 ease-in-out border-b hover:bg-gray-100`,
          {
            ['bg-gray-100']: role,
            ['bg-inherit']: !role,
          },
        )}>
        리뷰어
      </button>
    </div>
  );
}

export default NavListItem;
