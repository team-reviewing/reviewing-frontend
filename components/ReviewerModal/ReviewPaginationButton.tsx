import React, { ComponentProps } from 'react';
import { StrictPropsWithChildren } from '../Commons/commonsType';

function ReviewPaginationButton({ onClick, children }: StrictPropsWithChildren<ComponentProps<'button'>>) {
  return (
    <button
      className="flex items-center px-3 py-2 font-medium text-gray-900 transition-colors bg-white border rounded select-none hover:border-blue-600 hover:bg-black hover:text-white"
      onClick={onClick}>
      {children}
    </button>
  );
}

export default ReviewPaginationButton;
