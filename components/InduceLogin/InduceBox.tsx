import React, { useEffect } from 'react';
import img from '../../styles/images/githubImg.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getAccessTokenInStorage } from '../../utils/authLogic';

function InduceBox() {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;

  const loginUri = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/githubLogin`;

  const logInHandler = () => {
    window.location.href = loginUri;
  };

  const router = useRouter();
  const accessToken = getAccessTokenInStorage();

  useEffect(() => {
    if (accessToken) {
      router.push('/');
    }
  }, [accessToken]);

  return (
    <div className="flex flex-col w-full h-80 max-w-xl msm:max-w-full msm:fixed  msm:animate-up-animation msm:bottom-0 msm:h-[80%]">
      <div>
        <h1 className="text-7xl font-bold text-c-white text-center">Review</h1>
      </div>
      <div className="flex-1 w-full flex h-80 justify-center items-center border-2 rounded-radius-m bg-c-white msm:min-w-0 msm:rounded-b-radius-none">
        <div className="flex flex-col cursor-pointer" onClick={logInHandler}>
          <Image src={img} width={100} height={100} alt={'githubImage'} />
          <span className="mt-2 font-semibold">Github 로그인</span>
        </div>
      </div>
    </div>
  );
}

export default InduceBox;
