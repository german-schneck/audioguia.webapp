// ActionTypes
export const FETCH_AUTH = 'FETCH_AUTH';
export const SET_IS_LOADING_AUTH = 'SET_IS_LOADING_AUTH';
export const SET_USER = 'SET_USER';
export const LOGIN_USER = 'LOGIN_USER';

// Exporter
export function fetchAuth() {
  return {
    type: FETCH_AUTH
  };
}

export function setIsLoadingAuth(isLoadingAuth) {
  return {
    type: SET_IS_LOADING_AUTH,
    payload: {
      isLoadingAuth
    }
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user
    }
  };
}

export function loginUser({ email, password, formikHelpers }) {
  return {
    type: LOGIN_USER,
    payload: {
      email,
      password,
      formikHelpers
    }
  };
}
