import React from 'react';
import GuideTitle from '../GuideTitle';
import GuideTitleMent from '../GuideTitleMent';
import RevieweeGuideSelect from './RevieweeGuideSelect';
import RevieweeGuideRequest from './RevieweeGuideRequest';

// 타이틀, 카테고리 및 태그 선택, 리뷰 요청, 리뷰 수정, 요청한 리뷰 확인
function RevieweeTemplate() {
  return (
    <div className="space-y-10">
      <GuideTitle>Reveiwee 가이드</GuideTitle>
      <GuideTitleMent>Reviewee 활동은 로그인 후 이용할 수 있습니다.</GuideTitleMent>
      <RevieweeGuideSelect />
      <RevieweeGuideRequest />
    </div>
  );
}

export default RevieweeTemplate;
