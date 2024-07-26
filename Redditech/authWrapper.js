import * as AppAuth from 'expo-app-auth';
import { Platform } from 'react-native';

const authorize = async (config) => {
  const authorizationResponse = await AppAuth.authAsync(config);
  return authorizationResponse;
};

const refresh = async (config, refreshToken) => {
  const refreshedResponse = await AppAuth.refreshAsync(config, refreshToken);
  return refreshedResponse;
};

const revoke = async (config, refreshToken) => {
  const revokeResponse = await AppAuth.revokeAsync(config, refreshToken);
  return revokeResponse;
};

const Auth = {
  ...AppAuth,
  authorize,
  refresh,
  revoke,
};

export default Auth;
