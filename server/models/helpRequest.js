'use strict';

var mongoose = require('mongoose');
var HelpRequest;

var helpRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  parent: { type: mongoose.Schema.ObjectId, ref: 'HelpRequests', required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  requestedTeacher: { type: mongoose.Schema.ObjectId, ref: 'User' },    // if requested teacher then request is private to them, otherwise public and open to everyone
  teachersResponded: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  teacherAccepted: { type: mongoose.Schema.ObjectId, ref: 'User' },
  chat: { type: mongoose.Schema.ObjectId, ref: 'helpSession' },
  createdAt: { type: Date, default: Date.now, required: true }
});


// helpRequestSchema.statics.create = function(payload, cb) {
//   console.log(payload);
//   cb()
// };



HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);
module.exports = HelpRequest;



/*
  --  _id
  createdAt
  title
  message
  parent
  requestedTeacher
  teachersResponded
  teacherAccepted
  chat -- helpSession Model
*/