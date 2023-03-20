import axios from 'axios';
import { ICategoriesType, IReviewersRequestType, IGetReivewersType } from '../../components/Main/mainType';
import qs from 'qs';

export const getCategories = async () => {
  const response = await axios.get('http://localhost:3000/tags');
  const data: ICategoriesType = response.data;
  return data;
};

export const getReviewers = async (params: IReviewersRequestType) => {
  const response = await axios.get('http://localhost:3000/reviewers', {
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
