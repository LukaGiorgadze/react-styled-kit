export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const requestLogin = () => {
  return {
    type: AUTH_REQUEST,
  };
};

export const loginSuccess = token => {
  return {
    type: AUTH_SUCCESS,
    payload: token,
  };
};
