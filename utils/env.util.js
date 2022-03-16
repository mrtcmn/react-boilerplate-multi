const config = {
  PROJECT: process.env.PROJECT,
  IS_PRODUCTION: process.env.IS_PRODUCTION,
  PROJECT_APP_HASH: process.env.PROJECT_APP_HASH,
  API_URL: process.env.API_URL,
  API_VERSION: process.env.API_VERSION,
  CDN_PRE_URL: process.env.CDN_PRE_URL,
};

console.log('ENV FRONTEND');
module.exports = config;
