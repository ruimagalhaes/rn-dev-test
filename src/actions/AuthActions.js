import {
  FIELD_EMAIL_CHANGED,
  FIELD_PASSWORD_CHANGED,
  LOGIN_REQUEST_STARTED,
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_SUCCESS,
  AUTH_STATE_RESET
} from './types';
import { 
  performAuthRequest, 
  handleResponse,
  showErrorAlert, 
  setSecrets 
} from '../helpers';

export const resetState = () => {
  return {
    type: AUTH_STATE_RESET,
  };
};

export const emailChanged = (text) => {
  return {
    type: FIELD_EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: FIELD_PASSWORD_CHANGED,
    payload: text
  };
};

export const requestAuth = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST_STARTED
    });

    performAuthRequest(email, password)
    .then((response) => {
      handleResponse(dispatch, response, requestAuthSuccess, requestAuthFail);
    })
    .catch((error) => {
      console.error(error);
      requestAuthFail(dispatch);
    });
  };
};

const requestAuthSuccess = (dispatch, response) => {
  setSecrets(response.access_token);
  dispatch({
    type: LOGIN_REQUEST_SUCCESS,
  });
};

const requestAuthFail = (dispatch) => {
  showErrorAlert('It was impossible to complete your request.');
  dispatch({
    type: LOGIN_REQUEST_FAILED
  });
};
