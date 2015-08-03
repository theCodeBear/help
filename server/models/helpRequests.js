'use strict';

var mongoose = require('mongoose');
var HelpRequests;

var helpRequestsSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.ObjectId, ref: 'User' },
  requests: [{ type: mongoose.Schema.ObjectId, ref: 'HelpRequest' }]
});

HelpRequests = mongoose.model('HelpRequests', helpRequestsSchema);
module.exports = HelpRequests;