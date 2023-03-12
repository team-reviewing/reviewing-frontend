export const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    const access_token = sessionStorage.getItem('access_token');
    return access_token;
  }
};

export const setAccessToken = (param: string) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('access_token', param);
  }
};
