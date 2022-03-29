// Actions
import {
  OPEN_MODAL,
  CLOSE_MODAL
} from './actions';

const initialState = {
  modal: {
    id: null,
    data: null
  }
};

export default function ui(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_MODAL:
      return {
        ...state,
        modal: {
          id: payload.id,
          data: payload.data
        }
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: initialState.modal
      };
    default:
      return state;
  }
}
