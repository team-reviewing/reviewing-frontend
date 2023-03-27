import axios from 'axios';
import { IReviewsType } from '../../components/ReviewListSearch/ReviewListType';

export const getReviewsRole = async (role: boolean) => {
  const params = !role ? { role: 'reviewee' } : { role: 'reviewer' };
  const response = await axios.get<IReviewsType>('http://localhost:3000/reviews', {
    withCredentials: true,
    params: params,
  });
  return response.data;
};
