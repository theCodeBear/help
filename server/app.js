'use strict';

var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var User = require('./models/user');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('client'));


app.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.send({users: users});
  });
});

app.post('/users', function(req, res) {
  var user = new User(req.body);
  user.save(function(err, dbUser) {
    User.find({}, function(err, users) {
      res.send({users: users});
    });
  })
});

mongoose.connect('mongodb://localhost/expressApp');

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Serving on port %s', port);
});

module.exports = app;