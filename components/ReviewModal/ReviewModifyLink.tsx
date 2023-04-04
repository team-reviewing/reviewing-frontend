import Link from 'next/link';
import { IReviewModifyLinkProps } from './reviewModalType';

function ReviewModifyLink({ reviewId, title, content, prUrl, reviewerId, username }: IReviewModifyLinkProps) {
  return (
    <Link
      className="w-full flex justify-center items-center bg-c-black text-c-white h-10 rounded-radius-m"
      href={{
        pathname: '/register',
        query: {
          reviewId: reviewId,
          title: title,
          content: content,
          prUrl: prUrl,
          reviewerId: reviewerId,
          username: username,
        },
      }}>
      리뷰 수정
    </Link>
  );
}

export default ReviewModifyLink;
