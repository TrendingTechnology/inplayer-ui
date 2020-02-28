const envs = {
  development: 'dev',
  production: 'prod',
};

const env = envs[process.env.NODE_ENV || 'development'];

/* eslint-disable global-require,import/no-dynamic-require */
const envConfig = require(`./webpack.${env}.js`);

module.exports = envConfig;
