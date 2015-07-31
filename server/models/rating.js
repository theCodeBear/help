'use strict';

var mongoose = require('mongoose');
var Rating;

var ratingSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  totalPoints: { type: Number, default: 0, required: true },
  unpaidPoints: { type: Number, default: 0, required: true },
  recommendationsYes: { type: Number, default: 0, required: true },
  recommendationsNo: { type: Number, default: 0, required: true }
});

Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;