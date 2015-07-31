'use strict';

var mongoose = require('mongoose');
var Membership;

var membershipSchema = new mongoose.Schema({
  initialSetup: { type: Date, default: Date.now, required: true },
  chargeDate: { type: Number, required: true },
  numOfMonthsMember: { type: Number, default: 1, required: true }
});

Membership = mongoose.model('Membership', membershipSchema);
module.exports = Membership;