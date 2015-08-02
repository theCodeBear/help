'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var moment = require('moment');
var jwt = require('jwt-simple');
var User;


var userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // fullname: { type: String, required: true },
  // currentlyMember: { type: Boolean, required: true },
  // photo: { type: String },
  // lastActive: { type: Date, required: true },
  // teacher: { type: Boolean, required: true },
  // chats: { type: mongoose.Schema.ObjectId, ref: 'Chats' },
  // stripe: { type: mongoose.Schema.ObjectId, ref: 'Stripe' },
  // notifications: { type: mongoose.Schema.ObjectId, ref: 'Notifications' },
  // membership: { type: mongoose.Schema.ObjectId, ref: 'Membership' },
  // rating: { type: mongoose.Schema.ObjectId, ref: 'Rating' },
  // classesRegisteredFor: { type: mongoose.Schema.ObjectId, ref: 'Class' },
  createdAt: { type: Date, default: Date.now, required: true }
});

userSchema.statics.register = function(payload, cb) {
  User.findOne({email: payload.email}, function(err, user) {
    if (user) return cb(true);
    var newUser = new User(payload);
    newUser.password = bcrypt.hashSync(payload.password, 8);
    newUser.save(cb(null, newUser));
  });
};

userSchema.statics.login = function(creds, cb) {
  User.findOne({email: creds.email}, function(err, user) {
    if (!user) return cb(true);
    var passwordGood = bcrypt.compareSync(creds.password, user.password);
    if (!passwordGood) return cb(true);
    cb(null, user);
  });
};

userSchema.methods.token = function() {
  var payload = {
    sub: this._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
};

userSchema.methods.sanitizeUser = function() {
  var userObject = this.toObject();
  delete userObject.password;
  delete userObject.createdAt;
  return userObject;
};

User = mongoose.model('User', userSchema);
module.exports = User;