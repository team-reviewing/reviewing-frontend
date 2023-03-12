import React from 'react';

const categoryArray = ['백엔드', '프론트엔드', '모바일', '게임', '기타'];

function FilterCategory({ setCategory }: { setCategory: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="w-full flex flex-wrap font-bold border-b text-xl">
      {categoryArray.map((item: string, index: number) => {
        return (
          <div
            key={index}
            className="mr-3 tracking-wide cursor-pointer p-3 hover:border-b-2 hover:border-cyan-200"
            onClick={() => setCategory(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default FilterCategory;
