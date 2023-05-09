import React from 'react';
import ReviewerTemplate from './Reviewer/ReviewerTemplate';
import RevieweeTemplate from './Reviewee/RevieweeTemplate';

function ContentBox({ role }: { role: boolean }) {
  return <div className="w-full">{role ? <ReviewerTemplate /> : <RevieweeTemplate />}</div>;
}

export default ContentBox;
