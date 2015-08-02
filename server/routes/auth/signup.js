'use strict';

var User = require('../../models/user');

module.exports = function(req, res) {
  User.register(req.body, function(err, user) {
    if (err) return res.error(err);
    var token = user.token();
    user = user.sanitizeUser();
    return res.send({user: user, token: token});
  });
};