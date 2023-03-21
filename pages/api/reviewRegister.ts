import axios from 'axios';
import { IReviewRegisterApiType } from '../../components/ReviewRegister/ReviewRegisterType';

export const reviewRegister = async (registerForm: IReviewRegisterApiType) => {
  const reviewRegsiter = await axios.post(`http://localhost:3000/reviewers/${registerForm.id}/reviews`, registerForm);
  return reviewRegsiter;
};
