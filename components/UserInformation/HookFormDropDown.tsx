import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IHookDropDownType, ISkillType } from './informationType';
import cancel from '../../styles/images/cancel.svg';

function HookFormDropDown({ name, dropList, regiId, ment, setValue, watch, register }: IHookDropDownType) {
  const [drop, setDrop] = useState<boolean>(false);

  const isArray = (isarr: string | ISkillType[]): isarr is ISkillType[] => {
    return Array.isArray(isarr);
  };

  const isSkill = (skill: string | ISkillType): skill is ISkillType => {
    return typeof skill === 'object';
  };

  const isString = (str: string | ISkillType[]): str is string => {
    return str.length > 0 && typeof str === 'string';
  };

  const selectSkillList = (arr: string | ISkillType[]): ISkillType[] => {
    return isArray(arr) ? arr : [];
  };

  const deleteSkill = (el: string) => {
    const previous = watch(regiId);
    if (isArray(previous)) {
      setValue(
        regiId,
        previous.filter((v) => v.skill !== el),
      );
    }
  };

  const selectSkill = (el: string | ISkillType) => {
    if (isSkill(el)) {
      const previous = watch(regiId);
      if (isArray(previous)) {
        if (previous.length === 3) {
          toast.error('최대 3개까지 선택 가능합니다.');
        } else {
          setValue(regiId, [el, ...previous.filter((v) => v.id !== el.id)]);
        }
      }
    } else {
      setValue(regiId, el);
    }
    setDrop(false);
  };

  useEffect(() => {
    if (watch('job') === '기타') {
      setValue('etc', '');
    }
  }, [watch('job')]);

  return (
    <div className="mt-6">
      <span className="w-full flex flex-col items-start cursor-default">{name}</span>
      <div
        onClick={() => setDrop((prev) => !prev)}
        className={clsx('p-2 h-10 w-full border-solid border-2 rounded-radius-m cursor-pointer', {
          ['text-c-black']: isString(watch(regiId)),
          ['text-neutral300']: !isString(watch(regiId)),
        })}>
        {`${isString(watch(regiId)) ? watch(regiId) : ment}`}
      </div>
      {drop && (
        <ul
          className={clsx('w-full border-2 rounded-radius-m mt-0.5 overflow-y-auto h-44', {
            ['animate-down-animation']: true,
          })}>
          {dropList.map((el) => {
            return (
              <li
                key={isSkill(el) ? el.id : el}
                onClick={() => {
                  selectSkill(el);
                }}
                className="p-2 cursor-pointer hover:bg-gray100">
                {isSkill(el) ? el.skill : el}
              </li>
            );
          })}
        </ul>
      )}
      {Array.isArray(watch(regiId)) && watch(regiId).length > 0 && (
        <div className="p-2 h-10 w-full border-solid border-2 rounded-radius-m mt-2.5 flex">
          {selectSkillList(watch(regiId)).map((el) => {
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
      {watch('job') === '기타' && register && (
        <div className="p-2 h-10 w-full border-solid border-2 rounded-radius-m mt-2.5">
          <input className="focus:outline-none w-full" type="text" {...register('etc')} />
        </div>
      )}
    </div>
  );
}

export default HookFormDropDown;
