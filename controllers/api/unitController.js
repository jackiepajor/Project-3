const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport")(passport);
const jwt = require("jsonwebtoken");
const Unit = require("../../models/Unit");
const db = require("../../models");

module.exports = {
  get: function(req, res) {
    var token = getToken(req.headers);
    if (token) {
      db.Unit.find({})
        .then(function(dbUnit) {
          res.json(dbUnit);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    } else {
      return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
  },
  post: function(req, res) {
    var token = getToken(req.headers);
    // if (token) {
      let newUnit = new Unit({
        name: req.body.name,
        author: req.body.author,
        category: req.body.category,
        lessons: req.body.lessons


      });
      db.Unit.create({ newUnit })
        .then(function(dbUnit) {
          res.json(dbUnit);
        })
        .catch(function(err) {
          res.json("Error message: " + err);
        })
    // } else {
    //   return res.status(403).send({success: false, msg: 'Unauthorized.'});
    // }
  }
}