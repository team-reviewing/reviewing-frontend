import React from 'react';
import { ICategoryTagButtonPropsType } from './mainType';
import { toast } from 'react-hot-toast';

function CategoryTagButton({ tag, setSelectTags }: ICategoryTagButtonPropsType) {
  const onClickTag = () => {
    setSelectTags((prev) => {
      if (prev.filter((item) => item.id === tag.id).length === 1) {
        return prev.filter((item) => item.id !== tag.id);
      } else {
        if (prev.length >= 3) {
          toast.error('태그는 3개까지 선택이 가능합니다.');
          return prev;
        } else {
          return prev.concat(tag);
        }
      }
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full hover:scale-110"
      onClick={onClickTag}>
      {tag && tag.name}
    </button>
  );
}

export default CategoryTagButton;
