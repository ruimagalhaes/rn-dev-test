import * as Keychain from 'react-native-keychain';

export const setSecrets = (accessToken) => {
  Keychain
    .setGenericPassword('access_token', accessToken);
};

export const getSecrets = () => {
  return (
    Keychain
      .getGenericPassword()
      .then((credentials) => getCredentialsFromJson(credentials))
  );  
};

export const resetSecrets = () => {
  return (
    Keychain
      .resetGenericPassword()
  );
};

const getCredentialsFromJson = (credentials) => {
  if (credentials.password == null) {
    return undefined;
  }

  return credentials.password;
};
