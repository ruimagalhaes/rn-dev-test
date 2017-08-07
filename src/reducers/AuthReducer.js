import {
  FIELD_EMAIL_CHANGED,
  FIELD_PASSWORD_CHANGED,
  LOGIN_REQUEST_STARTED,
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  navigateToJobs: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIELD_EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case FIELD_PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_REQUEST_STARTED:
      return { ...state, loading: true };
    case LOGIN_REQUEST_FAILED:
      return { ...state, loading: false, password: '' };
    case LOGIN_REQUEST_SUCCESS:
      return { ...state, loading: false, password: '', navigateToJobs: true };
    default:
      return state;
  }
};
