/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var appConfig = require('./app-config');

module.exports = {
  entry: [
    'webpack-dev-server/client?'
      + appConfig.protocol
      + appConfig.host
      + ':' + appConfig.port,
    'webpack/hot/dev-server',
    './app/index'
  ],
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.svg$/,
        loaders: 'url-loader?limit=1024'
      }
    ]
  }
};
