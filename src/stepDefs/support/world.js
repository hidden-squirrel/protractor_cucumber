let { setWorldConstructor } = require('cucumber');
let { Logger } = require('reportportal-agent-cucumber');
setWorldConstructor(Logger);