'use strict';

var User = require('../../models/user');

module.exports = function(req, res) {
  console.log(req.body);  // {lengthOfFree: FreePlandurationInDays, userId: the id}
  User.registerAsStudent(req.body, function(err, user) {
    if (err) return res.error(err);
    console.log('user before sanitize', user);
    user = user.sanitize();
    console.log('user to send to browser', user);
    if (user) return res.send({user: user});
  });
};