'use strict';

var User = require('./../models/user');

module.exports = function(app) {
  app.get('/users', require('./../routes/user/index'));
  app.post('/users', require('./../routes/user/create'));
  app.post('/users/student', require('./../routes/user/registerStudent'));

  app.post('/auth/signup', require('./../routes/auth/signup'));
  app.post('/auth/login', require('./../routes/auth/login'));

  app.post('/help', require('./../routes/help/create'));
};