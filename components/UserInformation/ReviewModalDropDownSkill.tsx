import clsx from 'clsx';
import Image from 'next/image';
import cancel from '../../styles/images/cancel.svg';
import { useState } from 'react';
import { ISkillType, IReviewModalDropDownSkillProps } from './informationType';
import { toast } from 'react-hot-toast';

const MAXSKILL = 3;

function ReviewModalDropDownSkill({ name, select, itemList, setState }: IReviewModalDropDownSkillProps) {
  const [drop, setDrop] = useState<boolean>(false);

  const deleteSkill = (delSkill: string) => {
    setState((prev) => {
      return prev.filter((el) => el.skill !== delSkill);
    });
  };

  const selectSkill = (skill: ISkillType) => {
    if (select.length === MAXSKILL) {
      setDrop((prev) => !prev);
      return toast.error('최대 3개까지 선택 가능합니다.');
    }
    setState((prev) => {
      return [skill, ...prev.filter((el) => el.id !== skill.id)];
    });
    setDrop((prev) => !prev);
  };

  return (
    <div>
      <span className="flex flex-col items-start w-full cursor-default">{name}</span>
      <div
        onClick={() => setDrop((prev) => !prev)}
        className="w-full h-10 p-2 border-2 border-solid cursor-pointer text-neutral300 rounded-radius-m">
        {`${name}을 선택해주세요.`}
      </div>
      {drop && (
        <ul
          className={clsx('w-full border-2 rounded-radius-m mt-0.5 overflow-y-auto h-44', {
            ['animate-down-animation']: true,
          })}>
          {itemList?.map((el) => {
            return (
              <li key={el.id} onClick={() => selectSkill(el)} className="p-2 cursor-pointer hover:bg-gray100">
                {el.skill}
              </li>
            );
          })}
        </ul>
      )}
      <div className="p-2 h-10 w-full border-solid border-2 rounded-radius-m mt-2.5 flex">
        {select?.map((el) => {
          return (
            <span className="flex items-center mr-3" key={el.id}>
              {el.skill}
              <Image
                src={cancel}
                alt="except"
                className="w-2 h-2 ml-1 cursor-pointer"
                onClick={() => deleteSkill(el.skill)}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewModalDropDownSkill;
