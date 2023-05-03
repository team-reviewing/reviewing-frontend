import React from 'react';
import HeadHoc from '../components/Commons/HeadHoc';
import Template from '../components/Guide/Template';

function Guide() {
  return (
    <main className="flex justify-center px-8 wh-f">
      <Template />
    </main>
  );
}

export default HeadHoc({ desc: '리뷰 목록 페이지', Component: Guide });
