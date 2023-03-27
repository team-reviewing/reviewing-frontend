import React, { useState } from 'react';
import ReviewInquireBox from './ReviewInquireBox';
import ReviewModeButtonGroup from './ReviewRoleButtonGroup';
import { useGetRoleReviews } from './queries/getReviewsQuery';
import Loading from '../Loading';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/userState';
import { useRouter } from 'next/router';

function ReviewSearchForm() {
  const [role, setRole] = useState<boolean>(false);
  const reviewRole = useGetRoleReviews(role);
  const user = useRecoilValue(userState);
  const router = useRouter();

  if (reviewRole.isLoading) {
    return <Loading />;
  }

  if (!user) {
    router.push('/');
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
            reviewer={review.reviewer && review.reviewer}
            reviewee={review.reviewee && review.reviewee}
          />
        ))}
      </div>
    </div>
  );
}

export default ReviewSearchForm;
