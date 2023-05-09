import React from 'react';
import GuideContent from '../GuideContent';
import GuideImage from '../GuideImage';
import GuideSubTitle from '../GuideSubTitle';
import { ReviewGuideChooseImage } from './RevieweeGuideImageData';

const jobList = ['프론트엔드', '백엔드', '모바일', '기타'];

function RevieweeGuideSelect() {
  return (
    <div>
      <div className="w-full">
        <GuideSubTitle>리뷰어 선택</GuideSubTitle>
        <GuideContent>
          <div className="space-y-4">
            <p>
              리뷰 요청을 하기 위해서는 리뷰 요청을 할 직무 분야를 선택해야 합니다.
              <br />
              직무 분야는 <strong>{jobList.reduce((a, b) => ` ${a} ${b},`, '').slice(0, -1)}</strong>로 이루어져 있으며
              분야별 언어를 선택합니다. 언어는 총 <strong>3개</strong>까지 선택이 가능합니다.
              <br />
              <strong>직무 분야와 언어를 선택한 후 리뷰어를 선택하여 리뷰를 요청합니다.</strong>
            </p>
          </div>
          <GuideImage imageList={ReviewGuideChooseImage} />
        </GuideContent>
      </div>
    </div>
  );
}

export default RevieweeGuideSelect;
