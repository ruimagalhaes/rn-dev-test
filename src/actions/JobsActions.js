import {
  JOBS_REQUEST_STARTED,
  JOBS_REQUEST_FAILED,
  JOBS_REQUEST_SUCCESS
} from './types';
import { 
  get, 
  handleResponse,
  showErrorAlert, 
} from '../helpers';

export const getJobs = () => {
  return (dispatch) => {
    dispatch({
      type: JOBS_REQUEST_STARTED
    });

    get('jobs')
    .then((response) => {
      handleResponse(dispatch, response, jobRequestSuccess, jobRequestFail);
    })
    .catch((error) => {
      console.error(error);
      jobRequestFail(dispatch);
    });
  };
};

const jobRequestSuccess = (dispatch, response) => {
  console.log(response);
  dispatch({
    type: JOBS_REQUEST_SUCCESS,
    payload: response
  });
};

const jobRequestFail = (dispatch) => {
  showErrorAlert('It was impossible to complete your request.');
  dispatch({
    type: JOBS_REQUEST_FAILED
  });
};
