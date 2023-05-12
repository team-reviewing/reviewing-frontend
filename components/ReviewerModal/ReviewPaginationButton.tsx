import React from 'react';
import { IReviewerPaginationButtonType } from './reviewerModalType';

function ReviewPaginationButton({ handler, children }: IReviewerPaginationButtonType) {
  return (
    <button
      className="flex items-center px-3 py-2 font-medium text-gray-900 transition-colors bg-white border rounded select-none hover:border-blue-600 hover:bg-black hover:text-white"
      onClick={handler}>
      {children}
    </button>
  );
}

export default ReviewPaginationButton;
