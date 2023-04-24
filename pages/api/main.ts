import { ICategoriesType, IReviewersRequestType, IGetReivewersType } from '../../components/Main/mainType';
import qs from 'qs';
import instance from './core';
import axios from 'axios';

export const getCategories = async () => {
  const response = await axios.get<ICategoriesType>(`${process.env.NEXT_PUBLIC_BACK_API}/tags`);
  return response;
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
