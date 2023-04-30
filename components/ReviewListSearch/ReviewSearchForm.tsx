import React, { useState } from 'react';
import ReviewInquireBox from './ReviewInquireBox';
import ReviewRoleButtonGroup from './ReviewRoleButtonGroup';
import { useGetRoleReviews } from './queries/getReviewsQuery';
import Loading from '../Commons/Loading';
import useRedirectInduce from '../../useHooks/useRedirectInduce';
import ReviewStatusButtonGroup from './ReviewStatusButtonGroup';

function ReviewSearchForm() {
  const [role, setRole] = useState<boolean>(false);
  const [reviewStatus, setReviewStatus] = useState<string>('WHOLE');
  const reviewRole = useGetRoleReviews({ role: role, status: reviewStatus });

  useRedirectInduce();

  if (reviewRole.isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex-cc-col">
      <ReviewRoleButtonGroup role={role} setRole={setRole} />
      <ReviewStatusButtonGroup status={reviewStatus} setStatus={setReviewStatus} />
      <div className="w-full flex-cc-col">
        {reviewRole.data?.reviews.map((review) => (
          <ReviewInquireBox
            key={review.id}
            role={role}
            id={review.id}
            title={review.title}
            member={review.member}
            reviewerId={review.reviewerId}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewSearchForm;
