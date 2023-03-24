interface IReviewSectionProps {
  children: React.ReactNode;
  option?: string;
}

function ReviewSection({ children, option }: IReviewSectionProps) {
  return <div className={`mt-6 ${option ? option : ''}`}>{children}</div>;
}

export default ReviewSection;
