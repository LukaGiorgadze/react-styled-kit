import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from 'actions/user';

const initialState = {
  token: 'No token (example)',
  error: undefined,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST: {
      return { ...state, token: payload, loading: true };
    }
    case AUTH_SUCCESS: {
      return { ...state, token: payload, loading: false };
    }
    case AUTH_FAILURE: {
      return { ...state, error: payload, loading: false };
    }
    default:
      return state;
  }
};
