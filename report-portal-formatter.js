const  createRPFormatterClass  = require('reportportal-agent-cucumber');
// import createRPFormatterClass from 'reportportal-agent-cucumber';
const rpConfig = require('./config/rpConfig.json');

console.log(createRPFormatterClass)
module.exports = createRPFormatterClass(rpConfig);
