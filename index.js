const express = require('express');
const app = express();

app.use(express.json());

module.exports = app;

require('./pages/health');
require('./pages/local-validation');
require('./pages/eva-validation');

app.listen(8080);

