export const getAccessTokenInCookie = () => {
  if (typeof window !== 'undefined') {
    const data = document.cookie.split(';');
    const accessTokenCookie = data.find((cookie) => cookie.trim().startsWith('access_token='));
    if (!accessTokenCookie) return null;
    return accessTokenCookie.split('=')[1];
  }
};

export const setAccessTokenInCookie = (param: string) => {
  document.cookie = `access_token=${param}`;
};
