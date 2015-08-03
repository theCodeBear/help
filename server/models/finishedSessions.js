'use strict';

var mongoose = require('mongoose');
var FinishedSessions;

var finishedSessionsSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.ObjectId, ref: 'User' },
  sessions: [{ type: mongoose.Schema.ObjectId, ref: 'HelpSession' }]
});

FinishedSessions = mongoose.model('FinishedSessions', finishedSessionsSchema);
module.exports = FinishedSessions;