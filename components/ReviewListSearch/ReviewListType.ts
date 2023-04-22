export interface IStatusType {
  status: string;
}

export interface IReviewType extends IStatusType {
  id: number;
  title: string;
  reviewerId: number;
}

export interface IUserReviewType extends IReviewType {
  member: IReviewCommonType;
}

export interface IReviewsType {
  reviews: IUserReviewType[];
}

export interface IReviewCommonType {
  id: number;
  username: string;
  imageUrl: string;
}

export interface IReviewRoleType {
  role: boolean;
  setRole: React.Dispatch<React.SetStateAction<boolean>>;
}

export type ReviewCommonWithRole<T> = T & Omit<IReviewRoleType, 'setRole'>;

export interface IGetReivewWithRoleType extends IStatusType {
  role: boolean;
}

export interface IStatusButtonGroupType extends IStatusType {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}
