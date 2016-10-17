/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var appConfig = require('./app-config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  stats: { colors: true },
  historyApiFallback: true
}).listen(appConfig.port, appConfig.host, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('Listening at ' + appConfig.host + ':' + appConfig.port);
  });
