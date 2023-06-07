import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../atoms/userState';
import { getReviewers } from '../../../pages/api/main';
import { IReviewersRequestType, IReviewerQueryType } from '../mainType';

const REVIEWER_KEY = 'reviewer';

function useGetReviewers(params: IReviewersRequestType, options: IReviewerQueryType) {
  const user = useRecoilValue(userState);
  return useInfiniteQuery(
    [REVIEWER_KEY, params],
    ({ pageParam = 0 }) => getReviewers({ size: 9, page: pageParam, ...params }),
    {
      retry: false,
      staleTime: 1000 * 20,
      select: (num) => {
        return {
          ...num,
          pages: num.pages.map((v) => {
            return { ...v, reviewers: v.reviewers.filter((v2) => v2.username !== user?.username) };
          }),
        };
      },
      ...options,
    },
  );
}

export default useGetReviewers;
