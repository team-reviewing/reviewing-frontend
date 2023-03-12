import React from 'react';
import Image from 'next/image';
import img from '../../styles/images/githubImg.png';

function Template() {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;

  const loginUri = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/githubLogin`;

  return (
    <div className="w-full h-full max-w-7xl flex justify-center items-center flex-col">
      <Image src={img} alt="깃허브 로고 이미지" />
      <a href={loginUri}>깃허브로그인</a>
    </div>
  );
}

export default Template;
