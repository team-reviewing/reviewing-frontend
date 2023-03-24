import React, { useState } from 'react';
import ReviewInquireBox from './ReviewInquireBox';
import ReviewModeButtonGroup from './ReviewRoleButtonGroup';

const reviewerDummy = {
  id: 2,
  username: 'usertest',
  imageUrl: 'userImageUrl',
};

function ReviewSearchForm() {
  const [role, setRole] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center flex-col">
      <ReviewModeButtonGroup role={role} setRole={setRole} />
      <div className="w-full flex justify-center items-center flex-col">
        {/* react-query 사용해서 map 함수 사용 예정*/}
        <ReviewInquireBox
          role={role}
          id={1}
          title={'안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'}
          reviewer={reviewerDummy}
        />
        <ReviewInquireBox role={role} id={1} title={'안녕하세요 코드리뷰 부탁드립니다.'} reviewer={reviewerDummy} />
      </div>
    </div>
  );
}

export default ReviewSearchForm;
