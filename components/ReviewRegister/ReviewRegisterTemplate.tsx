import RegisterForm from './RegisterForm';
import { IRegisterPropsType } from './ReviewRegisterType';

function ReviewRegisterTemplate({ reviewerInfo }: IRegisterPropsType) {
  return (
    <div className="h-full m-auto max-w-5xl mt-4">
      <RegisterForm
        reviewerId={reviewerInfo.reviewerId}
        reviewerName={reviewerInfo.reviewerName}
        content={reviewerInfo.content}
        title={reviewerInfo.title}
        prUrl={reviewerInfo.prUrl}
        reviewId={reviewerInfo.reviewId}
      />
    </div>
  );
}

export default ReviewRegisterTemplate;
