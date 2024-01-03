const historyApiFallback = require('connect-history-api-fallback')

module.exports = {
  mode: 'production',
  devServer: {
    before(app) {
      app.use(historyApiFallback())
    },
  },
}
