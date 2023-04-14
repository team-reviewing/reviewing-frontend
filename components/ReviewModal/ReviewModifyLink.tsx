import Link from 'next/link';
import { IReviewModifyLinkProps } from './reviewModalType';

function ReviewModifyLink({ reviewId, title, content, prUrl, reviewerId, username }: IReviewModifyLinkProps) {
  return (
    <Link
      className="w-full h-10 flex-cc bg-c-black text-c-white rounded-radius-m"
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
