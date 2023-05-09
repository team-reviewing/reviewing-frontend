import GuideContent from '../GuideContent';
import GuideImage from '../GuideImage';
import GuideSubTitle from '../GuideSubTitle';
import { ReviewGuideListImage } from './ReviewerGuideImageData';

function ReviewerGuideReviewList() {
  return (
    <div>
      <div className="w-full">
        <GuideSubTitle>리뷰 확인 및 처리 방법</GuideSubTitle>
        <GuideContent>
          <div className="space-y-4">
            <p>
              리뷰어를 등록하면 리뷰 신청을 받을 수 있습니다. 자신에게 온 신청정보는
              <strong>요청한 리뷰 - 리뷰어</strong> 부분에서 확인할 수 있습니다. 리뷰정보 상태는 총 4가지이며 요청온
              리뷰에 대해서는 총 3가지의 처리를 할 수 있습니다.
            </p>
            <ul className="space-y-1">
              <ol>
                리뷰 상태 : <strong>요청, 수락, 거절, 완료</strong>
              </ol>
              <ol>
                요청 상태 : 리뷰 신청을 받은 상태입니다. 해당 리뷰를 수락과 거절을 할 수 있습니다.
                <strong>수락할 경우 해당 리뷰를 담당하게 됩니다.</strong>
              </ol>
              <ol>
                수락 상태 : 수락된 리뷰는 <strong>최대 5일 안에 리뷰를 진행해야 합니다.</strong> 자신이 확인할 리뷰는
                리뷰를 클릭하면 나오는 모달의
                <strong>
                  Pull Request URL을 클릭해서 Github PR 페이지로 이동할 수 있습니다. 수락된 상태에서 리뷰가 끝난다면
                  완료 처리를 진행할 수 있습니다.
                </strong>
              </ol>
              <ol>
                거절 상태 : <strong>거절할 경우 3일 후 요청한 리뷰는 삭제됩니다.</strong>
              </ol>
              <ol>
                왼료 상태 : <strong>완료 처리되면 3일 후에 자동으로 삭제됩니다.</strong>
              </ol>
            </ul>
          </div>
          <GuideImage imageList={ReviewGuideListImage} />
        </GuideContent>
      </div>
    </div>
  );
}

export default ReviewerGuideReviewList;
