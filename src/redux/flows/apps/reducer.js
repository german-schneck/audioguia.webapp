// Actions
import {
  SET_IS_LOADING_APPS,
  SET_APPS,
  SET_APP_INVITATION
} from './actions';

// Utils
import { normalizeState } from '../../../shared/utils/state';

const initialState = {
  isLoading: true,
  data: {}
};

export default function apps(state = initialState, { type, payload }) {
  switch (type) {
    case SET_IS_LOADING_APPS:
      return {
        ...state,
        isLoading: payload.isLoading
      };

    case SET_APPS:
      return {
        ...state,
        data: {
          ...state.data,
          ...normalizeState(payload.apps, 'id')
        }
      };

    case SET_APP_INVITATION:
      return {
        ...state,
        data: {
          ...state.data,
          [payload.appId]: {
            ...state.data[payload.appId],
            invitations: payload.invitations
          }
        }
      };
    default:
      return state;
  }
}
