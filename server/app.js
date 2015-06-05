'use strict';

var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

// running some basic Express middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + './../client'));

// links to the routes file which links to all the individual routes
require('./routes')(app);

// connect to mongo
mongoose.connect('mongodb://localhost/expressApp');

// run Express web server
var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Serving on port %s', port);
});

module.exports = app;