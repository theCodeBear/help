'use strict';

var mongoose = require('mongoose');
var HelpSessions;

var helpSessionsSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.ObjectId, ref: 'User' },
  helpSessions: [{ type: mongoose.Schema.ObjectId, ref: 'HelpSession' }]
});

HelpSessions = mongoose.model('HelpSessions', helpSessionsSchema);
module.exports = HelpSessions;