import React from 'react';
import Template from '../components/ReviewListSearch/Template';
import HeadHoc from '../components/Commons/HeadHoc';

function Reviews() {
  return (
    <main className="flex justify-center wh-f">
      <Template />
    </main>
  );
}

export default HeadHoc({ desc: '리뷰 목록 페이지', Component: Reviews });
