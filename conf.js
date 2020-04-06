require("babel-register");

exports.config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub/',
  directConnect: true,
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'src/stepDefs/*.js',
    tags: "@Login",
    format: [],
  },

  specs: [
    'src/features/Login.feature'
  ],

  onPrepare: function () {
    browser.ignoreSynchronization = true;
  },

  capabilities: {
    browserName: 'chrome',
  }

}