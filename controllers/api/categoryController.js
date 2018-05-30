const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const db = require("../../models");

module.exports = {
  getCategories: function(req, res) {
    // if (req.headers.jwttoken) {
      db.Category.find({})
        .then(function(dbCategories) {
          res.json(dbCategories);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        });
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  }
}