import React, { useState } from 'react';
import ReviewInquireBox from './ReviewInquireBox';
import ReviewModeButtonGroup from './ReviewRoleButtonGroup';
import { useGetRoleReviews } from './queries/getReviewsQuery';
import Loading from '../Commons/Loading';
import useRedirectInduce from '../../useHooks/useRedirectInduce';

function ReviewSearchForm() {
  const [role, setRole] = useState<boolean>(false);
  const reviewRole = useGetRoleReviews(role);

  useRedirectInduce();

  if (reviewRole.isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex-cc-col">
      <ReviewModeButtonGroup role={role} setRole={setRole} />
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
