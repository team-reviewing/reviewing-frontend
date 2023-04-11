import React, { useEffect, useState } from 'react';
import FilterCategory from './FilterCategory';
import ReviewerBox from './ReviewerBox';
import useSetLocalPath from '../../useHooks/useSetLocalPath';
import { ITagType, ICategoryType, ICategoriesType } from './mainType';
import { getCategories } from '../../pages/api/main';
import { toast } from 'react-hot-toast';

function Template() {
  const [category, setCategory] = useState<ICategoryType | undefined>();
  const [selectedTags, setSelectedTags] = useState<ITagType[]>([]);
  const [data, setData] = useState<ICategoriesType>();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await getCategories();
        setData(res);
      } catch (err) {
        toast.error('카테고리 요청에 실패했습니다.');
      }
    };

    getCategory();
  }, []);

  useSetLocalPath();

  return (
    <div className="w-full h-full max-w-7xl mx-8">
      {data && (
        <>
          <FilterCategory
            setCategory={setCategory}
            categories={data.categories}
            setSelectedTags={setSelectedTags}
            selectedTags={selectedTags}
          />
          {category && <ReviewerBox category={category} selectedTags={selectedTags} />}
        </>
      )}
    </div>
  );
}

export default Template;
