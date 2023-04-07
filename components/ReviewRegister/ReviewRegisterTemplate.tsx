import RegisterForm from './RegisterForm';
import { IRegisterPropsType } from './ReviewRegisterType';
import useSetLocalPath from '../../useHooks/useSetLocalPath';

function ReviewRegisterTemplate({ reviewerInfo }: IRegisterPropsType) {
  useSetLocalPath();

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
