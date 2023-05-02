import { useRouter } from 'next/router';
import React from 'react';

function GuideButton() {
  const router = useRouter();

  const moveGuideHandler = () => {
    router.push('/guide');
  };

  return (
    <button
      type="button"
      onClick={moveGuideHandler}
      className="inline-flex items-center text-lg font-bold text-center cursor-pointer">
      가이드
    </button>
  );
}

export default GuideButton;
