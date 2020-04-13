const { createRPFormatterClass } = require('reportportal-agent-cucumber');


// import {createRPFormatterClass} from './node_modules/reportportal-agent-cucumber';
const rpConfig = require('./config/rpConfig.json');

module.exports = createRPFormatterClass(rpConfig);

