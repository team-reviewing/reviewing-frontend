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
  userName: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISkillType {
  id: number;
  skill: string;
}

export interface IReviewerRegisterUpdateType {
  job: string;
  career: string;
  techStack: number[];
  introduce: string;
}

export interface IReviewerRegisterDataType extends Omit<IReviewerRegisterUpdateType, 'techStack'> {
  techStack: ISkillType[];
}

export interface IUserUpdateType {
  username: string;
  email: string;
}

export interface UserType extends IUserUpdateType {
  imageUrl: string;
  profileUrl: string;
  isReviewer: boolean;
}
export interface UserInformationType extends UserType {
  reviewerRegister: boolean;
}

export interface IRegisterListOption {
  positionList: string[];
  careerList: string[];
  techList: ISkillType[];
}

export interface IRegister extends IReviewerRegisterDataType, IRegisterListOption {}

export interface UserPageProps {
  data: UserInformationType;
  setUser: SetterOrUpdater<UserInformationType | null>;
}

export interface ReviewModalHookFormType {
  etc: string;
  introduce: string;
}

export interface ReviewModalDropDownSelectProps {
  name: string;
  itemList: string[];
  setState: React.Dispatch<React.SetStateAction<string>>;
  select: string;
  register?: UseFormRegister<ReviewModalHookFormType>;
}

export interface ReviewModalDropDownSkillProps {
  name: string;
  itemList: ISkillType[];
  select: ISkillType[];
  setState: React.Dispatch<React.SetStateAction<ISkillType[]>>;
}

export type useReviewerQueryType = Pick<IModalPropsType, 'userName'>;

export type useReviewerMutationType = Pick<IModalPropsType, 'setModal'>;
