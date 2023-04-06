import React, { useState } from 'react';
import ReviewInquireBox from './ReviewInquireBox';
import ReviewModeButtonGroup from './ReviewRoleButtonGroup';
import { useGetRoleReviews } from './queries/getReviewsQuery';
import Loading from '../Loading';
import useRedirectInduce from '../../useHooks/useRedirectInduce';

function ReviewSearchForm() {
  const [role, setRole] = useState<boolean>(false);
  const reviewRole = useGetRoleReviews(role);

  useRedirectInduce();

  if (reviewRole.isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <ReviewModeButtonGroup role={role} setRole={setRole} />
      <div className="w-full flex justify-center items-center flex-col">
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
