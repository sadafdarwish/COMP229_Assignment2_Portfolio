const serverless = require('serverless-http');
const app = require('../../app');  // reuses your existing Express app

module.exports.handler = serverless(app);
