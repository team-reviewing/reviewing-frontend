export const getAccessTokenInStorage = () => {
  if (typeof window !== 'undefined') {
    const data = window.sessionStorage.getItem('accessToken');
    return data;
  }
};
export const getRefreshTokenInStorage = () => {
  if (typeof window !== 'undefined') {
    const data = window.sessionStorage.getItem('refreshToken');
    return data;
  }
};

export const setAccessTokenInStorage = (param: string) => {
  window.sessionStorage.setItem('accessToken', param);
};

export const setRefreshTokenInStorage = (param: string) => {
  window.sessionStorage.setItem('refreshToken', param);
};

export const deleteAccessTokenInStorage = () => {
  window.sessionStorage.removeItem('accessToken');
};

export const deleteRefreshTokenInStorage = () => {
  window.sessionStorage.removeItem('refreshToken');
};
