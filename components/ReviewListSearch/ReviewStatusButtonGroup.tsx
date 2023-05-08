import React from 'react';
import clsx from 'clsx';
import { IStatusButtonGroupType } from './ReviewListType';

const StatusBtnObj = [
  {
    status: 'WHOLE',
    name: '전체',
  },
  {
    status: 'CREATED',
    name: '요청',
  },
  {
    status: 'ACCEPTED',
    name: '수락',
  },
  {
    status: 'REFUSED',
    name: '거절',
  },
  {
    status: 'APPROVED',
    name: '완료',
  },
];

function ReviewStatusButtonGroup({ status, setStatus }: IStatusButtonGroupType) {
  return (
    <div className="flex justify-center gap-3 mt-4 text-lg rounded-radius-m" role="group">
      {StatusBtnObj.map((item) => (
        <button
          key={item.name}
          onClick={() => setStatus(item.status)}
          className={clsx(
            `px-4 py-2 mr-1 font-bold bg-black rounded-md cursor-pointer text-c-white hover:scale-110 hover:bg-blue500`,
            {
              ['bg-blue500']: status === item.status,
              ['bg-c-black']: status !== item.status,
            },
          )}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default ReviewStatusButtonGroup;
