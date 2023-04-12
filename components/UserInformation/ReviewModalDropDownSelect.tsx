import clsx from 'clsx';
import { useState } from 'react';
import { ReviewModalDropDownSelectProps } from './informationType';

function ReviewModalDropDownSelect({ name, select, setState, itemList, register }: ReviewModalDropDownSelectProps) {
  const [drop, setDrop] = useState<boolean>(false);

  const selectReviewerInformationHandler = (selectData: string) => {
    setState(selectData);
    setDrop((prev) => !prev);
  };

  return (
    <div>
      <span className="w-full flex flex-col items-start cursor-default">{name}</span>
      <div
        onClick={() => setDrop((prev) => !prev)}
        className="text-c-black p-2 h-10 w-full border-solid border-2 rounded-radius-m cursor-pointer">
        {select ? select : `자신의 ${name}을 선택해주세요.`}
      </div>

      {drop && (
        <ul
          className={clsx('w-full border-2 rounded-radius-m mt-0.5 overflow-y-auto h-44', {
            ['animate-down-animation']: true,
          })}>
          {itemList?.map((el, idx) => {
            return (
              <li
                key={idx}
                onClick={() => selectReviewerInformationHandler(el)}
                className="p-2 cursor-pointer hover:bg-gray100">
                {el}
              </li>
            );
          })}
        </ul>
      )}
      {select === '기타' && register && (
        <div className="p-2 h-10 w-full border-solid border-2 rounded-radius-m mt-2.5">
          <input className="focus:outline-none w-full" type="text" {...register('etc')} />
        </div>
      )}
    </div>
  );
}

export default ReviewModalDropDownSelect;
