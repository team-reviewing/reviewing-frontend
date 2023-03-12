import React, { useEffect } from 'react';
import clsx from 'clsx';
import CategoryCard from './CategoryCard';

function CategoryBox({ category }: { category: string }) {
  // const [isInitialLoading, setIsInitialLoading] = useState<boolean>(false);
  // 명세서 나오면 useInfiniteQueries 사용 예정
  const isInitialLoading = false;

  useEffect(() => {
    if (category.length > 0) {
      console.log(category);
    }
  }, [category]);

  return (
    <div
      className={clsx(`w-full h-full mt-6`, {
        ['grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4']: !isInitialLoading,
        ['flex justify-center items-center']: isInitialLoading,
      })}>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
}

export default CategoryBox;
