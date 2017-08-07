import {
  JOBS_REQUEST_STARTED,
  JOBS_REQUEST_FAILED,
  JOBS_REQUEST_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  jobList: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JOBS_REQUEST_STARTED:
      return { ...state, loading: true };
    case JOBS_REQUEST_FAILED:
      return { ...state, loading: false};
    case JOBS_REQUEST_SUCCESS:
      console.log(action.payload.browse);
      return { ...state, loading: false, jobList: action.payload.browse };
    default:
      return state;
  }
};
