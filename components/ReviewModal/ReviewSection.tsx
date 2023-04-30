import { IReviewSectionProps } from './reviewModalType';

function ReviewSection({ children, option }: IReviewSectionProps) {
  return <div className={`mt-6 ${option ? option : ''}`}>{children}</div>;
}

export default ReviewSection;
