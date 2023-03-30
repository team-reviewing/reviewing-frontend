import { ICategoriesType, IReviewersRequestType, IGetReivewersType } from '../../components/Main/mainType';
import qs from 'qs';
import instance from './core';

export const getCategories = async () => {
  const response = await instance.get('/tags');
  const data: ICategoriesType = response.data;
  return data;
};

export const getReviewers = async (params: IReviewersRequestType) => {
  const response = await instance.get('/reviewers', {
    params,
    paramsSerializer: {
      serialize: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
      },
    },
  });
  const data: IGetReivewersType = Object.assign(response.data, { currentPage: params.page });
  return data;
};
