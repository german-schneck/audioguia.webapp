// Actions
import {
  SET_USER,
  SET_IS_LOADING_AUTH
} from './actions';

const initialState = {
  isLoadingAuth: true,
  user: null
};

export default function auth(state = initialState, { type, payload }) {
  switch (type) {
    case SET_IS_LOADING_AUTH:
      return {
        ...state,
        isLoadingAuth: payload.isLoadingAuth
      };
    case SET_USER:
      return {
        ...state,
        user: payload.user
      };
    default:
      return state;
  }
}
