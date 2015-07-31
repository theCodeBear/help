'use strict';

var mongoose = require('mongoose');
var Notifications;

var notificationsSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  notifications: [{ type: mongoose.Schema.ObjectId, ref: 'Notification' }]
});

Notifications = mongoose.model('Notifications', notificationsSchema);
module.exports = Notifications;