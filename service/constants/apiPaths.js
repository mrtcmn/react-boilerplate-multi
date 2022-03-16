const GetEnv = require('@envFile');

const apiPath =
  GetEnv.REACT_APP_PROJECT === 'MOBILE'
    ? GetEnv.REACT_APP_API_URL
    : GetEnv.API_URL;
const apiVersion =
  GetEnv.REACT_APP_PROJECT === 'MOBILE'
    ? GetEnv.REACT_APP_API_VERSION
    : GetEnv.API_VERSION;
export const apiBaseUrl = apiPath + apiVersion;
