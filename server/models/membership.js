'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
var Membership;

var membershipSchema = new mongoose.Schema({
  parent: { type: mongoose.Schema.ObjectId, ref: 'User' },
  initialStartDate: { type: Date, default: Date.now, required: true },    // this is date of free signup as student
  endOfFreePlan: { type: Date, required: true },
  paidStartDate: Date,          // this is actual date of payment start
  chargeDate: Number,           // this is just the 1-31 day of month (if past 28 handle in some way)
  numOfMonthsPaid: Number     // this is number of months paid member so far
});

// payload should be { parent: userId, lengthOfFree: #ofdaysforfreeplan }, will always start off with a free membership
membershipSchema.statics.create = function(payload, cb) {
  console.log('membership payload', payload);
  var model = {
    parent: payload.userId,
    endOfFreePlan: moment().add(payload.lengthOfFree, 'days'),
  };
  Membership.findOne({parent: model.parent}, function(err, membership) {
    if (membership) return cb(true);
    var newMembership = new Membership(model);
    newMembership.save(cb(null, newMembership));
  });
};

Membership = mongoose.model('Membership', membershipSchema);
module.exports = Membership;