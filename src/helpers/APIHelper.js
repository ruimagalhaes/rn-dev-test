import { getSecrets } from './SecretsHelper';

const BASE_URL = 'https://test.inploi.me/';
const API_URL = '';

const buildUrlWithPath = (path) => {
  return `${BASE_URL}${API_URL}${path}`;
};

export const performAuthRequest = (email, password) => { 
  return (
    fetch(buildUrlWithPath('token'), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_secret: password, 
        client_id: email,
        grant_type: 'client_credentials'
      })
    })
  );
};

export const get = (path) => {
  return (
    getSecrets()
    .then((accessToken) =>
      fetch(`${buildUrlWithPath(path)}?token=${accessToken}` , {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
    )
  );
};

export const handleResponse = (dispatch, response, onSuccess, onFailure) => {
  if (response.status >= 200 && response.status < 300) {
    response.json()
    .then((responseJson) => {
      return onSuccess(dispatch, responseJson);
    })
    .catch((error) => {
      console.error(error);
      return onFailure(dispatch);
    });
  } else {
    console.log(dispatch);
    return onFailure(dispatch);
  }
};
