import GuideTitle from '../GuideTitle';
import GuideTitleMent from '../GuideTitleMent';
import ReviewerGuideRegister from './ReviewerGuideRegister';
import ReviewerGuideReviewList from './ReviewerGuideReviewList';

function Template() {
  return (
    <div className="space-y-10">
      <GuideTitle>Reveiwer 가이드</GuideTitle>
      <GuideTitleMent>
        Reviewer 활동은 로그인이 필요하며 리뷰어 등록을 하면 리뷰 신청을 받을 수 있습니다.
      </GuideTitleMent>
      <ReviewerGuideRegister />
      <ReviewerGuideReviewList />
    </div>
  );
}

export default Template;
