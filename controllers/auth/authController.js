const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

module.exports = {
  register: function(req, res) {
    if (!req.body.username || !req.body.password) {
      res.json({ success: false, msg: 'Please enter a username and password.' });
    } else {
      var newUser = new User({
        username: req.body.username,
        password: req.body.password
      });
      newUser.save(function(err) {
        if (err) {
          return res.json({ success: false, msg: 'User already exists.' });
        }
        res.json({ success: true, msg: 'Created new user.' });
      });
    }
  },
  login: function(req, res) {
    User.findOne({
      username: req.body.username
    }, function(err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
      } else {
        user.comparePassword(req.body.password, function(err, isMatch) {
          if (isMatch && !err) {
            var token = jwt.sign(user.toJSON(), settings.secret);
            res.json({ success: true, token: 'JWT ' + token });
          } else {
            res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
          }
        });
      }
    });
  }
}