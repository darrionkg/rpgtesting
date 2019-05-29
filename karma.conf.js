const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine'],
    files: [
      'src/*.js',
      'spec/*spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap', 'coverage'],
      'spec/*spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-sourcemap-loader',
      'karma-coverage',
      'karma-jquery',
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ],
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    usePolling: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};