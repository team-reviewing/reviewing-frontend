import clsx from 'clsx';
import { useState } from 'react';
import { IReviewModalDropDownSelectProps } from './informationType';

function ReviewModalDropDownSelect({ name, select, setState, itemList, register }: IReviewModalDropDownSelectProps) {
  const [drop, setDrop] = useState<boolean>(false);

  const selectReviewerInformationHandler = (selectData: string) => {
    setState(selectData);
    setDrop((prev) => !prev);
  };

  return (
    <div>
      <span className="flex flex-col items-start w-full cursor-default">{name}</span>
      <div
        onClick={() => setDrop((prev) => !prev)}
        className="w-full h-10 p-2 border-2 border-solid cursor-pointer text-c-black rounded-radius-m">
        {select ? select : `자신의 ${name}을 선택해주세요.`}
      </div>

      {drop && (
        <ul
          className={clsx('w-full border-2 rounded-radius-m mt-0.5 overflow-y-auto h-44', {
            ['animate-down-animation']: true,
          })}>
          {itemList?.map((el) => {
            return (
              <li
                key={el}
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
          <input className="w-full focus:outline-none" type="text" {...register('etc')} />
        </div>
      )}
    </div>
  );
}

export default ReviewModalDropDownSelect;
