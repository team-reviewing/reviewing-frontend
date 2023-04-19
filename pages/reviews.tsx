import React from 'react';
import Template from '../components/ReviewListSearch/Template';
import HeadHoc from '../components/Commons/HeadHoc';

function Reviews() {
  return (
    <div className="flex justify-center wh-f">
      <Template />
    </div>
  );
}

export default HeadHoc({ desc: '리뷰 목록 페이지', Component: Reviews });
