import React from 'react';
import { IReviewRoleType } from '../ReviewListSearch/ReviewListType';
import NavListItem from './NavListItem';

function NavListBox({ role, setRole }: IReviewRoleType) {
  return (
    <div className="flex flex-col w-60 msm:flex-row msm:w-full msm:justify-center">
      <div className="w-full pt-12 pb-12 pl-4 pr-4 text-2xl text-center text-white bg-black whitespace-nowrap msm:text-lg msm:pt-2 msm:pb-2 msm:w-40 msm:pr-4 msm:pl-4">
        가이드
      </div>
      <div className="">
        <NavListItem role={role} setRole={setRole} />
      </div>
    </div>
  );
}

export default NavListBox;
