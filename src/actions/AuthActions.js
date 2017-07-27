import {
  TEMPLATE_TYPE,
} from './types';

export const requestAuth = (username, password) => {
  return ({
    type: TEMPLATE_TYPE,
    payload: templatePayload
  });
};
