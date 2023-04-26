import { UseFormRegister } from 'react-hook-form';
import { SetterOrUpdater } from 'recoil';

export interface IRegisterInputType {
  name: string;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  disable?: boolean;
}

export interface IModalPropsType {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserUpdateType {
  username: string;
  email: string;
}

export interface IUserType extends IUserUpdateType {
  imageUrl: string;
  profileUrl: string;
  isReviewer: boolean;
}
export interface IUserInformationType extends IUserType {
  reviewerRegister: boolean;
}

export interface ISkillType {
  id: number;
  name: string;
}

export interface IReviewerRegisterUpdateType {
  job: string;
  career: string;
  techStack: number[];
  introduction: string;
}

export interface IReviewerRegisterDataType extends Omit<IReviewerRegisterUpdateType, 'techStack'> {
  techStack: ISkillType[];
}

export interface IRegisterListOption {
  jobList: string[];
  careerList: string[];
  tagList: ISkillType[];
}

export interface IRegister extends IReviewerRegisterDataType, IRegisterListOption {}

export interface IUserPageProps {
  data: IUserInformationType;
  setUser: SetterOrUpdater<IUserInformationType | null>;
}

export interface IReviewModalHookFormType {
  etc: string;
  introduction: string;
}

export interface IReviewModalDropDownSelectProps {
  name: string;
  itemList: string[];
  setState: React.Dispatch<React.SetStateAction<string>>;
  select: string;
  register?: UseFormRegister<IReviewModalHookFormType>;
}

export interface IReviewModalDropDownSkillProps {
  name: string;
  itemList: ISkillType[];
  select: ISkillType[];
  setState: React.Dispatch<React.SetStateAction<ISkillType[]>>;
}

export interface ReviewerMutationType extends IModalPropsType {
  setRecoil: SetterOrUpdater<IUserInformationType | null>;
}
