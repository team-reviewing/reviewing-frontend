import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logIn } from '../pages/api/member';
import { setAccessTokenInCookie } from '../utils/authLogic';

function useRedirectBefore() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.code) {
      console.log(router.query.code);
      logIn(router.query.code).then((res) => {
        if (res?.status === 200) {
          setAccessTokenInCookie(res.data.access_token);
          router.replace(localStorage.getItem('path') || '/');
        }
      });
    }
  }, [router.query.code]);
}

export default useRedirectBefore;
