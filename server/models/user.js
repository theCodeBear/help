'use strict';

var mongoose = require('mongoose');
var User;


var userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  currentlyMember: { type: Boolean, required: true },
  photo: { type: String },
  lastActive: { type: Date, required: true },
  teacher: { type: Boolean, required: true },
  chats: { type: mongoose.Schema.ObjectId, ref: 'Chats' },
  stripe: { type: mongoose.Schema.ObjectId, ref: 'Stripe' },
  notifications: { type: mongoose.Schema.ObjectId, ref: 'Notifications' },
  membership: { type: mongoose.Schema.ObjectId, ref: 'Membership' },
  rating: { type: mongoose.Schema.ObjectId, ref: 'Rating' },
  classesRegisteredFor: { type: mongoose.Schema.ObjectId, ref: 'Class' },
  createdAt: { type: Date, default: Date.now, required: true }
});


User = mongoose.model('User', userSchema);
module.exports = User;