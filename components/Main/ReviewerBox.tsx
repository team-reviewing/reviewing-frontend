import React, { useEffect } from 'react';
import clsx from 'clsx';
import ReviewerCard from './ReviewerCard';
import { ICategoryBoxPropsType, IGetReivewersType } from './mainType';
import { useInView } from 'react-intersection-observer';
import useGetReviewers from './queries/getReviewersQuery';
import Loading from '../Commons/Loading';

function ReviewerBox({ category, selectedTags }: ICategoryBoxPropsType) {
  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage, isInitialLoading } = useGetReviewers(
    {
      category: category.id,
      tag: selectedTags.map((item) => item.id),
    },
    {
      getNextPageParam: (lastPage: IGetReivewersType) => {
        return lastPage.hasNext ? lastPage.currentPage + 1 : undefined;
      },
    },
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === 'loading') {
    return <Loading />;
  }

  return (
    <>
      <div
        className={clsx(`wh-f mt-6`, {
          ['grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5']: !isInitialLoading,
        })}>
        {data &&
          data.pages.map(({ reviewers }) =>
            reviewers.map((item) => <ReviewerCard key={item.id} reviewerProps={item} />),
          )}
      </div>
      {isFetchingNextPage ? (
        <div className="w-full h-20">
          <Loading />
        </div>
      ) : (
        <div ref={ref}></div>
      )}
    </>
  );
}

export default ReviewerBox;
