const GetEnv = require('@envFile');

export const config = {
  headers: {
    axid:
      GetEnv.REACT_APP_PROJECT === 'MOBILE'
        ? GetEnv.REACT_APP_PROJECT_APP_HASH
        : GetEnv.PROJECT_APP_HASH,
    'Content-Type': 'application/json',
  },
};
