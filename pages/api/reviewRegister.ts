import { IReviewModifyApiType, IReviewRegisterApiType } from '../../components/ReviewRegister/ReviewRegisterType';
import instance from './core';

export const reviewRegister = async (registerForm: IReviewRegisterApiType) => {
  const reviewRegsiter = await instance.post(
    `/reviewers/${registerForm.reviewerId}/reviews`,
    {
      title: registerForm.title,
      content: registerForm.content,
      prUrl: registerForm.prUrl,
    },
    { withCredentials: true },
  );
  return reviewRegsiter;
};

export const reviewModify = async (modifyForm: IReviewModifyApiType) => {
  const reviewModify = await instance.patch(
    `/reviewers/${modifyForm.reviewerId}/reviews/${modifyForm.reviewId}`,
    {
      content: modifyForm.content,
    },
    { withCredentials: true },
  );
  return reviewModify;
};
