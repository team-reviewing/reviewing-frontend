import { IReviewerType } from '../Main/mainType';

export interface IReviewerModalResponseType extends IReviewerType {
  score: number;
}

export interface IReviewerScoreListType {
  page: number;
  size: number;
}

export interface IReviewerScoreListResponseType {
  evaluations: IEvaluationsType[];
}

export interface IEvaluationsType {
  id: number;
  username: string;
  imageUrl: string;
  score: number;
  content: string;
}

export interface IReviewerModalType {
  id: number;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}
