import Image from 'next/image';
import { IReviewInquireBoxContentType, ReviewCommonWithRole } from './ReviewListType';
import ReviewSuccessRateBox from '../ReviewRate/ReviewSuccessRateBox';

function ReviewInquireBoxContent({
  id,
  reviewerId,
  imageUrl,
  username,
  title,
  status,
  role,
}: ReviewCommonWithRole<IReviewInquireBoxContentType>) {
  return (
    <div className="flex justify-between w-full pr-3">
      <div className="flex items-center w-full">
        <figure>
          <Image src={imageUrl} alt="userProfile" width={40} height={40} className="rounded-radius-50% m-3" />
        </figure>
        <div className="flex flex-col items-start w-full">
          <span className="flex justify-end flex-1 pr-2 text-neutral400">{username}</span>
          <span className="w-full text-lg line-clamp-1 flex-[2]">{title}</span>
        </div>
      </div>
      <div className="w-full max-w-[4rem] flex items-center ">
        {role
          ? status === 'EVALUATED' && <ReviewSuccessRateBox reviewerId={reviewerId} reviewId={id} status={status} />
          : (status === 'APPROVED' || status === 'EVALUATED') && (
              <ReviewSuccessRateBox reviewerId={reviewerId} reviewId={id} status={status} />
            )}
      </div>
    </div>
  );
}

export default ReviewInquireBoxContent;
