export interface IReviewDetailInfoApiPropsType {
  reviewerId: number;
  reviewId: number;
}

export interface IReviewModalPropsType {
  reviewId: number;
  reviewerId: number;
  userImage: string;
  username: string;
  role: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IReviewModalApiDetailType {
  id: number;
  reviewerId: number;
  title: string;
  content: string;
  prUrl: string;
  status: string;
}

export interface IReviewSectionProps {
  children: React.ReactNode;
  option?: string;
}

export interface IReviewModifyLinkProps extends Omit<IReviewModalApiDetailType, 'id'> {
  reviewId: number;
  username: string;
}
