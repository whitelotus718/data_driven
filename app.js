const express = require('express');

const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');

app.use(routes); // is this being used for something other than a middleware?

module.exports = app;
