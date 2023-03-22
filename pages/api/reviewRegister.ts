import axios from 'axios';
import { IReviewModifyApiType, IReviewRegisterApiType } from '../../components/ReviewRegister/ReviewRegisterType';

export const reviewRegister = async (registerForm: IReviewRegisterApiType) => {
  const reviewRegsiter = await axios.post(`http://localhost:3000/reviewers/${registerForm.reviewerId}/reviews`, {
    title: registerForm.title,
    content: registerForm.content,
    prUrl: registerForm.prUrl,
  });
  return reviewRegsiter;
};

export const reviewModify = async (modifyForm: IReviewModifyApiType) => {
  const reviewModify = await axios.patch(
    `http://localhost:3000/reviewers/${modifyForm.reviewerId}/reviews/${modifyForm.reviewId}`,
    { content: modifyForm.content },
  );
  return reviewModify;
};
