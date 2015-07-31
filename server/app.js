'use strict';

var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// running some basic Express middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + './../public'));


// middleware
var middleware = require('./config/middleware');
app.use(middleware.beforeAll);
app.post('/users', middleware.validateUserName);

// links to the routes file which links to all the individual routes
require('./config/routes')(app);



// connect to mongo
mongoose.connect('mongodb://localhost/help');

// run Express web server
http.listen(3000, function() {
  var port = http.address().port;
  console.log('Serving on port %s', port);
});

module.exports = app;