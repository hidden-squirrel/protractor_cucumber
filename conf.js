require("babel-register");

exports.config = {
  directConnect: true,
  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'src/stepDefs/*.js',
    tags: false,
    format: [],
  },

  specs: [
    'src/features/Login.feature'
  ],

  capabilities: {
    browserName: 'chrome',
    useAutomationExtension: false
  }

}