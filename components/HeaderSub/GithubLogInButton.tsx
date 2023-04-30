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
      className="inline-flex items-center text-lg font-bold text-center cursor-pointer">
      로그인
    </button>
  );
}

export default GithubLogInButton;
