import { AxiosResponse } from 'axios';

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

export interface ISkillType {
  id: number;
  skill: string;
}

export interface IReviewerDropDownPropsType {
  name: string;
  dropList: string[] | ISkillType[];
  select: string | ISkillType[];
  setSelect: React.Dispatch<React.SetStateAction<string | ISkillType[]>>;
  etc?: string;
  setEtc?: React.Dispatch<React.SetStateAction<string>>;
  ment: string;
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

export interface IRegisterListOption {
  positionList: string[];
  careerList: string[];
  techList: ISkillType[];
}

export interface IRegister extends IReviewerRegisterDataType, IRegisterListOption {}

export interface IUserGetType {
  userInfo: UserType;
}

export interface UserPageProps {
  data: IUserGetType;
}

export interface IRegisterMutationProps {
  register: IReviewerRegisterUpdateType;
  mutationFnCb: (regi: IReviewerRegisterUpdateType) => Promise<AxiosResponse<any, any>>;
}
