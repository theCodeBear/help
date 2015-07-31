'use strict';

var mongoose = require('mongoose');
var HelpSession;

var helpSessionSchema = new mongoose.Schema({
  chat: { type: String, required: true },
  finished: Boolean,
  finishedDate: Date,
  parent: { type: mongoose.Schema.ObjectId, ref: 'HelpSessions' },
  teacher: { type: mongoose.Schema.ObjectId, ref: 'User' },
  student: { type: mongoose.Schema.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now, required: true }
});

HelpSession = mongoose.model('HelpSession', helpSessionSchema);
module.exports = HelpSession;