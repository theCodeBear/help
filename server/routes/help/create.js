'use strict';

var HelpRequest = require('../../models/helpRequest');

module.exports = function(req, res) {
  console.log(req.body);
  // if (req.body.title && req.body.message) {
  //   HelpRequest.create(req.body)
  // }
  return res.send(req.body);
};