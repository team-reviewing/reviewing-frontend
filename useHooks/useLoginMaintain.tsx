import { useEffect } from 'react';
import { getAccessTokenInCookie } from '../utils/authLogic';
import { userState } from '../atoms/userState';
import { useRecoilState } from 'recoil';
import { logInUser } from '../pages/api/member';

function useLoginMaintain() {
  const [user, setUser] = useRecoilState(userState);
  const accessToken = getAccessTokenInCookie();

  useEffect(() => {
    if (user && accessToken) {
      return;
    }

    if (user && !accessToken) {
      setUser(null);
      return;
    }

    const setLoginInfo = async (token: string) => {
      await logInUser(token).then((res) => {
        const imageUrl = res.imageUrl;
        setUser({ imageUrl });
      });
    };

    if (accessToken) {
      setLoginInfo(accessToken);
    }
  }, [user, accessToken]);
}

export default useLoginMaintain;
