export const getAccessTokenInStorage = () => {
  if (typeof window !== 'undefined') {
    const data = window.sessionStorage.getItem('accessToken');
    return data;
  }
};

export const setAccessTokenInStorage = (param: string) => {
  window.sessionStorage.setItem('accessToken', param);
};

export const deleteAccessTokenInStorage = () => {
  window.sessionStorage.removeItem('accessToken');
};
