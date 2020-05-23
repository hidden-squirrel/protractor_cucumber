require("babel-register");

exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub/',
  directConnect: true,
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'src/step_definitions/*.js',
    tags: "@Login",
    // format: [ 'report-portal-formatter.js'],
  },

  specs: [
    'src/features/Login.feature'
  ],

  onPrepare: function () {
    browser.ignoreSynchronization = true;
    // var { setDefaultTimeout } = require("cucumber");
    // setDefaultTimeout(60 * 1000);
  },

  capabilities: {
    browserName: 'chrome',
  },


}