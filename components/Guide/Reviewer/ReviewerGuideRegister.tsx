import GuideContent from '../GuideContent';
import GuideImage from '../GuideImage';
import GuideSubTitle from '../GuideSubTitle';
import { ReviewGuideRegisterImage } from './ReviewerGuideImageData';

const jobList = ['프론트엔드', '백엔드', '모바일', '기타'];
const carrerList = ['신입(1년이하)', '주니어(1~3년)', '미들(4~8년)', '시니어(9년이상)'];
const tegList = ['React', 'Spring', 'SpringBoot', 'View'];

function ReviewerGuideRegister() {
  return (
    <div>
      <div className="w-full">
        <GuideSubTitle>리뷰어 등록</GuideSubTitle>
        <GuideContent>
          <div className="space-y-4">
            <p>
              리뷰어 활동을 하기 위해서는 리뷰어 등록을 해야 합니다. 등록은 <strong>마이페이지 - 리뷰어 정보</strong>를
              클릭하면 아래와 같은 화면을 확인할 수 있습니다. 다음과 같은 정보 중 선택하여 자신의 리뷰어 정보를 등록할
              수 있습니다. <br />
              <strong>
                리뷰어 정보를 등록하면 아래와 같이 리뷰어 활동 여부가 활성화되며 리뷰 신청을 받을 수 있게 됩니다. 자신의
                리뷰어 카드는 메인 페이지에서 나오지 않습니다.
              </strong>
            </p>
            <ul className="space-y-1">
              <ol>
                직무 :<strong>{jobList.reduce((a, b) => ` ${a} ${b},`, '').slice(0, -1)}</strong>
              </ol>
              <ol>
                경력 :<strong>{carrerList.reduce((a, b) => ` ${a} ${b},`, '').slice(0, -1)}</strong>
              </ol>
              <ol>
                기술 스택 :<strong>{tegList.reduce((a, b) => ` ${a} ${b},`, '').slice(0, -1)}</strong>
              </ol>
              <ol>
                자기소개 : <strong>자유 입력</strong>
              </ol>
            </ul>
          </div>
          <GuideImage imageList={ReviewGuideRegisterImage} />
        </GuideContent>
      </div>
    </div>
  );
}

export default ReviewerGuideRegister;
