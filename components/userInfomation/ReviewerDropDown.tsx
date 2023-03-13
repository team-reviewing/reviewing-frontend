import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IReviewerDropDownPropsType, ISkillType } from './informationType';
import cancel from '../userInfomation/Vector.svg';
import { toast } from 'react-hot-toast';
function ReviewerDropDown({ name, dropList, ment, select, etc, setEtc, setSelect }: IReviewerDropDownPropsType) {
  const [drop, setDrop] = useState<boolean>(false);

  // array 타입가드 함수
  const isArray = (isarr: string | ISkillType[]): isarr is ISkillType[] => {
    return Array.isArray(isarr);
  };
  // string 타입가드 함수
  const isString = (str: string | ISkillType[]): str is string => {
    return str.length > 0 && typeof str === 'string';
  };
  // skill 타입가드 함수
  const isSkill = (skill: string | ISkillType): skill is ISkillType => {
    return typeof skill === 'object';
  };
  // skill 선택 함수
  const selectSkill = (el: string | ISkillType) => {
    if (isSkill(el)) {
      setSelect((prev) => {
        if (isArray(prev)) {
          if (prev.length === 3) {
            toast.error('최대 3개 선택 가능합니다.');
            return prev;
          } else {
            return prev.map((v) => v.id).includes(el.id)
              ? [el, ...prev.filter((val) => val.id !== el.id)]
              : [el, ...prev];
          }
        } else {
          return prev;
        }
      });
    } else {
      setSelect(el);
    }
    setDrop(false);
  };
  // skill 삭제 함수
  const deleteSkill = (el: string) => {
    setSelect((prev) => {
      if (isArray(prev)) {
        return prev.filter((val) => val.skill !== el);
      } else {
        return prev;
      }
    });
  };

  useEffect(() => {
    if (etc !== '' && setEtc) {
      setEtc('');
    }
  }, [select]);

  return (
    <div className="mt-6">
      <span className="w-full flex flex-col items-start cursor-default">{name}</span>
      <div
        id="select"
        onClick={() => setDrop((prev) => !prev)}
        className={clsx('p-2 h-10 w-full border-solid border-2 rounded-md cursor-pointer text-[#a9a9a9]', {
          ['text-black']: isString(select),
        })}>
        {isString(select) ? select : ment}
      </div>
      {drop && (
        <ul
          className={clsx('w-full border-2 rounded-md mt-0.5 overflow-y-auto h-44', {
            ['animate-down-animation']: drop,
          })}>
          {dropList.map((el) => {
            return (
              <li
                className="p-2 cursor-pointer hover:bg-slate-100"
                onClick={() => selectSkill(el)}
                key={isSkill(el) ? el.id : el}>
                {isSkill(el) ? el.skill : el}
              </li>
            );
          })}
        </ul>
      )}
      {isArray(select) && select.length > 0 && (
        <div className="p-2 h-10 w-full border-solid border-2 rounded-md mt-2.5 flex">
          {select.map((el) => {
            return (
              <span className="mr-3 flex items-center" key={el.id}>
                {el.skill}
                <Image
                  src={cancel}
                  alt="except"
                  className="cursor-pointer w-2 h-2 ml-1"
                  onClick={() => deleteSkill(el.skill)}
                />
              </span>
            );
          })}
        </div>
      )}
      {select === '기타' && (
        <div className="p-2 h-10 w-full border-solid border-2 rounded-md mt-2.5">
          <input
            className="focus:outline-none w-full"
            type="text"
            onChange={(e) => {
              if (setEtc) {
                setEtc(e.currentTarget.value);
              }
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ReviewerDropDown;
