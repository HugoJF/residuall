const express = require('express');
const app = express();

app.use(express.json());

module.exports = app;

require('./pages/health');
require('./pages/local-validation');
require('./pages/local-validations');
require('./pages/eva-validation');
require('./pages/eva-validations');

app.listen(8080);

