import React from 'react';
import Template from '../components/InduceLogin/Template';
import HeadHoc from '../components/Commons/HeadHoc';

function InduceLogin() {
  return (
    <main className="w-full h-screen">
      <Template />
    </main>
  );
}

export default HeadHoc({ desc: '로그인 페이지', Component: InduceLogin });
