import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { IFilterCategoryPropsType, ICategoryType, ITagType } from './mainType';
import CategoryTagBox from './CategoryTagBox';
import PickTagCard from './PickTagCard';

function FilterCategory({ setCategory, categories, setSelectedTags, selectedTags }: IFilterCategoryPropsType) {
  const [isClicked, setClicked] = useState<number>(1);

  const filterTag = (data: Pick<IFilterCategoryPropsType, 'categories'>) => {
    const filterData = data.categories?.filter((item: ICategoryType) => {
      if (item.id === isClicked) {
        return item;
      }
    });
    return filterData[0].tags;
  };

  useEffect(() => {
    setCategory(categories[0]);
  }, []);

  return (
    <>
      <div className="w-full flex flex-wrap font-bold border-b text-xl mb-3">
        {categories &&
          categories.map((item: ICategoryType) => {
            return (
              <div
                key={item.id}
                className={clsx(`mr-3 border-b-2 tracking-wide cursor-pointer p-3 text-gray500 hover:text-c-black`, {
                  ['border-b-cyan300']: item.id === isClicked,
                  ['border-b-transparent']: item.id !== isClicked,
                })}
                onClick={() => {
                  setCategory(item);
                  setClicked(item.id);
                }}>
                {item.name}
              </div>
            );
          })}
      </div>
      <div>{categories && <CategoryTagBox tags={filterTag({ categories })} setSelectTags={setSelectedTags} />}</div>

      {Array.isArray(selectedTags) && selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3">
          {selectedTags.map((v: ITagType) => (
            <PickTagCard key={v.id} tag={v} setSelectTags={setSelectedTags} />
          ))}
          <button
            onClick={() => {
              setSelectedTags([]);
            }}>
            태그 초기화
          </button>
        </div>
      )}
    </>
  );
}

export default FilterCategory;
