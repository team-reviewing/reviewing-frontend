import React from 'react';
import CategoryTagButton from './CategoryTagButton';
import { ITagType, ICategoryTagBoxPropsType } from './mainType';

function CategoryTagBox({ tags, setSelectTags }: ICategoryTagBoxPropsType) {
  return (
    <div className="w-full flex flex-wrap gap-3">
      {tags.length &&
        tags.map((item: ITagType) => <CategoryTagButton tag={item} key={item.id} setSelectTags={setSelectTags} />)}
    </div>
  );
}

export default CategoryTagBox;
