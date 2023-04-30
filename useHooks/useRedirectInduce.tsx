import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms/userState';
import { getAccessTokenInStorage } from '../utils/authLogic';

function useRedirectInduce() {
  const user = useRecoilValue(userState);
  const router = useRouter();

  useEffect(() => {
    const token = getAccessTokenInStorage();
    if (!user && !token) {
      router.replace('/induceLogin');
    }
  }, [user]);
}

export default useRedirectInduce;
