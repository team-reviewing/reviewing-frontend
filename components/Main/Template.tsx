import React, { useState } from 'react';
import FilterCategory from './FilterCategory';
import ReviewerBox from './ReviewerBox';
import useSetLocalPath from '../../useHooks/useSetLocalPath';
import { ITagType, ICategoryType, ICategoriesType } from './mainType';

function Template({ categories }: ICategoriesType) {
  const [category, setCategory] = useState<ICategoryType | undefined>();
  const [selectedTags, setSelectedTags] = useState<ITagType[]>([]);

  useSetLocalPath();

  return (
    <div className="w-full h-full max-w-7xl mx-8">
      {
        <>
          <FilterCategory
            setCategory={setCategory}
            categories={categories}
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
          />
          {category && <ReviewerBox category={category} selectedTags={selectedTags} />}
        </>
      }
    </div>
  );
}

export default Template;
