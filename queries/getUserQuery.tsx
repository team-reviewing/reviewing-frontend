import { useQuery, useQueryClient } from '@tanstack/react-query';
import { logInUser, refreshUser } from '../pages/api/member';
import { getAccessToken, setAccessToken } from '../utils/authLogic';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

const USER_KEY = 'user';

function useGetUserQuery() {
  const access_token = getAccessToken();
  const queryClient = useQueryClient();
  const router = useRouter();

  return useQuery([USER_KEY, 'USE_ACCESS_TOKEN'], logInUser, {
    enabled: !!access_token,
    retry: false,
    onError: async (error) => {
      const { response } = error as unknown as AxiosError;
      if (response?.status === 401) {
        try {
          const res: string = await refreshUser();
          setAccessToken(res);
          queryClient.invalidateQueries(['USER_KEY', 'USE_ACCESS_TOKEN']);
        } catch (error) {
          alert('리프레시 토큰 만료 / 새로 로그인');
          router.push('/');
        }
      }
    },
  });
}

export default useGetUserQuery;
