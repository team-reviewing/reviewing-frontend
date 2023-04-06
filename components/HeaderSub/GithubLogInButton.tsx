import { useRouter } from 'next/router';
import React from 'react';

function GithubLogInButton() {
  const router = useRouter();

  const moveInduceHandler = () => {
    router.push('/induceLogin');
  };

  return (
    <button
      type="button"
      onClick={moveInduceHandler}
      className="cursor-pointer font-bold text-lg text-center inline-flex items-center">
      로그인
    </button>
  );
}

export default GithubLogInButton;
