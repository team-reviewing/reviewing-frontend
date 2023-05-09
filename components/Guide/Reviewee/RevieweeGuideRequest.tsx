import React from 'react';
import GuideContent from '../GuideContent';
import GuideImage from '../GuideImage';
import GuideSubTitle from '../GuideSubTitle';
import { ReviewGuideRequestModifyImage } from './RevieweeGuideImageData';

function RevieweeGuideRequest() {
  return (
    <div>
      <div className="w-full">
        <GuideSubTitle>리뷰 요청 및 수정하기</GuideSubTitle>
        <GuideContent>
          <div className="space-y-4">
            <p>
              <strong>리뷰 타이틀, 리뷰 요청 내용, Github PR 주소</strong> 정보는 필수 입력 정보입니다.
              <br />
              필수 입력 정보를 입력한 후 <strong>요청</strong>버튼을 클릭하여 리뷰를 요청합니다.
              <br />
              만약 요청 후 리뷰를 수정하고 싶은 경우에는 <strong>요청한 리뷰</strong>에서 클릭하여 요청한 리뷰를 수정할
              수 있습니다.
              <br />
              수정을 하는 경우에는 <strong>리뷰요청 상세내용</strong>만 수정이 가능합니다.
            </p>
          </div>
          <GuideImage imageList={ReviewGuideRequestModifyImage} />
        </GuideContent>
      </div>
    </div>
  );
}

export default RevieweeGuideRequest;
