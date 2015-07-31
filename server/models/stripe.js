'use strict';

var mongoose = require('mongoose');
var Stripe;

var stripeSchema = new mongoose.Schema({

});

Stripe = mongoose.model('Stripe', stripeSchema);
module.exports = Stripe;