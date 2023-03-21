import { useRouter } from 'next/router';
import { useEffect } from 'react';

function useRedirectMain() {
  const router = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem('access_token')) {
      alert('로그인 후 이용가능합니다.');
      router.push('/');
    }
  }, []);
}

export default useRedirectMain;
