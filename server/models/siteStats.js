'use strict';

var mongoose = require('mongoose');
var SiteStats;

var siteStatsSchema = new mongoose.Schema({
  users: Number,
  teachers: Number,
  payingMembers: Number,
  classesTaught: Number,
  helpSessionsComlete: Number,
  totalPointsThisMonth: Number,
  totalMoneyPaidOut: Number,
  firstMonth: Date,   // format: MM/YYY
  monthlyPayOut: [Number]   // array of total payouts per month, from firstMonth to the last month
});

SiteStats = mongoose.model('SiteStats', siteStatsSchema);
module.exports = SiteStats;