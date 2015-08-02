'use strict';

var User = require('../../models/user');

module.exports = function(req, res) {
  User.login(req.body, function(err, user) {
    if (err) return res.status(500);
    var token = user.token();
    user = user.sanitizeUser();
    return res.send({user: user, token: token});
  });
};