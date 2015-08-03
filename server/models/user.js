'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var moment = require('moment');
var jwt = require('jwt-simple');
var Membership = require('./membership');
var User;


var userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // fullname: { type: String, required: true },
  // currentMember: { type: Boolean, required: true },
  // photo: { type: String },
  // lastActive: { type: Date, required: true },
  // teacher: { type: Boolean, required: true },
  helpRequests: { type: mongoose.Schema.ObjectId, ref: 'HelpRequests' },    // open requests for help in which a chat hasn't started
  helpSessions: { type: mongoose.Schema.ObjectId, ref: 'HelpSessions' },    // currently going sessions in which a chat has been started
  // finishedSessions: { type: mongoose.Schema.Objectid, ref: 'FinishedSessions' },    // help sessions that have been closed, each finished session is just a helpSession, so this model is just an array of helpSession's that have a 'finished: true' attribute, at which point that session will be removed from helpSessions and placed in finishedSessions
  // stripe: { type: mongoose.Schema.ObjectId, ref: 'Stripe' },
  // notifications: { type: mongoose.Schema.ObjectId, ref: 'Notifications' },
  membership: { type: mongoose.Schema.ObjectId, ref: 'Membership' },
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

userSchema.methods.sanitize = function() {
  var userObject = this.toObject();
  delete userObject.password;
  delete userObject.createdAt;
  return userObject;
};

// creates a membership document and stores its Id in user
userSchema.statics.registerAsStudent = function(payload, cb) {
  // to make sure the user id is correct
  User.findById(payload.userId, function(err, user) {
    if (err || !user) return cb(true);
    if (user) {
      Membership.create(payload, function(err, membership) {
        if (err) return cb(true);
        if (membership) {
          console.log('the new membership', membership);
          User.findByIdAndUpdate(user._id, {membership: membership._id}, {new: true}, function(err, user) {
            if (err) return cb(true);
            cb(null, user);
          });
        }
      });
    }
  });
};

User = mongoose.model('User', userSchema);
module.exports = User;