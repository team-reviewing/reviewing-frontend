import React, { useState } from 'react';
import FilterCategory from './FilterCategory';
import CategoryBox from './CategoryBox';
import useSetLocalPath from '../../useHooks/useSetLocalPath';

function Template() {
  const [category, setCategory] = useState<string>('');
  useSetLocalPath();
  return (
    <div className="w-full h-full max-w-7xl">
      <FilterCategory setCategory={setCategory} />
      <CategoryBox category={category} />
    </div>
  );
}

export default Template;
