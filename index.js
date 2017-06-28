'use strict';

require('dotenv').config();

const express = require('express');
const app = express();
const humps = require('humps');

const bcrypt = require('bcrypt');  //NOTE might be for routes subFolder
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

app.disable('x-powered-by');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
    // app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(cookieParser());

const path = require('path');

const favorites = require('./routes/favorites');
const shared = require('./routes/shared');
const login = require('./routes/login');
const register = require('./routes/register');

// app.use('/shared', shared);
app.use('/favorites', favorites);
app.use('/login', login);
app.use('/register', register);

// default (no route specified 404)
app.use((_req, res) => {
  res.sendStatus(404);
});

// NOTE not sure if we need this for our specific  project, but leaving it in for now
// eslint-disable-next-line max-params
app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  // eslint-disable-next-line no-console
  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    // eslint-disable-next-line no-console
    console.log('Listening on port', port);
  }
});

module.exports = app;
