

exports.config = {
    framework : 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: 'pages/*.js',
        tags: false,
        format: [],
        profile: false,
        'no-source': true
      },

      specs: [
        'features/*.feature'
      ],
}