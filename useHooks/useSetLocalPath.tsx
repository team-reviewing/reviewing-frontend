import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useSetLocalPath() {
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem('path', router.asPath);
  }, []);
}

export default useSetLocalPath;
