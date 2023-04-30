import { useEffect } from 'react';
import { getAccessTokenInStorage } from '../utils/authLogic';
import { userState } from '../atoms/userState';
import { useRecoilState } from 'recoil';
import { logInUser } from '../pages/api/member';

function useLoginMaintain() {
  const [user, setUser] = useRecoilState(userState);
  const accessToken = getAccessTokenInStorage();

  useEffect(() => {
    if (user && accessToken) {
      return;
    }

    if (user && !accessToken) {
      setUser(null);
      return;
    }

    const setLoginInfo = async () => {
      await logInUser().then((res) => {
        setUser(res);
      });
    };

    if (accessToken) {
      setLoginInfo();
    }
  }, [user, accessToken]);
}

export default useLoginMaintain;
