import {
  LOGIN_REQUEST_STARTED,
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_STARTED:
      return { ...state, loading: true };
    case LOGIN_REQUEST_FAILED:
      return { ...state, loading: true };
    case LOGIN_REQUEST_STARTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};
