import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import { getAccessTokenInStorage } from '../utils/authLogic';

function useRedirectMain() {
  const user = useRecoilValue(userState);
  const router = useRouter();

  useEffect(() => {
    const token = getAccessTokenInStorage();
    if (!user && !token) {
      router.push('/');
    }
  }, [user]);
}

export default useRedirectMain;
