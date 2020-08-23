process.env.VUE_APP_SMTP_TOKEN = require('./Environment.json').smtpToken

module.exports = {
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.optimization.minimize(false);
  },
  publicPath: "/",
};
