'use strict';

var mongoose = require('mongoose');
var Notification;

var notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  viewed: { type: Boolean, default: false, required: true },
  viewedDate: { type: Date },
  createdAt: { type: Date, default: Date.now, required: true }
});

Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;