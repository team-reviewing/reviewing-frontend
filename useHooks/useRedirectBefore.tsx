import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logIn } from '../pages/api/member';

function useRedirectBefore() {
  const router = useRouter();

  const setAccessToken = (access_token: string) => {
    sessionStorage.setItem('access_token', access_token);
  };

  useEffect(() => {
    if (router.query.code) {
      console.log(router.query.code);
      logIn(router.query.code).then((res) => {
        if (res?.status === 200) {
          setAccessToken(res.data.access_token);
          router.replace(localStorage.getItem('path') || '/');
        }
      });
    }
  }, [router.query.code]);
}

export default useRedirectBefore;
