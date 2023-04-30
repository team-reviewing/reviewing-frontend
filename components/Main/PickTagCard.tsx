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
      className="px-4 py-2 mr-1 font-bold rounded-full cursor-pointer bg-gray200 text-c-black hover:scale-110"
      onClick={onClickDeleteTag}>
      <span className="mr-2">{tag.name}</span>
      <button>x</button>
    </div>
  );
}

export default PickTagCard;
