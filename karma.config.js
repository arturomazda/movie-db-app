var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules)/,
    loader: 'babel-loader'
  },
  {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass']
  }
];

webpackConfig.module.postLoaders = [{
  test: /\.(js|jsx)$/,
  exclude: /(node_modules)/,
  loader: 'istanbul-instrumenter'
}];

module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine' ],
    files: [
      'app/**/*.spec.js'
    ],
    plugins: [
      webpack,
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-spec-reporter'
    ],
    browsers: [ 'Chrome' ],
    preprocessors: {
      'app/**/*.spec.js': ['webpack'],
      'app/**/*.js': ['webpack']
    },
    reporters: [ 'spec' ],
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};
