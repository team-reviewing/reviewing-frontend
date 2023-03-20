import React from 'react';
import { ICategoryTagButtonPropsType } from './mainType';

function PickTagCard({ tag, setSelectTags }: ICategoryTagButtonPropsType) {
  const onClickDeleteTag = () => {
    setSelectTags((prev) => {
      return prev.filter((item) => item.id !== tag.id);
    });
  };

  return (
    <div
      className="mr-1 bg-slate-200 text-black font-bold py-2 px-4 rounded-full hover:scale-110 cursor-pointer"
      onClick={onClickDeleteTag}>
      <span className="mr-2">{tag.name}</span>
      <button>x</button>
    </div>
  );
}

export default PickTagCard;
