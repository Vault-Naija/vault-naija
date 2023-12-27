const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (env_vars) => {
  const { env } = env_vars;
  const envConfig = require(`./webpack.${env}`);
  const config = merge(commonConfig, envConfig);
  return config;
};
